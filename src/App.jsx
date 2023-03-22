import CreateProposal from "./components/CreateProposal"
import Governance from "./views/Governance"

const App = () => {
  return (
    <div className="min-h-screen">
      <Governance/>
      <CreateProposal/>
    </div>
  )
}

export default App
