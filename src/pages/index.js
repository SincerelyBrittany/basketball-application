import Head from 'next/head'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {

  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>The NBA</title>
      </Head>
      <h1 className="text-3xl font-bold underline text-center">
        Welcome to the NBA App!
      </h1>
      <main className={roboto.className}>
        <div class="flex flex-row items-center justify-center mt-20 " >

          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white  text-lg font-bold py-2 px-4 rounded">
              <Link href="/teams">Teams</Link>
            </button>
          </div>
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded">
              <Link href="/players">Players</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
