import React,{useContext} from "react";
import '../css/home.css'
import { getPKH,connectWallet,disconnectWallet } from "../utils/wallet";
import { Link } from 'react-router-dom';
import UserContext from "../ContexProvider";

function Home() {

    const {useraddress,setUseraddress} = useContext(UserContext);

    const Onconnect = async() =>{
        await connectWallet();
        const address = await getPKH();
        setUseraddress(address);
    }

    const onDisconnect = async() =>{
        await disconnectWallet();
        setUseraddress("");
    }

    return (
        <div>
            
            {
            useraddress==''?<button onClick={Onconnect}>Connect wallet</button>:(
                <button onClick={onDisconnect}>Disconnect Wallet</button>
            )
            }

            <div className="home_light home_x1" />
            <div className="home_light home_x2" />
            <div className="home_light home_x3" />
            <div className="home_light home_x4" />
            <div className="home_light home_x5" />
            <div className="home_light home_x6" />
            <div className="home_light home_x7" />
            <div className="home_light home_x8" />
            <div className="home_light home_x9" />
            <div className="home_container">

                <div className="home_displaycontent">
                    <h2>EasyMint NFTs on Tezos Blockchain</h2>
                    <h2>EasyMint NFTs on Tezos Blockchain</h2>
                </div>
            </div>
            <Link to ='/mint'><button>Mint NFT</button></Link>
        </div>
    )
}

export default Home;