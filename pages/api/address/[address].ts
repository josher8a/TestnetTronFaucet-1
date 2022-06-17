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
    console.log('send_token')
    try {
        const status = await tronWeb.isConnected()
        console.log('status', status)
        console.log(':3', process.env.REACT_APP_TOKEN_ADDRESS)
        const contract = await tronWeb.contract().at(process.env.REACT_APP_TOKEN_ADDRESS)
        console.log('contract', contract)
        const transaction = await contract.transfer(to_add, parseInt(amount)).send()
        console.log(transaction)
        return transaction
    } catch (error) {
        console.log(error)
        return 'webonly'
    }
}

export default async function handler(request: any, response: any) {
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
}
