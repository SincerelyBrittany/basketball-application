import Head from 'next/head'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

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
      <main className={roboto.className} id="__next">
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


        {/* <div class="flex flex-row justify-center items-center h-screen">
          <button class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg mb-20 sm:mb-0 sm:mr-4 sm:w-1/2 lg:w-1/3">
            <Link href="/teams">Teams</Link>
          </button>
          <button class="bg-orange-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg sm:w-1/2 lg:w-1/3">
            <Link href="/players">Players</Link>
          </button>
        </div> */}

        {/* <div class="flex flex-row items-center justify-center mt-20 " >
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
        </div> */}
      </main>
    </div>
  )
}
