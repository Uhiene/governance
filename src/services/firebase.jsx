import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { setGlobalState } from "../store";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFYgbQzSSJ-duZuX2fT3Cu6jWDeta5qKg",
  authDomain: "governance-6038f.firebaseapp.com",
  projectId: "governance-6038f",
  storageBucket: "governance-6038f.appspot.com",
  messagingSenderId: "904295067026",
  appId: "1:904295067026:web:926cbdcaad5ff8c55ce54b",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

const storage = getStorage(app);

const createProposal = async (params) => {
  return new Promise(async (resolve, reject) => {
    const docRef = await addDoc(collection(db, "proposals"), params);
    if (docRef.id) {
      await getProposals();
      resolve(docRef.id);
    } else {
      reject();
    }
  });
};

const getProposals = async () => {
  return new Promise(async (resolve, reject) => {
    const quarySnapshot = await getDocs(collection(db, "proposals"));
    const data = [];
    quarySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setGlobalState("proposals", data);
    resolve(data);
  });
};

const deleteProposal = async (id) => {
  return new Promise(async (resolve, reject) => {
    await deleteDoc(doc(db, "proposals", id))
      .then(async () => {
        await getProposals();
        resolve();
      })
      .catch(() => reject());
  });
};

const updateProposal = async (id, params) => {
  return new Promise(async (resolve, reject) => {
    await updateDoc(doc(db, "proposals", id), params)
      .then(async () => {
        await getProposals();
        resolve();
      })
      .catch(() => reject());
  });
};

const uploadFile = async (file, name) => {
  return new Promise(async (resolve, reject) => {
    const storageRef = ref(storage, `myFolder/${name}`);
    uploadBytes(storageRef, file)
      .then(async (snapShot) => {
        if (snapShot.ref) {
          await getDownloadURL(snapShot.ref)
            .then((fileUrl) => {
              resolve(fileUrl);
            })
            .catch(() => reject());
        }
      })
      .catch(() => reject());
  });
};

const signupUser = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error));
  });
};

const signinUser = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error));
  });
};

const logOut = async () => {
  return new Promise(async (resolve, reject) => {
    signOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
};

const isUserLoggedIn = async () => {
  return new Promise(async (resolve, reject) => {
    const user = auth.currentUser;
    if (user) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

export {
  createProposal,
  getProposals,
  deleteProposal,
  updateProposal,
  signupUser,
  signinUser,
  logOut,
  isUserLoggedIn,
  uploadFile,
};
