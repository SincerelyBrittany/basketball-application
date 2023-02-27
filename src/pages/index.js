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

// https://mono.software/2020/07/29/equal-height-cards-with-flexbox/
  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>The NBA</title>
      </Head>
      <div>
      <h1>NBA </h1>
     <h1> {players.length}</h1>
     <div className="card__wrap--outer">
     <div class="card">
                <div class="card__item">
                    <h2>First Card Title</h2>
                </div>
								<div class="card__sub">
										<small>New York</small>
								</div>
								<div class="card__item flexible">
										<small>Vexillologist mustache heirloom plaid adaptogen subway tile. Biodiesel microdosing pinterest, cloud bread vice kickstarter pickled PBR&B. Prism palo santo craft beer cold-pressed, heirloom tofu snackwave fashion axe ramps iPhone.</small>
								</div>
								<div class="card__item">
										<small>Reading Time: 4min</small>
								</div>
								<div class="card__footer">
									<a class="pull" href="#"><small>Read more</small></a>
									<a class="push" href="#"><small>Share</small></a>
								</div>
            </div>

{
      
      players.map(player => {
      return <div className="card__wrap--inner"><div
       key={player.pid}
       className="card"
       >
{/* 
       {
        //search for teams image
        // https://stackoverflow.com/questions/8517089/js-search-in-object-values
 return teams.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
} */}

        <div clasName="img-div">
        {/* <img className="half img-right" src={player.headshot}/>

        <div className="half text-left">
          <span className='player-num-and-pos'>{player.num} | {player.pos}</span>
          <br />
          <div>
          <div class="card__item">
          <span>{player.fn}</span>
          <span>{player.ln}</span>
                </div>
         
          </div> */}
       {/* </div> */}
       </div>
  
     
       

       <div class="grid-items-container card__item flexible">
       <div class="grid-items">PPG {player.pts}</div>
       <div class="grid-items"> RPG {player.reb}</div>
       <div class="grid-items">APG {player.ast}</div>

       {/* <p> PPT {player.pts}</p>
       <p> RPG {player.reb}</p>
       <p> APT{player.ast}</p> */}
       </div>
     </div></div>}
     )}
    </div>
    </div>
    </div>
  )
}
