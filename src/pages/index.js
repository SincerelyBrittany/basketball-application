// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

import Head from 'next/head'
import { useState, useEffect } from 'react'
import PlayerCard from "../components/PlayerCard";
import Pagination from "../components/Pagination";
import { paginate } from "../helpers/paginate";
import Link from 'next/link'

export default function Home() {

  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>The NBA</title>
      </Head>
      <h1 className="text-3xl font-bold underline text-center">
        Welcome to the NBA App!
      </h1>
      <div class="flex flex-row items-center justify-center mt-20 ">

        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/teams">Teams</Link>
          </button>
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/players">Players</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
