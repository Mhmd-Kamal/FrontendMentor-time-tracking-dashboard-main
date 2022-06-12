import Image from 'next/image'

function IdCard() {
  return (
    <div className="flex flex-col min-w-full row-span-2 rounded-xl bg-card-bg">
      <div className="flex flex-1 p-8 py-10 space-x-4 rounded-xl bg-mainCard-bg sm:flex-col sm:space-y-10 sm:space-x-0 sm:py-10">
        <img
          className="w-16 rounded-full border-[3px] border-white sm:w-20"
          src="/images/image-jeremy.png"
          alt="personal picture"
        />
        <div className="flex flex-col justify-center sm:space-y-2">
          <p className=" text-slate-400">Report for</p>
          <h1 className="text-2xl text-slate-200 sm:text-5xl sm:leading-tight">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <ul className="flex justify-around p-5 text-lg sm:flex-col sm:space-y-3">
        <li className=" text-desaturated-blue hover:cursor-pointer hover:text-pale-blue">
          Daily
        </li>
        <li className=" text-pale-blue hover:cursor-pointer">Weekly</li>
        <li className=" text-desaturated-blue hover:cursor-pointer hover:text-pale-blue">
          Monthly
        </li>
      </ul>
    </div>
  )
}

export default IdCard
