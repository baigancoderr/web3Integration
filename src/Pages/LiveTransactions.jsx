
import Transaction from '../Components/Transaction'

const LiveTransactions = () => {
    const data = {
        transaction: [
            ['123k URB', "0x88df989sf", '$500', '3/7/2025 '],
            ['123k URB', "0x88df989sf", '$700', '3/7/2025 '],
            ['123k URB', "0x88df989sf", '$200', '3/7/2025 '],
            ['123k URB', "0x88df989sf", '$750', '3/7/2025 '],
            
        ],

    };
    return (
        <>
            <div className="neoCard md:p-10 p-3 rounded-xl">
                <Transaction datatype={"Live Transactions"} trxData={data} />
            </div>
        </>
    );
}

export default LiveTransactions