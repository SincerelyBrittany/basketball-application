import Head from 'next/head'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {

  return (
    <div >
      <Head>
        <title>The NBA</title>
      </Head>
      <main className={roboto.className} id={styles.__next}>
        <div class="flex flex-col justify-center items-center h-screen">
          <h1 class="text-3xl font-bold text-center mb-8">Welcome to the NBA App</h1>
          <div class="flex flex-row justify-center items-center">
            <button class="bg-orange-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg mr-4">
              <Link href="/teams">Teams</Link>
            </button>
            <button class="bg-orange-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg">
              <Link href="/players">Players</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
