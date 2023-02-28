import { useState, useEffect } from 'react'
import Pagination from "../components/Pagination";
import { paginate } from "../helpers/paginate";

import { getData } from './api/teams'

export default function Teams(props) {
    const teams = props.teams
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedPosts = paginate(teams, currentPage, pageSize);

    return (
        <div>
            <h1> Teams </h1>
            <table class="table-fixed border-separate border-spacing-2 border border-slate-400 ">
                <thead>
                    <tr>
                        <th>TA</th>
                        <th>City</th>
                        <th>Name</th>
                    </tr>
                </thead>
                {paginatedPosts.map(team =>
                    <tbody>
                        <tr key={team.pid}>
                            <td>{team.ta}</td>
                            <td>{team.city}</td>
                            <td>{team.name}</td>
                            <td> <img src={team.logo} alt="..." class="ml-20 object-right text-right shadow-lg rounded-full max-w-full h-10 align-middle border-none" /></td>
                        </tr>
                    </tbody>
                )}
            </table>

            <Pagination
                items={teams.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
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
