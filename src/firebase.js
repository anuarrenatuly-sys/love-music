import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDBJYzwRFZ6q5EZlAoSVvquk53-yytQy08",
  authDomain: "love-music-4ee26.firebaseapp.com",
  projectId: "love-music-4ee26",
  storageBucket: "love-music-4ee26.firebasestorage.app",
  messagingSenderId: "754655064722",
  appId: "1:754655064722:web:34ed20c2d7cc44a5eaac4b",
  measurementId: "G-M7WSKHPQF3"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)