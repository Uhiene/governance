
const MobileBTN = () => {
  return (
    <div className="flex flex-col items-center md:hidden space-y-3">
        <button
          className="bg-[#14152A] bg-opacity-75 text-md font-light
          p-3 px-8 rounded-full text-white
              transform transition-transform duration-30"
        >
          0x4E08....999c
        </button>
        <button
          className="bg-gradient-to-r from-[#E77FBD] to-[#5C067F] text-md font-bold
              hover:from-[#5C067F] hover:to-[#E77FBD]
              p-3 px-8 rounded-full text-white
              transform transition-transform duration-30"
        >
          Claim Rewards
        </button>
      </div>
  )
}

export default MobileBTN