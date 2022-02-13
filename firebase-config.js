// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLQ9odkHagYJhVxth88ryEgeOw4if-3xY',
  authDomain: 'voice-out-c8313.firebaseapp.com',
  projectId: 'voice-out-c8313',
  storageBucket: 'voice-out-c8313.appspot.com',
  messagingSenderId: '705164742962',
  appId: '1:705164742962:web:544fe14457a20a575cc72b',
  measurementId: 'G-NNDL7J7FZM',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)
