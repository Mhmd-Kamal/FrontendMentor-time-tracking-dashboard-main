import React from 'react'

function DetailCard({ card }) {
  return (
    <div
      className={`flex min-w-full flex-col rounded-xl rounded-b-2xl bg-[length:65px] ${card.color} ${card.icon} bg-[right_10px_top] bg-no-repeat`}
    >
      <div className="h-10 sm:h-12 " />

      <div className="grid flex-1 grid-cols-2 grid-rows-2 items-center rounded-xl bg-card-bg p-6 text-pale-blue hover:bg-[#34397B] sm:grid-rows-3">
        <h2 className="text-lg justify-self-start">{card.title}</h2>
        <img
          className="w-6 py-2 cursor-pointer justify-self-end"
          src="/images/icon-ellipsis.svg"
          alt="ellipsis"
        />
        <p className="text-4xl sm:col-span-2 sm:text-5xl">{card.duration}</p>
        <p className="text-md justify-self-end text-desaturated-blue sm:col-span-2 sm:justify-self-start">
          {card.history}
        </p>
      </div>
    </div>
  )
}

export default DetailCard
