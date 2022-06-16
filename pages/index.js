import Head from 'next/head'
import Image from 'next/image'
import DetailCard from '../components/DetailCard'

import IdCard from '../components/IdCard'
const Home = () => {
  const cards = [
    {
      title: 'Work',
      duration: '32hrs',
      history: 'Last Week - 36hrs',
      icon: "bg-[url('/images/icon-work.svg')]",
      color: 'bg-[#ff8c66]',
    },
    {
      title: 'Play',
      duration: '10hrs',
      history: 'Last Week - 8hrs',
      icon: "bg-[url('/images/icon-play.svg')]",
      color: 'bg-[#56c2e6]',
    },
    {
      title: 'Study',
      duration: '4hrs',
      history: 'Last Week - 7hrs',
      icon: "bg-[url('/images/icon-study.svg')]",
      color: 'bg-[#ff5c7c]',
    },
    {
      title: 'Exercize',
      duration: '4hrs',
      history: 'Last Week - 5hrs',
      icon: "bg-[url('/images/icon-exercise.svg')]",
      color: 'bg-[#4acf81]',
    },
    {
      title: 'Social',
      duration: '5hrs',
      history: 'Last Week - 10hrs',
      icon: "bg-[url('/images/icon-social.svg')]",
      color: 'bg-[#7536d3]',
    },
    {
      title: 'Self Care',
      duration: '2hrs',
      history: 'Last Week - 2hrs',
      icon: "bg-[url('/images/icon-self-care.svg')]",
      color: 'bg-[#f1c65b]',
    },
  ]
  return (
    <div className="flex min-h-screen flex-col items-stretch justify-center gap-5 bg-[#0f1424] py-14 px-5 font-rubik sm:grid sm:max-h-screen sm:min-h-screen sm:grid-cols-4 sm:grid-rows-2 sm:gap-8 sm:px-14">
      <IdCard />
      {cards.map((card) => (
        <DetailCard card={card} key={card.title} />
      ))}
    </div>
  )
}

export default Home
