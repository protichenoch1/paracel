import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { addDoc, collection, doc, getDoc, getFirestore, serverTimestamp, writeBatch } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { firebaseConfig, firebaseIsConfigured } from "./firebase-config.js";

let db;
if (firebaseIsConfigured) db = getFirestore(initializeApp(firebaseConfig));

function makeTrackingId() {
  const token = crypto.randomUUID().replaceAll("-", "").slice(0, 8).toUpperCase();
  return `BL-${new Date().getFullYear()}-${token}`;
}

export async function submitApplication(application) {
  if (!db) throw new Error("Firebase has not been configured yet.");
  const trackingId = makeTrackingId();
  const applicationRef = doc(collection(db, "applications"));
  const trackingRef = doc(db, "applicationTracking", trackingId);
  const batch = writeBatch(db);
  batch.set(applicationRef, { ...application, trackingId, status: "Received", createdAt: serverTimestamp() });
  batch.set(trackingRef, { jobTitle: application.role, status: "Received", createdAt: serverTimestamp() });
  await batch.commit();
  return trackingId;
}

export async function getApplicationStatus(trackingId) {
  if (!db) throw new Error("Firebase has not been configured yet.");
  const snapshot = await getDoc(doc(db, "applicationTracking", trackingId.trim().toUpperCase()));
  return snapshot.exists() ? snapshot.data() : null;
}
