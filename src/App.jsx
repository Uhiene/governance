import { ToastContainer } from "react-toastify"
import CreateProposal from "./components/CreateProposal"
import Governance from "./views/Governance"

const App = () => {
  return (
    <div className="min-h-screen">
      <Governance />
      <CreateProposal />

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
  )
}

export default App
