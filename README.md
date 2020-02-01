## Firebase Config
```<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>```

### ENV FILES

REACT_APP_API_KEY=AIzaSyBvGqvxfc-ipYZK_Djpz5BqGQQQ2YjiN9A
REACT_APP_AUTH_DOMAIN=hackathon-projects-79d4e.firebaseapp.com
REACT_APP_DATABASE_URL=https://hackathon-projects-79d4e.firebaseio.com
REACT_APP_PROJECT_ID=hackathon-projects-79d4e
REACT_APP_STORAGE_BUCKET=hackathon-projects-79d4e.appspot.com
REACT_APP_MESSAGING_SENDER_ID=444566338423
REACT_APP_APP_ID=1:444566338423:web:6e40bf3234e12604597f72
REACT_APP_MEASUREMENT_ID=G-80CXT2DFEJ
