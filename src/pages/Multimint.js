import React, { useContext, useEffect, useState } from "react";
import '../css/mockmint.css'
import UserContext from "../ContexProvider";
import Mintednftbox from "../components/mintednftbox/Mintednftbox";
import MintednftOther from "../components/mintednftbox/MintednftOther";
import { uploadToIpfs } from "../utils/upload";


export default function Multimint() {
    const [mintown, setMintown] = useState([])
    const [mintOther, setMintOther] = useState([])
    const [addmint, setaddmint] = useState(1)
    const [addmintOther, setaddmintOhter] = useState(1)

    const [toggle, setToggle] = useState("own")

    const { useraddress } = useContext(UserContext)

    const addmore = () => {
        if (addmint < 6) {
            setaddmint(addmint + 1)
        }
    }
    const addmoreOther = () => {
        if (addmintOther < 6) {
            setaddmintOhter(addmint + 1)
        }
    }
    const submitfoOwn = (e) => {
        e.preventDefault();
        const reg = {
            name: e.target.title.value,
            image: e.target.image.files[0],
            description: e.target.desc.value,
            address: useraddress
        }
        mintown.push(reg)

        e.preventDefault();

    }

    const submitforOther = (e) => {
        e.preventDefault();
        const reg = {
            name: e.target.title.value,
            image: e.target.image.files[0],
            description: e.target.desc.value,
            address: e.target.address.value
        }
        mintOther.push(reg)
    }
    const mintforown = async () => {
        console.log(mintown)
        var ipfsarr = []
        // for (var i = 0; i < mintown.length; i++) {
        //     var ipfs = await uploadToIpfs(mintown[i].name, mintown[i].description, mintown[i].image)
        //     ipfsarr[i] = ipfs;
        // }
        // console.log(ipfsarr)
        // const res = await mulmintNFT(useraddress,ipfsarr)


    }
    const mintforother = async () => {
        console.log(mintOther)

        var ipfsarr = []
        for (var i = 0; i < mintOther.length; i++) {
            var ipfs = await uploadToIpfs(mintOther[i].name, mintOther[i].description, mintOther[i].image)
            ipfsarr[i] = ipfs;
        }
        const res = await mulmintNFT(mintOther[i].address, ipfsarr)

    }

    return (

        <>

            {toggle == "own" ?
                (<div><button onClick={() => setToggle("other")}>Click to Mint For Other</button>
                    {[...Array(addmint)].map((el, index) =>
                        <Mintednftbox key={index} index ={addmint} submit={submitfoOwn} />
                    )}
                    <button style = {{width:"70px"}} onClick={addmore}>+</button>
                    <button onClick={mintforown}>EasyMint</button>
                </div>) :

                (
                    <div>
                        <button onClick={() => setToggle("own")}>Click to Mint For Other</button>
                        {[...Array(addmintOther)].map((el, index) =>
                            <MintednftOther key={index} submit={submitforOther} />
                        )}
                        <button style = {{width:"70px"}} onClick={addmoreOther}>+</button>

                        <button onClick={mintforother}>EasyMint</button>
                    </div>
                )}

        </>
    )
}

