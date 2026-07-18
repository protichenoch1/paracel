# Connect Borderless to Firebase

1. In the [Firebase console](https://console.firebase.google.com/), create a project and register a **Web app**.
2. Create a **Cloud Firestore** database in production mode.
3. Copy the web-app configuration object into `firebase-config.js`. The Firebase web configuration identifies your app; it is not a private server secret.
4. In Firestore, open **Rules**, replace the default rules with the contents of `firestore.rules`, and publish them.
5. Deploy the updated files to GitHub/Vercel.

## How tracking works

- Full applications, including candidate contact details, live in the private `applications` collection.
- Candidates receive a generated tracking ID after applying.
- The `applicationTracking` collection exposes only job title and status when someone has that ID. It never exposes applicant details.
- Update an application's `status` in the Firebase console and update the matching `applicationTracking/{trackingId}` record with the same status.

## Important production hardening

Before promoting the site publicly, add Firebase App Check and create an authenticated admin account with the `admin` custom claim. This stops the public site from reading applicant data and limits who can manage applications.
