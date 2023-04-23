import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import { setGlobalState } from "./store";
import AuthGuard from "./utils/AuthGuard";
import Governance from "./views/Governance";
import Signup from "./views/Signup";
import Documents from "./views/Documents";

const App = () => {
  useEffect(async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setGlobalState("currentUser", user);
      } else {
        setGlobalState("currentUser", null);
      }
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route element={<AuthGuard/>}>
          <Route path={"/"} element={<Governance />} />
          <Route path={"/documents"} element={<Documents />} />
        </Route>
        <Route path={"/signup"} element={<Signup />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
