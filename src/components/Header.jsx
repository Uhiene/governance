import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut } from "../services/firebase";
import { setGlobalState, useGlobalState } from "../store";

const Header = () => {
  const [currentUser] = useGlobalState("currentUser");
  const navigate = useNavigate()

  const handleLogout = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await logOut()
          .then(() => {
            setGlobalState("currentUser", null);
            navigate("/signup")
            resolve();
          })
          .catch((error) => reject(error));
      }),
      {
        pending: "logging out...",
        success: "logged out successfully",
        error: "encountered error",
      }
    );
  };
  return (
    <div className="p-5 md:p-0 flex justify-between items-center">
      <Link to={"/"}>
        <p>governance</p>
      </Link>
      <Link to={"/documents"}>
        <p>documents</p>
      </Link>
      <div className="flex space-x-6">
        {!currentUser ? (
          <Link to={"/signup"} className="underline text-blue-500">
            Login
          </Link>
        ) : (
          <button className="underline text-blue-500" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
