const dev = {
  STRIPE_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-bewl4ed1k7ik"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://4y2rvf520h.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_d70G0dmEE",
    APP_CLIENT_ID: "3k955hbshcurpl65i2l1o1msc",
    IDENTITY_POOL_ID: "us-east-2:4d39b751-5499-4353-8293-2b71064305ee"
  }
};

const prod = {
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-7h55b7o6zkn8"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://biewlw1kkd.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Plexe1y9B",
    APP_CLIENT_ID: "1g168270ackqjr0hclo0mv2nce",
    IDENTITY_POOL_ID: "us-east-2:e90e84f8-0728-4e44-b69b-edffa0b578a2"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};