// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyD-Di7kE45aWX2g-ttexNdjeHeZOB-iGpc",
  authDomain: "marketing-corr-forum.firebaseapp.com",
  projectId: "marketing-corr-forum",
  storageBucket: "marketing-corr-forum.firebasestorage.app",
  messagingSenderId: "942778357566",
  appId: "1:942778357566:web:fb08be875d85a071bf3e6f",
  measurementId: "G-48ECD55HBN"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
