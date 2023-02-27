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

  console.log(players, "players");

  console.log(teams, "teams");

  if (isLoading) return <p>Loading...</p>
  if (!players) return <p>No player data</p>
  if (!teams) return <p>No team data</p>



  const DisplayData = players?.map((player) => {
    return (<div className="card__wrap--inner"><div
      key={player.pid}
      className="card"
    >
      <div class="flex justify-center">
        <div
          class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">

            <img
              class="rounded-t-lg"
              src={player.headshot}
              alt="" />
          </a>
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              <span className='player-num-and-pos'>{player.num} | {player.pos}</span>
              <br />
              <span>{player.fn}</span> <br />
              <span>{player.ln}</span>
            </h5>
            <div class="flex ...">
              <div class="grid grid-cols-3 gap-3">
                <div class="grid-items">PPG {player.pts}</div>
                <div class="grid-items"> RPG {player.reb}</div>
                <div class="grid-items">APG {player.ast}</div>
              </div>
            </div>
          </div>
        </div> </div> </div> </div>

    )
  });

  // https://mono.software/2020/07/29/equal-height-cards-with-flexbox/
  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>The NBA</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold underline">
          NBA App!
        </h1>
        <h1> {players.length}</h1>
        <div class="p-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{DisplayData}</div>;
      </div>
    </div>

  )
}
