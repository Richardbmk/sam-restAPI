# AWS SAM Project - Building Serverless REST API with AWS SAM (NOTES)

- `npm init -y`
- `npm install aws-sdk`
- `sam validate`
   
## Deploying command
- `sam package --template-file template.yaml --output-template-file templateGenerated.yaml --s3-bucket rick-sam-helloword`
- `sam deploy --template-file templateGenerated.yaml --stack-name sam-rest-api --capabilities CAPABILITY_IAM`