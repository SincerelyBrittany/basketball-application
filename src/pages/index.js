// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home(props) {
  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    // https://nextjs.org/docs/basic-features/data-fetching/client-side
    // https://medium.com/@jdhawks/make-fetch-s-happen-5022fcc2ddae
    setLoading(true)
    Promise.all([
      fetch('/api/players'),
      fetch('/api/teams'),
    ])
      .then(([resPlayers, resTeams]) =>
        Promise.all([resPlayers.json(), resTeams.json()])
      )
      .then(([dataPlayers, dataTeams]) => {
        setPlayers(dataPlayers);
        setTeams(dataTeams);
        setLoading(false)
      });
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!players) return <p>No player data</p>
  if (!teams) return <p>No team data</p>

  const DisplayData = players?.map((player) => {
    // https://stackoverflow.com/questions/47923720/react-js-set-image-as-div-background-inside-map-function
    let team = teams.find(team => player.ta === team.ta);
    let teamImage = team.logo

    return (<div
      key={player.pid}
      className="card"
    >
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:w-2/3">
            <img class="h-48 w-full object-cover md:h-200 md:w-300" src={player.headshot} alt="placeholder image" />
          </div>
          <div class="p-6 md:w-2/3 text-center">
            <img src={teamImage} alt="team-image" class="ml-20 mb-4 shadow-lg rounded-full max-w-full h-10 align-middle border-none" />
            <p>#{player.num} | {player.pos} </p>
            <p>{player.fn} {player.ln}</p>
            <p class="mt-2 text-gray-600"></p>
          </div>
        </div>
        <div class="border-t-4 border-indigo-500 grid grid-cols-3 gap-1 text-center ">
          <div class="rounded-md p-2">
            <p>PPG </p>
            <p>
              {player.pts}
            </p>
          </div>
          <div class=" rounded-md p-2">
            <p>RPG </p>
            <p>{player.reb}</p></div>
          <div class=" rounded-md p-2">
            <p>APG </p>
            <p> {player.ast}</p>
          </div>
        </div>
      </div>
    </div>
    )
  });

  // https://mono.software/2020/07/29/equal-height-cards-with-flexbox/
  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>The NBA</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold underline text-center">
          NBA App!
        </h1>
        <h2 class='text-center'> Total Players: {players.length}</h2>
        <div class="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">{DisplayData}</div>;
      </div>
    </div>

  )
}
