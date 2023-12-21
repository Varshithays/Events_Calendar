// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWwZyIHKxVoSxNm7onExUI9ux04q4coDM",
            authDomain: "authentication-abf91.firebaseapp.com",
            projectId: "authentication-abf91",
            storageBucket: "authentication-abf91.appspot.com",
            messagingSenderId: "972135858201",
            appId: "1:972135858201:web:8f6666889ecb503f1faa88"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database }; // Export the initialized app and database
