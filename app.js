// node-fetch
//https://api.openweathermap.org/data/2.5/weather?q=zaporizhia&appid=50cb39ad20e8cdadfa2c8ce62827d3fa
// import fetch from "node-fetch";
// import {createWriteStream, createReadStream} from 'fs'
//



// axios
const fs = require('fs')
const axios = require('axios')


async function axiosReq() {
  const data = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=zaporizhia&appid=50cb39ad20e8cdadfa2c8ce62827d3fa')

  const writeStream = fs.createWriteStream('./weather.json');
  writeStream.write(JSON.stringify(data.data, null, 2))
}

axiosReq()


