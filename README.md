# Node.js AWS Experimentation

This repository contains Node.js scripts for experimentation with the AWS SDK. Whether you're just getting started with AWS or looking to expand your knowledge, these scripts provide hands-on experience with AWS services.

## Prerequisites

Before you can run the scripts in this repository, you'll need the following:

- An AWS account: You can sign up for an AWS account at [AWS Console](https://aws.amazon.com/).
- IAM user and access key: Create an IAM user in the AWS Identity and Access Management (IAM) service. This user will need programmatic access. Make sure to generate an access key and obtain the access key ID and secret access key.
- AWS Command Line Interface (CLI): Install the AWS CLI by following the instructions in the [AWS CLI User Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
- Configure AWS CLI: After installing the AWS CLI, configure it with your IAM user's access key ID and secret access key using `aws configure`. You will also need to set your default region.
- Adjust AWS Region: In the `config.js` file, update the `AWS_REGION` to match the AWS region you're working with. This ensures that the SDK interacts with the correct AWS region.

## Usage

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nodejs-aws-experimentation.git
   ```

2. Change into the project directory:

   ```bash
   cd nodejs-aws-experimentation
   ```

3. Run the code by typing:

   ```bash
   node index.js
   ```

This will execute the included Node.js scripts and allow you to experiment with AWS services. Remember to follow AWS best practices and clean up any resources you create during experimentation to avoid unexpected charges.
