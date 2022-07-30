import React from 'react'
import { getContractdetails,getNFTs,mintNFT,connectWallet} from '../utils/wallet';
import { uploadToIpfs,sendFileToIPFS } from '../utils/upload';


export default function Mint() {
    const Onconnect = async() =>{
        await connectWallet();
        const cont = await getContractdetails();
        console.log(cont)
    }

    const submit = async (event) => {
        try {
            event.preventDefault();
            const address = event.target.address.value;
            const name = event.target.name.value;
            const description = event.target.description.value;
            const fileImg = event.target.image.files[0];

            const nfts = await getNFTs();
        

            // const ipfsUrl = await sendFileToIPFS(name, description, fileImg);
            // console.log("YOUR"+ ipfsUrl);
            const ipfsUrl = "ipfs://Qmd5umyBCyCh1fCowz3WULu36HswjxQEN6F2LebB68F8sa"
            const op = await mintNFT(address, ipfsUrl, nfts.length);

            console.log(op);
            setMessage('Minted Successfully!');

            // const stor = [...storage];
            // stor.push({
            //     token_id: token_id,
            //     url: ipfsUrl,
            // });

            // setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div>
        Mint
        <button onClick={Onconnect}>Connect Wallet</button>
        <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="tokenID" className="form-label">
                        Token ID
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="tokenID"
                        aria-describedby="tokenID"
                        required
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input type="text" className="form-control" id="address" aria-describedby="address" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="description"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Image
                    </label>
                    <input className="form-control" type="file" id="image" accept="image/*" required />
                </div>
                <button type="submit" className="btn btn-primary" >
                   
                    Mint
                </button>
            </form>
        
    </div>
  )
}
