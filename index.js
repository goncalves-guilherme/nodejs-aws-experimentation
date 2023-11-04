import { SecretsManagerClient, ListSecretsCommand, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

async function getSecretsListAsync(client) {
    const params = { 
        MaxResults: 100 
    };

    try {
        const command = new ListSecretsCommand(params);
        const response = await client.send(command);

        return response.SecretList;
    } catch (err) {
        console.error('Error listing secrets:', err);
    }
}

async function getSecretValueAsync(client, secretName) {
    const params = {
      SecretId: secretName,
    };
  
    try {
        const command = new GetSecretValueCommand(params);
        const response = await client.send(command);
        
        if (response && response.SecretString) {
            const secret = JSON.parse(response.SecretString);
            return secret; // Parse the secret as needed
        } else {
            throw new Error('SecretString not found in the response.');
        }
    } catch (error) {
        console.error('Error retrieving secret:', error);
        throw error;
    }
  }

async function main() {
    try {
        const AWS_REGION = 'eu-west-2';
        
        const client = new SecretsManagerClient({ region: AWS_REGION});

        const aws_secrets = await getSecretsListAsync(client);

        const secret_values = await Promise.all(aws_secrets.map(s => getSecretValueAsync(client, s.Name)));
    } catch (error) {
        console.error('Main error:', error);
    }

    console.log("Bye...");
}

main();