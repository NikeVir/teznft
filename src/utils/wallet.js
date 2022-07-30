import { TezosToolkit,MichelsonMap } from "@taquito/taquito";
import {BeaconWallet} from "@taquito/beacon-wallet";
import {bytes2Char, char2Bytes} from '@taquito/utils';
import axios from 'axios';


export const NAME = 'Tutorial'; 
export const CONTRACT_ADDRESS = 'KT1Dkf7bDdBq52F9GtUbE3NcDMgPz9HpAmJD';
export const NETWORK = 'jakartanet';



const tezos = new TezosToolkit("https://jakartanet.smartpy.io")

const wallet = new BeaconWallet({
    name:"tezosNFT",
    preferredNetwork:"jakartanet",
})

 const connectWallet = async()=>{
    await wallet.requestPermissions({network:{type:"jakartanet"}})
};

tezos.setWalletProvider(wallet);

 const getContractdetails =async ()=>{
    const contract = await tezos.wallet.at("KT1Dkf7bDdBq52F9GtUbE3NcDMgPz9HpAmJD")
    return contract;
}


const disconnectWallet = async () => {
    await wallet.clearActiveAccount();
};

const getPKH = async () => {
    const pkh = await wallet.getPKH();
    return pkh;
};

const mintNFT = async (address, url, token_id) => {
    
    const amount = 1;
    const contract = await getContractdetails();
    url = char2Bytes(url);
    const op = await contract.methods.mint(address, amount, MichelsonMap.fromLiteral({'': url}), token_id).send();
    return await op.confirmation(3);
};

const getNFTs = async () => {
    const response = await axios.get(
        `https://api.jakartanet.tzkt.io/v1/contracts/${CONTRACT_ADDRESS}/bigmaps/token_metadata/keys`
    );
    const data = response.data;
    let tokens = [];
    for (let i = 0; i < data.length; i++) {
        let url = data[i].value.token_info[''];
        if (url) {
            url = bytes2Char(url);
        }
        const token = {
            token_id: data[i].value.token_id,
            url,
        };
        tokens.push(token);
    }
    return tokens;
};

export {connectWallet, disconnectWallet, getPKH, getContractdetails, mintNFT, getNFTs};
