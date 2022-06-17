// @ts-ignore
import TronWeb from 'tronweb'

const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    headers: {
        'tron-pro-api-key': process.env.REACT_APP_API_KEY,
    },
    privateKey: process.env.REACT_APP_PRIVATE_KEY,
})

async function send_token(to_add: string, amount: string): Promise<string> {
    const status = await tronWeb.isConnected()
    console.log(status)
    const contract = await tronWeb.contract().at(process.env.REACT_APP_TOKEN_ADDRESS)
    const transaction = await contract.transfer(to_add, parseInt(amount)).send()
    return transaction
}

export default async function handler(request: any, response: any) {
    try {
        console.log('handler')
        console.log(request.query)
        const { address } = request.query
        const amount = Math.ceil(100 * Math.random()) * 10000
        const tx = await send_token(address, amount.toString())
        response.status(200).json({
            amount: (amount / 1000000).toString(),
            address,
            tx,
        })
    } catch (error) {
        console.log(error)
        response.status(500).json({
            error,
        })
    }
}
