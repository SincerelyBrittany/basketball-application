import path from 'path';
import { promises as fs } from 'fs';

// https://vercel.com/guides/loading-static-file-nextjs-api-route

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const filePath = path.join(process.cwd(), 'data/players.json');
  //Read the json data file data.json
   const jsonData = await fs.readFile(filePath);
   // Parse the JSON data 
   const parsedData = JSON.parse(jsonData);
   //Return the content of the data file in json format
   res.status(200).json(parsedData);
}