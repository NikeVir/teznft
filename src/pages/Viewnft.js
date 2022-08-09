import { React, useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import '../css/viewnft2.css'
import { Link } from 'react-router-dom';
import img2 from '../assets/emoji.png'
import UserContext from "../ContexProvider";
import axios from "axios";
import MoonLoader from "react-spinners/ClipLoader";

function Viewnft() {
    let [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { useraddress,setViewItem} = useContext(UserContext)
    const [Data, setData] = useState([])


    useEffect(() => {

        console.log(useraddress)
        const fetchnft = async () => {
            setLoading(true)
            const fetchdata = await axios.get(`https://api.jakartanet.tzkt.io/v1/tokens/balances?account=${useraddress}&token.contract=KT1XSqpRQUqubwJwdjRFduYwKa3vXAqBssxU`)
                .then(res => {
                    return res.data;
                })
                const arr = fetchdata.filter((item) => !!item.token.metadata);
                console.log(arr)
            setData(arr)
            setLoading(false)
        }
        if (Data.length == 0) { fetchnft() }
        else {
            return
        }
    }, [])

    const navigatetodetails=(item)=>{
        // e.preventDefault();
        setViewItem(item)
        navigate(`/nftdetails/${item.id}`, {replace: true});

    }
    return (


        <div  className="container2">

             <div style={{position:"absolute",top:"30%", left:"40%"}}>   
             <MoonLoader color="white" loading={loading}  size={150} />
             </div>
            {
                
                Data.length == 0 && !loading ? <h2 style={{display:"inline-block", textAlign:"center"}}>No NFT minted YET</h2> : (
                    Data.map(item => {
                        return (

                                <div key={item.id} className="grid-item">
                                    <div className="item-style">
                                        <div className="thumb">
                                            <Link to="#">
                                                <img style ={{maxHeight:"250px",minHeight:"250px"}}src={`https://ipfs.io/ipfs/${item.token.metadata.image.split("ipfs://")[1]
                                                    }`} alt="" />
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">
                                                <Link to="#">{item.token.metadata.name} </Link>
                                            </h3>
                                            <div className="profile d-flex-center">
                                                <Link to="/nftdetail">
                                                    <img src={img2} className="image-avatar" alt="" />
                                                </Link>
                                                <Link to="#" className="author-text">
                                                    {item.token.metadata.description}
                                                </Link>
                                                <i className="r" />
                                            </div>
                                            <div className="p">
                                                <button onClick={()=>navigatetodetails(item)} className="btn btn-cart btn-outline">
                                                    <span>
                                                        <i className="r" /> View
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                           
                        )
                    })
                )
            }
        </div>
    )
}

export default Viewnft;