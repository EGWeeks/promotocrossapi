# Pro Motocross API

### Clone & Local Development
DynamoDB local package requires AWS credentials, they don't have to be real keys but the variables must exist. To avoid having to enter `--aws-profile` flag on every sls command while developing locally set up your default AWS profile for local development.

Example: 
`.aws/credentials`
```
[default]
aws_access_key_id = dynamodblocal
aws_secret_access_key = localdev
```
`.aws/config`
```
[default]
output = json
region = us-east-1
```
Then when it comes time to deploy to your AWS account you'll have to specify your AWS profile to use.
Example: `sls deploy --stage dev --aws-profile your-named-profile`

1. Clone repository
2. `yarn install`
3. Install DynamoDB locally: `sls dynamodb install`
4. 
5. Add environment variables:
    - Create file named: env.yml
    - Add a local env:
         ```local:
                STAGE: local
                REGION: localhost
                DBURL: http://localhost:8000
            dev:
                STAGE: dev
                REGION: ${opt:region, 'us-east-1'}
                DBURL: https://dynamodb.${opt:region, 'us-east-1'}.amazonaws.com```
6. Start SLS Offline/DynamoDB locally: `sls offline start --stage local` 
7. Run tests by opening seperate terminal window: `sls invoke test --stage local`
