import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// import config from './config';
// import Amplify from 'aws-amplify';

// Amplify.configure({
//   Auth: {
//     mandatorySignIn: true,
//     region: config.cognito.REGION,
//     userPoolId: config.cognito.USER_POOL_ID,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID,
//     userPoolWebClientId: config.cognito.APP_ClIENT_ID
//   },
//   Storage: {
//     region: config.s3.REGION,
//     bucket: config.s3.BUCKET,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID
//   },
//   API: {
//     endpoints: [
//       {
//         name: 'projects',
//         endpoint: config.apiGateway.URL,
//         region: config.apiGateway.REGION
//       }
//     ]
//   }
// });

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
