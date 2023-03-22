import Proposals from '../components/Proposals'
import YourInfo from '../components/YourInfo'

const Governance = () => {
  return (
    <div className="text-black p-5 md:p-10">
        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between w-full'>
          <YourInfo/>
          <Proposals/>
        </div>
    </div>
  )
}

export default Governance