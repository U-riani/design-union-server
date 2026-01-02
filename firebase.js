const admin = require("firebase-admin");

const {
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_STORAGE_BUCKET,
} = process.env;

if (
  !FIREBASE_PROJECT_ID ||
  !FIREBASE_CLIENT_EMAIL ||
  !FIREBASE_PRIVATE_KEY ||
  !FIREBASE_STORAGE_BUCKET
) {
  throw new Error("Missing Firebase environment variables");
}

const privateKey = FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert({
    project_id: FIREBASE_PROJECT_ID,
    client_email: FIREBASE_CLIENT_EMAIL,
    private_key: privateKey,
  }),
  storageBucket: FIREBASE_STORAGE_BUCKET,
});

module.exports = admin.storage().bucket();
