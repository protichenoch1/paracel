// Replace every value below with the Firebase web-app configuration from:
// Firebase console → Project settings → Your apps → Web app → Config.
export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

export const firebaseIsConfigured = !firebaseConfig.apiKey.startsWith("PASTE_");
