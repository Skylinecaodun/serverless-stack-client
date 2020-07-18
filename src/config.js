export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-download"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://kz3ozru0z2.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_NkvwrnCM3",
      APP_CLIENT_ID: "51rq22ur1hb6a8cjh299qbp9sv",
      IDENTITY_POOL_ID: "us-east-2:14958ac1-1064-4b26-a3af-0d9e17e091fc"
    }
  };