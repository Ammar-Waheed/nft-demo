import { useContext, useState, useEffect, useRef, useMemo } from "react"
import { WalletContext } from "../App"
import { Network, Alchemy } from "alchemy-sdk"
import NFTItem from "./NFTItem"
import "../css/nft.css"
import NFTModal from "./NFTModal"

function NFTContainer(props) {
    // Optional Config object, but defaults to demo api-key and eth-mainnet.""
    const apiKey = "vFzwUQmfxvTMIUIfCTIvkkLxDvIR2LL9"
    const netId = props.net === 5 ? Network.ETH_GOERLI : Network.ETH_MAINNET
    const { walletAddress } = useContext(WalletContext)
    const [ownedNfts, setOnwnedNfts] = useState([])
    const [title, setTitle] = useState("")
    const [id, setId] = useState(NaN)
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    const [address, setAddress] = useState("")
    const alchemy = useMemo(() => {
        console.log("id", netId)
        return new Alchemy({
            apiKey, // Replace with your Alchemy API Key.
            network: netId // Replace with your network.
        })
    }, [props])

    useEffect(() => {
        async function loadNFTs() {
            if (walletAddress) {
                //do not try to fetch if undefined
                const nftsForOwner = await alchemy.nft.getNftsForOwner(
                    walletAddress
                )
                console.log("number of NFTs found:", nftsForOwner.totalCount)
                console.log("...")
                console.log(nftsForOwner.ownedNfts)
                setOnwnedNfts(nftsForOwner.ownedNfts)
            }
        }
        loadNFTs()
    }, [walletAddress, props]) //load NFTs everytime the wallet address changes

    const openModal = (title, description, id, img, address) => {
        console.log("args", title, description, id, img)
        //setWalletAddress(undefined)
        var modal = document.querySelector(".modal")
        var container = modal.querySelector(".container")
        modal.classList.remove("hidden")
        setTitle(title)
        setDescription(description)
        setAddress(address)
        setId(id)
        setImg(img)
        modal.addEventListener("click", function (e) {
            if (e.target !== modal && e.target !== container) return
            modal.classList.add("hidden")
        })
    }

    return (
        <div className="container nftWrapper">
            {ownedNfts.map((item) => (
                <NFTItem nft={item} modalOpener={openModal} />
            ))}
            <div className="modal hidden">
                <NFTModal
                    title={title}
                    id={id}
                    desc={description}
                    img={img}
                    address={address}
                />
            </div>
        </div>
    )
}

export default NFTContainer
