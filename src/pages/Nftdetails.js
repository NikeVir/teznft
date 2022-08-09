import React, { useContext, useState,useEffect } from 'react'
import '../css/nftdetailcss.css'
import UserContext from '../ContexProvider'

import { Link,useParams} from 'react-router-dom';
import axios from 'axios';

export default function Nftdetails() {
    // const { viewItem } = useContext(UserContext);
    const [resdata,setresdata] = useState([])
    const {id} = useParams();
    const [loading, setLoading] = useState("true");

    useEffect(() => {
        const loadData = async () => {
                const res = await axios.get(`https://api.jakartanet.tzkt.io/v1/tokens/balances?id=${id}`)
                setresdata(res.data)
                console.log(res.data)
                setLoading("false");
        }
        loadData();
    }, [])
    return (
        <>
        {
                loading  == "false" ? (
                <div itemID="NftDetail_outer1">
                    <div className="NftDetail_left">
                        <div className="NftDetail_f">
                            <div className="NftDetail_grid-item">
                                <div className="NftDetail_item-style">
                                    <div className="NftDetail_thumb">
                                        <img src="nft.png" alt="" />
                                    </div>

                                    <div className="NftDetail_content">
                                        <h3 className="NftDetail_title">
                                            <a href="#">{resdata[0].token.metadata.name}</a>
                                        </h3>

                                        <div className="NftDetail_profile d-flex-center">
                                            <a href="#">
                                                <img src="uthor.jpg" className="NftDetail_image-avatar" alt="" />
                                            </a>
                                            <a href="#" className="NftDetail_author-text">
                                                @owner name
                                            </a>
                                            <i className="NftDetail_r"></i>
                                        </div>


                                    </div>
                                </div>

                                <div className="NftDetail_empty1"></div>
                            </div>

                            <div className="NftDetail_right1">
                                <section>
                                    <div className="NftDetail_container">
                                        <div className="NftDetail_background-img">
                                            <div className="NftDetail_name">{resdata[0].token.metadata.name}</div>
                                            <div className="NftDetail_hash">{resdata[0].token.metadata.tokenId}</div>
                                            <div className="NftDetail_box">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <div className="NftDetail_content">

                                                    <div className="NftDetail_con" >
                                                        <div className="NftDetail_head">
                                                            <h1 >NFT KA NAAM</h1>
                                                            <h2 >NFt #1446</h2>
                                                        </div>
                                                        <p><a >{resdata[0].token.contract.address}</a></p>
                                                        <p><a>{resdata[0].token.metadata.image}</a></p>
                                                        <p><a>{resdata[0].token.metadata.description}</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="NftDetail_buttons-section1" >
                                        <Link to='/' className="NftDetail_button1" role="button">Back Home</Link>
                                        <button className="NftDetail_button1" role="button">View on tzkt</button>

                                    </div>
                                </section>


                            </div>
                        </div>
                    </div>
                </div>) : <h1>loading .......</h1>
        }
        </>

    )
}
