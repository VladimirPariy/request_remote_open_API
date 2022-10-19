import fs from 'fs';
import fetch from 'node-fetch'

async function fetchData() {
  let data = await fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())

  const writeStream = fs.createWriteStream('./placeholder.json');
  writeStream.write(JSON.stringify(data, null, 2))
}

fetchData()
