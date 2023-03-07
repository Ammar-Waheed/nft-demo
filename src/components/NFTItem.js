import "../css/nft.css"

function NFTItem(props) {
    return (
        <>
            <div
                className="card"
                style={{
                    width: "30%",
                    float: "left",
                    height: "300px",
                    margin: "5px"
                }}
            >
                <img
                    className="card-img-top"
                    src={props.nft.media[0]?.gateway}
                    alt={props.nft.title}
                    onClick={() =>
                        props.modalOpener(
                            props.nft.title,
                            props.nft.description,
                            props.nft.tokenId,
                            props.nft.media[0]?.gateway,
                            props.nft.contract.address
                        )
                    }
                ></img>
                <div className="card-body">
                    <h5 className="card-title">{props.nft.title}</h5>
                </div>
            </div>
        </>
    )
}

export default NFTItem
