import { useState, useEffect } from 'react'
import Pagination from "../component/Pagination";
import { paginate } from "../helpers/paginate";

export default function Teams(props) {
  // console.log(props.files[2].content, "this is data")
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
        items={teams.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </div>);
}

// export async function getServerSideProps() {
//   //https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

//   try {
//      // Fetch data from external API
//     const res = await fetch('/api/teams')
//     const data = await res.json()
//     return {
//       props: { data }
//     };
//   } catch{
//     res.statusCode = 404;
//     return {
//       props: {}
//     };
//   }
// }


// Fetching data from the JSON file

// https://jasonwatmore.com/post/2021/08/28/next-js-read-write-data-to-json-files-as-the-database
// https://stackoverflow.com/questions/66106776/error-how-to-serialize-data-from-getstaticprops-next-
// https://github.com/vercel/next.js/discussions/19681

// import fsPromises from 'fs/promises';
// import path from 'path'

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data/players.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);
//  // const allProfiles = JSON.stringify(jsonData)

//   return {
//     props: objectData
//     // props: allProfiles
//   }
// }

import { promises as fs } from 'fs'
import path from 'path'


export async function getServerSideProps() {
  // C:\Users\build\Documents\code\nba-eval-v1\data\teams.json
  const postsDirectory = path.join(process.cwd(), 'data')
  const filenames = await fs.readdir(postsDirectory)

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const objectData = JSON.parse(fileContents);

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: objectData,
    }
  })
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      files: await Promise.all(posts),
    },
  }
}