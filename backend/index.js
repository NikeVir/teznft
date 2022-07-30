const express = require('express');
const app = express();
import {NFTStorage,File} from 'nft.storage'
const client = new NFTStorage({ token: 'API_TOKEN' })
const PORT = 8000;

app.get('/',(req,res)=>{
    res.send("fuck you")
})

app.get('/uploadToipfs',async(req,res)=>{
    const metadata = await client.store({
        name: 'Pinpie',
        description: 'Pin is not delicious beef!',
        image: new File(
          [
            /* data */
          ],
          'pinpie.jpg',
          { type: 'image/jpg' }
        ),
      })
      console.log(metadata.url)
})

app.listen(PORT)