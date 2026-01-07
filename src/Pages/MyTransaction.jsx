import Transaction from '../Components/Transaction';
import transactionIcon from "../assets/images/trans-logo.png";

const MyTransaction = () => {
  const data = {
    transaction: [
      ['123k ', "0x88df989sf", '$500', '3/7/2025'],
      ['123k ', "0x88df989sf", '$700', '3/7/2025'],
      ['123k ', "0x88df989sf", '$200', '3/7/2025'],
      ['123k ', "0x880x88df989sf0x88df989sfdf989sf", '$750', '3/7/2025'],
       ['123k ', "0x88df989sf", '$500', '3/7/2025'],
      ['123k ', "0x88df989sf", '$700', '3/7/2025'], 
      ['123k ', "0x88df989sf", '$200', '3/7/2025'],
      ['123k ', "0x880x88df989sf0x88df989sfdf989sf", '$750', '3/7/2025'],
       ['123k ', "0x88df989sf", '$500', '3/7/2025'],
      ['123k ', "0x88df989sf", '$700', '3/7/2025'],
      ['123k ', "0x88df989sf", '$200', '3/7/2025'],
      ['123k ', "0x880x88df989sf0x88df989sfdf989sf", '$750', '3/7/2025'],
    ],
  };

 

  return (
    <>
      {/* Header */}
<div
  className="
    flex flex-wrap items-center justify-between
    px-5 py-3 mb-4 gap-3 !rounded-[8px]
    bg-[linear-gradient(180deg,#363636_0%,#000000_100%)]
  "
>

 
  <div className="flex items-center gap-4">
    <img
      src={transactionIcon}
      alt="transaction"
      className="w-6 h-6"
    />
    <h3 className="text-lg font-bold text-[#FFFFFF] open-sans">
      My Transaction
    </h3>
   <span className="text-[#FFCC66] font-[400] hidden sm:inline">
  (Transaction Details)
</span>

  </div>

 
  <div className="flex items-center gap-9 flex-wrap">
    
   

    
    <button className="text-xl text-gray-600 hover:text-black">
      ⋮
    </button>
  </div>
</div>


      {/* Transaction Table */}
      <div className="neoCard md:p-10 p-3 rounded-xl">
        <Transaction datatype={"My Transactions"} trxData={data} />
      </div>
    </>
  );
};

export default MyTransaction;
