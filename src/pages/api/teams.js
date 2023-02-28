import path from 'path';
import { promises as fs } from 'fs';


export async function getData() {
  const response = await fetch('http://localhost:3000/api/teams')
  const jsonData = await response.json()
  return jsonData
}

// https://vercel.com/guides/loading-static-file-nextjs-api-route

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const filePath = path.join(process.cwd(), 'data/teams.json');
  //Read the json data file data.json
  const jsonData = await fs.readFile(filePath);
  const parsedData = JSON.parse(jsonData);
  //Return the content of the data file in json format
  res.status(200).json(parsedData);
}