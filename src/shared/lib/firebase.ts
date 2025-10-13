// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAamvky1gGylKPd5_rmQw0P40Cel6h-KCM',
	authDomain: 'portfolio-illia.firebaseapp.com',
	projectId: 'portfolio-illia',
	storageBucket: 'portfolio-illia.firebasestorage.app',
	messagingSenderId: '285255083621',
	appId: '1:285255083621:web:f9bee4aa855015abbc488c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
