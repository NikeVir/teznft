import React from 'react'
import upload_img from '../../assets/upload.png'

export default function MintednftOther({submit}) {
  //JS to show uploaded images

  var loadFile = function (event) {
      var image = document.getElementById('output');
      image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <div>
      <div className="Main-mint-box">
            <form className="custom__form" onSubmit={submit}>
                <div className="nft-image">
                    <p><input type="file" accept="image/*" name="image" id="file" required onChange={(event) => {
                        loadFile(event)
                    }} style={{ display: 'none' }} /></p>
                    <div><label htmlFor="file" style={{ cursor: 'pointer' }}><div className="upload-box"><img id="output" height="200vh" src={upload_img} alt="" /></div></label></div>

                </div>
                <div className="nft-detail">
                <div>
                        <input placeholder="Address" name ="address"className="nft-name" required type="text" />
                    </div>
                    <div>
                        <input placeholder="Title" name="title" className="nft-name" required type="text" />
                    </div>
                    <div>
                        <textarea placeholder="Description" name="desc" className="nft-desc" required type="paragraph" />
                    </div>
                   
      
                    <button type="submit"  className="mint-btn">EasyMint</button>
                </div>
            </form>
        </div>
    </div>
  )
}
