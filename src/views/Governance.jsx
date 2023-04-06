import { useEffect, } from 'react'
import CreateProposal from '../components/CreateProposal'
import EditProposal from '../components/EditProposal'
import Proposals from '../components/Proposals'
import YourInfo from '../components/YourInfo'
import { getProposals } from '../services/firebase'
import { setGlobalState, useGlobalState } from '../store'

const Governance = () => {
  const [proposals] = useGlobalState("proposals")
  const [proposal] = useGlobalState("proposal")
  useEffect(async () => {
    await getProposals()
  }, [])
  return (
    <div className="text-black p-5 md:p-10">
      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between w-full'>
        <YourInfo />
        <Proposals proposals={proposals} />\
        <CreateProposal />
        {
          proposal ? <EditProposal /> : null
        }
      </div>
    </div>
  )
}

export default Governance