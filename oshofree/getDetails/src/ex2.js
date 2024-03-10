const admin = require('firebase-admin');
require("dotenv").config()

const serviceAccount ={
  "type": "service_account",
  "project_id": "adscon-5db56",
  "private_key_id": "59fe07df0dff31d2bb8495dd6272ee7be45ecd1c",
  "private_key": process.env.FIREBASE_PRIVATE_KEY,
  "client_email": "firebase-adminsdk-gegef@adscon-5db56.iam.gserviceaccount.com",
  "client_id": "103997801621331247267",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gegef%40adscon-5db56.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const returnToken = async (request, response)=>{
  try{
    const token = request.headers.authorization.split(' ')[1]   
    admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
        response.json({
          userDetails: decodedToken
        })
    })
    .catch((error) => {
      response.status(400).json(error)
    });

  }
  catch(error){
    response.status(400).json(error)
  }
}

module.exports = returnToken