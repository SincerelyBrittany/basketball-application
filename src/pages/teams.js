import { useState, useEffect } from 'react'
import Pagination from "../components/Pagination";
import { paginate } from "../helpers/paginate";
import Link from 'next/link'

import { getData } from './api/teams'

export default function Teams(props) {
    const teams = props.teams
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedPosts = paginate(teams, currentPage, pageSize);

    const colorPicker = (color) => {
        // console.log(color, "this is color")
        // console.log(`bg-[` + color + `]`, "this is the color")
        return "bg-[" + color + "]"
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline text-center">
                Teams
            </h1>
            <div class="flex items-center justify-center h-screen">
                <table class=" border-separate border-spacing-2 border border-slate-400 ">
                    <thead>
                        <tr>
                            <th>TA</th>
                            <th>City</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    {paginatedPosts.map(team =>
                        <tbody >
                            <tr key={team.pid} className={colorPicker(team.color)}>
                                <td>{team.ta}</td>
                                <td>{team.city}</td>
                                <td>{team.name}</td>
                                <td> <img src={team.logo} alt="..." class="margin: 0 auto shadow-lg rounded-full max-w-full h-10 align-middle border-none" /></td>
                            </tr>
                        </tbody>
                    )}
                </table>


                <div class="fixed inset-x-0 bottom-0 text-center mb-10">
                    <Pagination
                        items={teams.length}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={onPageChange}
                    />
                    <button className='text-center'>
                        <Link href="/">Back</Link>
                    </button>
                </div>
            </div>
        </div>);
}

// https://stackoverflow.com/questions/74966208/next-js-typeerror-failed-to-parse-url-from-api-projects-or-error-connect-econ
// https://egghead.io/lessons/react-fetch-data-from-an-api-on-the-server-side-with-getserversideprops-in-next-js
// https://stackoverflow.com/questions/65752932/internal-api-fetch-with-getserversideprops-next-js
export async function getServerSideProps() {
    try {
        const jsonData = await getData()
        return {
            props: { teams: jsonData },
        };
    } catch {
        res.statusCode = 404;
        return {
            props: []
        };
    }

}
