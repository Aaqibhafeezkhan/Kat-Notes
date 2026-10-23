
# Contributing

Thanks for wanting to help out. This is a small Preact + Firebase todo app, and contributions of any size are welcome. 🐱😺

## Getting started

1. Fork the repo and clone your fork.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

## Firebase setup

Do not use my API keys. The `apiKey` in the frontend code is only a project identifier, not a secret. Instead, pick one of these two options:

### Option 1: Firebase Emulator (recommended)

This runs everything locally and needs no real Firebase project.

1. Install the Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Log in (only needed for the CLI):

   ```bash
   firebase login
   ```

3. Start the emulator:

   ```bash
   firebase emulators:start
   ```

4. Point the app at the emulator. In your Firebase config, connect the Firestore emulator on port 8080.

The Emulator UI usually runs at `http://127.0.0.1:4000`, where you can inspect data and confirm CRUD works.

### Option 2: Your own free Firebase project

1. Create a free Spark plan project in the Firebase Console.
2. Add a Web App and copy its config.
3. Put the config in a local `.env` file. For Vite, prefix variables with `VITE_`, for example `VITE_FIREBASE_API_KEY`.
4. Make sure `.env` is in `.gitignore` and never committed.
5. Apply the same Firestore rules to your own project.



## Pull requests
If you add tests, mention how to run them in your pull request.

- Open an issue first, or comment on an existing one, so we can agree on the approach.
- Keep changes focused. One feature or fix per pull request.
- Describe what you changed and how you tested it.

## Questions
If anything is unclear, open an issue and ask. No question is too small. Have fun coding! 🐱