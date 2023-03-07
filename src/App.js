import MetamaskConnect from "./components/MetamaskConnect"
import { createContext, useMemo, useState } from "react"
import NFTContainer from "./components/NFTContainer"
import "./css/App.css"

//create a wallet context to be shared accross components
export const WalletContext = createContext({
    walletAddress: "",
    setWalletAddress: () => {}
})

function App() {
    const [walletAddress, setWalletAddress] = useState("")
    const wallet = useMemo(
        () => ({ walletAddress, setWalletAddress }),
        [walletAddress]
    )
    const [network, setNetwork] = useState("")

    const NetSetter = (net) => {
        setNetwork(net)
    }

    return (
        <WalletContext.Provider value={wallet}>
            <div className="App">
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <MetamaskConnect setNet={NetSetter} />
                    </div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <NFTContainer net={network} />
                    </div>
                </div>
            </div>
        </WalletContext.Provider>
    )
}

export default App
