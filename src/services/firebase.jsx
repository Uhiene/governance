import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore"
import { setGlobalState } from "../store";

const firebaseConfig = {
    apiKey: "AIzaSyAFYgbQzSSJ-duZuX2fT3Cu6jWDeta5qKg",
    authDomain: "governance-6038f.firebaseapp.com",
    projectId: "governance-6038f",
    storageBucket: "governance-6038f.appspot.com",
    messagingSenderId: "904295067026",
    appId: "1:904295067026:web:926cbdcaad5ff8c55ce54b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const createProposal = async (params) => {
    return new Promise(async (resolve, reject) => {
        const docRef = await addDoc(collection(db, "proposals"), params)
        if (docRef.id) {
            await getProposals()
            resolve(docRef.id)
        } else {
            reject()
        }
    })
}

const getProposals = async () => {
    return new Promise(async (resolve, reject) => {
        const quarySnapshot = await getDocs(collection(db, "proposals"))
        const data = []
        quarySnapshot.forEach((doc) => {
            data.push(
                {
                    id: doc.id,
                    ...doc.data()
                }
            )
        })
        setGlobalState("proposals",data)
        resolve(data)
    })
}
export { createProposal, getProposals}