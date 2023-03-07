import { useEffect } from "react"
import "../css/nft.css"

const NFTModal = (props) => {
    return (
        <div className="container">
            <div className="body">
                <img className="heroImg" src={props.img} alt={props.title} />
                <div className="nftData">
                    <h1
                        style={{
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                    >
                        {props.title} #{props?.id}
                    </h1>
                    <div className="description">
                        <h3>Description</h3>
                        <p>
                            {props.desc}
                        </p>
                    </div>
                    <a
                        href={`https://testnets.opensea.io/assets/goerli/${props.address}/${props.id}`}
                        target="_blank"
                    >
                        <button className="buy">Purchase on Opensea</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NFTModal
