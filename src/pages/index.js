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
  
  console.log( teams, "teams");

  if (isLoading) return <p>Loading...</p>
  if (!players) return <p>No player data</p>
  if (!teams) return <p>No team data</p>

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >

      </main>
    </>
  )
}