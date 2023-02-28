import { useState, useEffect } from 'react'
import Pagination from "../component/Pagination";
import { paginate } from "../helpers/paginate";

export default function Teams(props) {
    const teams = props.files[2].content
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

import { promises as fs } from 'fs'
import path from 'path'


export async function getServerSideProps() {
    const postsDirectory = path.join(process.cwd(), 'data')
    const filenames = await fs.readdir(postsDirectory)

    const posts = filenames.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = await fs.readFile(filePath, 'utf8')
        const objectData = JSON.parse(fileContents);
        return {
            filename,
            content: objectData,
        }
    })
    return {
        props: {
            files: await Promise.all(posts),
        },
    }
}