import Head from 'next/head'
import { useState, useEffect } from 'react'
import PlayerCard from "../components/PlayerCard";
import Pagination from "../components/Pagination";
import { paginate } from "../helpers/paginate";
import Link from 'next/link'

export default function Players(props) {
    const [players, setPlayers] = useState([])
    const [teams, setTeams] = useState([])
    const [isLoading, setLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 30;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedPlayers = paginate(players, currentPage, pageSize);

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

    const DisplayData = paginatedPlayers?.map((player) => {
        // https://stackoverflow.com/questions/47923720/react-js-set-image-as-div-background-inside-map-function
        let team = teams.find(team => player.ta === team.ta);
        return (
            <PlayerCard player={player} team={team} />
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
                    Players
                </h1>

                <h2 class='text-center'> Total Players: {players.length}</h2>
                <div class="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                    {DisplayData}
                </div>
                <div className='text-center'> <Pagination
                    items={players.length}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={onPageChange}
                />

                    <button className='text-center button mt-5 h-10 px-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-80'>
                        <Link href="/">Back</Link>
                    </button>
                </div>



            </div>
        </div>

    )
}
