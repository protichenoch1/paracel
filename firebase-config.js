// Replace every value below with the Firebase web-app configuration from:
// Firebase console → Project settings → Your apps → Web app → Config.
export const firebaseConfig = {
  apiKey: "AIzaSyBhCIhMd5JiVZsnzuVPn-KyXhALXEkNtzA",
  authDomain: "borderlesske.firebaseapp.com",
  projectId: "borderlesske",
  storageBucket: "borderlesske.firebasestorage.app",
  messagingSenderId: "967107533059",
  appId: "1:967107533059:web:c29428c037b688ac023136"
};

export const firebaseIsConfigured = !firebaseConfig.apiKey.startsWith("PASTE_");
