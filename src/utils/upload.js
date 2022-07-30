import axios from 'axios';

 
// import {NFTStorage, File} from 'nft.storage';

// const apiKey =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERBNTQzZUE4NTBlQzQ5MEZEYjYwRGMzNzM4NkMyZDJhMTY5RTYzNjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTE3OTMxOTYxNCwibmFtZSI6Im5ld0tleSJ9.L939Un52xPfMeTA2F84RXfWYfq633QfdavdTVhECV_g';


// const client = new NFTStorage({token: apiKey});
// const uploadToIpfs = async (name, description, imgFile) => {
    

//     console.log(imgFile.type)
//     const metadata = await client.store({
//         name: name,
//         description: description,
//         image: new File([imgFile], imgFile.name, {type: imgFile.type}),
//         decimals: 0,
//         shouldPreferSymbol: false,
//         isBooleanAmount: true,
//         artifactUri: new File([imgFile], imgFile.name, {type: imgFile.type}),
//         displayUri: new File([imgFile], imgFile.name, {type: imgFile.type}),
//         thumbnailUri: new File([imgFile], imgFile.name, {type: imgFile.type}),
//         creators: ['Blockmaster'],  
//     });
//     return metadata.url;
// };

const REACT_APP_PINATA_API_KEY="f598d75907dc0f91fb91"
const REACT_APP_PINATA_API_SECRET="304dd2210dd5834482039ecde47ae461d563d1b6f622f9266c7a57df39d41397"



const sendFileToIPFS = async (name,description,fileImg) => {

    if (fileImg) {
        try {

            const formData = new FormData();
            formData.append("file", fileImg);
            formData.append("name", name);
            formData.append("description", description);

            const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key':REACT_APP_PINATA_API_KEY,
                    'pinata_secret_api_key': REACT_APP_PINATA_API_SECRET,
                    "Content-Type": "multipart/form-data"
                },
            });

            const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
         console.log(ImgHash); 
        }catch (err){
            console.log("err "+err)
        }
    }
    
}

export {sendFileToIPFS};
