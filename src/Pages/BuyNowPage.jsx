import { FaChevronDown } from "react-icons/fa";
 
import { toast } from "react-toastify";
import { SiBinance, SiEthereum, SiTether } from "react-icons/si";
import { useState } from "react";


import hb1 from "../assets/BuyNow/wallat.png"
import hb2 from "../assets/BuyNow/note.png"
import hb3 from "../assets/BuyNow/hand.png"
import hb4 from "../assets/BuyNow/mobile.png"
import USDT from "../assets/images/USDT.png";
import ETH from "../assets/images/ETH.png";
import Leaderboard from "../assets/images/LeaderBoard.png";


const currencies = [
    {
        label: "BNB",
        icon: <SiBinance className="text-yellow-400 text-xl" />,
    },
    {
        label: "ETH",
        icon: <SiEthereum className="text-blue-400 text-xl" />,
    },
    {
        label: "USDT",
        icon: <SiTether className="text-green-400 text-xl" />,
    },
];

const BuyNowPage = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleBuy = () => {
        toast.success("Purchase simulated (UI only)");
    };

    return (
        <div className="space-y-10">
            {/* Progress Section */}
              <div className="neoBorder !rounded-[5px]">
              <div className="neoCard flex md:gap-0 gap-4 md:flex-row flex-col-reverse justify-between !rounded-[5px] p-6 bg">
                <div className="md:w-[70%]  ">
                   
                   <div className=" neoCard rounded-md py-4 px-5 bg-[#CACACA] ">
  <div className="w-full h-5 bg-[#FFFFFF] rounded-sm overflow-hidden">
<div className="h-full w-[60%] bg-gradient-to-r from-[#2659F2] to-[#001D76]"></div>
  </div>
</div>

                    <div className="w-full flex justify-between mt-3 md:text-base text-[12px] text-[#2659F2] font-medium ">
  <p>Raised - $1.03M</p>
  <p>Current - $515k</p>
</div>



                </div>

                <div className="mx-6 w-[2px] bg-[#575757]" />
                <div className="flex gap-3 items-center md:w-[20%] flex-wrap justify-between text-[#2659F2] text-sm font-bold ">
                    <div className="  ">
                        <p className=" mb-1">Current Price</p>
                        <span className="text-[var(--text-primary)] font-bold">
                            $0.555656
                        </span>
                    </div>
                    <div className="">
                        <p className=" mb-1"> Next Price</p>
                        <span className="text-[var(--text-primary)] font-bold">
                            $0.555656
                        </span>
                    </div>
                </div>
            </div>
</div>



            {/* Buy Token and Leaderboard */}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: How to Buy */}
                <div className="neoBorder !rounded-[5px]">
                <div className="neoCard    p-4 py-7 !rounded-[5px] space-y-5">
                    <div className="flex justify-center items-center">
  <a
    href="#how-to-buy"
    className="open-sans underline underline-offset-4 text-[#000000] text-[1.2rem] font-[600] ">
    BUY NOW 
  </a>
</div>


                    <div className="px-5 space-y-5">
                        {/* <p className=" font-bold "> Current Presale : 01</p> */}

                        {/* You Pay */}
                        <div className="relative space-y-1">
                            <p className="text-sm text-[#000000] mb-2 font-[600] tracking-[0.08em]">
                                You Pay
                            </p>
                                

                                <div className="neoBorder !rounded-[5px] ">
                            <div className="neoCard w-full  p-3 py-5 !rounded-[5px]">
                                <div className="flex gap-4 relative z-10 ">
                                    {/* Dropdown Button */}
                                    
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="hovNeoCard  flex items-center gap-2 px-4 rounded-lg text-[var(--text-primary)] text-sm relative"
                                    >
                                        {selectedCurrency.icon}
                                        <span>{selectedCurrency.label}</span>
                                        <FaChevronDown className="text-xs ml-1" />
                                    </button>

                                    {/* Input */}
                                    <div className="neoBorder w-full !rounded-[5px]">
                                    <input
                                        type="text"
                                        placeholder="Ex : 0.00"
                                        className=" neoCard p-3 w-full !rounded-[5px] bg-transparent text-[var(--text-primary)] outline-none"
                                    />
                                    </div>
                                </div>

                                {/* Dropdown Menu */}
                                {dropdownOpen && (
                                    <div className="absolute mt-2 left-3 z-20 neoCard  rounded-lg shadow-lg w-[140px] p-2 border border-gray-600">
                                        {currencies.map((currency) => (
                                            <button
                                                key={currency.label}
                                                onClick={() => {
                                                    setSelectedCurrency(currency);
                                                    setDropdownOpen(false);
                                                }}
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--hover-bg)] w-full text-left text-[var(--text-primary)] text-sm border-b border-gray-600"
                                            >
                                                {currency.icon}
                                                {currency.label}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Balance Row */}
                                <div  className=" ">
                                <div className="flex mt-3 justify-between text-[14px] text-[var(--text-secondry)]">
                                    <p>Balance: 0.0000</p>
                                    <p>$0.00</p>
                                </div>
                                </div>
                            
                            </div>
                            </div>
                        </div>

                        {/* You Recive */}
                        <div className="space-y-1">
                            <p className="text-sm text-[#000000] mb-2 font-[600] tracking-[0.08em]">
                                You Recive
                            </p>

                                <div className="neoBorder !rounded-[5px] "> 
                            <div className="neoCard p-3 py-5 !rounded-[5px] ">
                                <div className="flex gap-4 ">
                                    <button className="neoCard  cursor-default flex items-center gap-2 px-4 rounded-[5px] text-[var(--text-primary)] text-sm">
                                        <SiBinance className="text-yellow-400 text-xl" />
                                        <span className="text-sm">BNB</span>
                                    </button>

                                    <div className="neoBorder w-full !rounded-[5px]">
                                    <input
                                        type="text"
                                        placeholder="Ex : 0.00"
                                        className="neoCard  p-3 w-full  !rounded-[5px] bg-transparent text-[var(--text-primary)] outline-none"
                                    />
                                </div>
                                </div>

                                {/* Balance Row */}
                                <div className="flex mt-3 justify-between text-xs text-[var(--text-secondry)]">
                                    <p>Balance: 0.0000</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            </div>

                        </div>

                        {/* Note */}
                      <p className="text-[var(--text-secondry)] text-s text-center">
  NOTE: Min. Amount to Purchase: 0.0103 ETH
</p>


<div className="flex items-center gap-2">
  <span className="text-sm font-medium text-gray-700">
    Available Currency
  </span>

  <div className="flex items-center px-6 py-2 rounded-lg neoCard">
    
    <img
      src={USDT} 
      alt="USDt"
      className="w-5 h-5 mr-2"
    />

    {/* Currency Text */}
    <span className="text-sm font-semibold text-gray-800">
      USDT
    </span>
  </div>
  <div className="flex items-center px-6 py-2 rounded-lg neoCard">
    
    <img
      src={ETH}  
      alt="USD"
      className="w-5 h-5 mr-2"
    />

    {/* Currency Text */}
    <span className="text-sm font-semibold text-gray-800">
      ETH
    </span>
  </div>
</div>



                        {/* Buy Token Button */}
                        <button
                            onClick={handleBuy}
                            className="bg-gradient  text-[white] text-[1.2rem] open-sans w-full py-2 rounded-lg opacity-80 hover:opacity-100 transition"
                        >
                            BUY TOKEN
                        </button>

                        {/* Referral Code */}
                        <div>
                           <p className="text-sm text-[#000000] mb-2 font-[600] tracking-[0.08em]">
                                Reffral Code
                            </p>
                            <div className="flex gap-2">
                                <div className="neoBorder w-full !rounded-[5px]">
                                <input
                                    type="text"
                                    placeholder="Ex : 0x36dddfgr..."
                                    className="neoCard  p-3 w-full !rounded-[5px] bg-transparent text-[var(--text-primary)] outline-none"
                                />
                                </div>
                                <button className="hovNeoCard  px-4 rounded-lg text-[#2659F2] text-m font-[500]" >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* Right: Leaderboard */}
                <div className="neoBorder !rounded-[5px]">
                <div className="neoCard  pb-6 pt-0 !rounded-[5px] ">
                

                    <div className="flex items-center justify-between px-5 py-3 bg-[#E8E8E8] mb-3">
                        <div className="flex items-center gap-6">
                         
                          <img
                      src={Leaderboard}
                      alt="transaction"
                      className="w-6 h-6"
                    />
                          <h3 className="text-lg text-[#000000] open-sans font-[600]">
                            LeaderBoard
                          </h3>
                        </div>
                    
                      
                        <button className="text-xl text-gray-600 hover:text-black">
                          ⋮
                        </button>
                      </div>
                    <div className="space-y-5 px-5 max-h-[600px] overflow-auto hide-scrollbar">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center border border-[] p-1 px-6 rounded-lg hover:shadow-md transition"
                            >
                                <div className="text-[var(--text-primary)]">
                                    <p className="text-gradient open-sans">#{i + 1}</p>{" "}
                                    <p>0x2222...5c1</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[14px] text-gradient pb-1  font-[700]">
                                        Total Transactions
                                    </p>
                                    <p className="text-[var(--text-primary)] font-[600]">$3,927,234.34</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
                       



            {/* Bottom Section: How to Buy Steps */}
            <div id="how-to-buy+i" className=" p-6 rounded-xl space-y-10">
               
               <div className="flex items-center justify-between px-5 py-3 bg-[#E8E8E8] mb-3">
                        <div className="flex items-center gap-6">
                         
                      
                          <h3 className="text-[1.2rem] text-[#000000]  open-sans !font-[600] !rounded-[8px]">
                            HOW TO GRAB URBAN RAW
                          </h3>
                        </div>
                    
                      
                        <button className="text-xl text-gray-600 hover:text-black">
                          ⋮
                        </button>
                      </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
                    {/* Card 1 */}
                    <div className="neoBorder !rounded-[5px]">
  <div className="neoCard h-full space-y-2 py-6  p-2 !rounded-[5px] text-center">
    <img
      src={hb1}
      alt="hb1"
      className="w-18 mx-auto" 
    />
    <h4 className="text-[#000000] text-[1.35rem]  Gsemibold px-6">
      Connect Your Wallet
    </h4>
    <p className="text-[var(--text-secondry)] open-sans  ]">
     Seamlessly connect your crypto wallet to the Urban platform to begin your purchase.
    </p>
  </div>
</div>




                    {/* Card 2 */}
                           <div className="neoBorder !rounded-[5px]">
  <div className="neoCard h-full space-y-2 py-6  p-2 !rounded-[5px] text-center">
    <img
      src={hb2}
      alt="hb1"
      className="w-18 mx-auto" 
    />
    <h4 className="text-[#000000] text-[1.35rem]  Gsemibold">
     Choose a Payment Method
    </h4>
    <p className="text-[var(--text-secondry)] open-sans text-base  ]">
    Select your preferred cryptocurrency or supported card to proceed.
    </p>
  </div>
</div>

                    {/* Card 3 */}
                         <div className="neoBorder !rounded-[5px]">
  <div className="neoCard h-full space-y-2 py-6  p-2 !rounded-[5px] text-center">
    <img
      src={hb3}
      alt="hb1"
      className="w-18 mx-auto" 
    />
    <h4 className="text-[#000000] text-[1.35rem]  Gsemibold px-6">
    Receive Your Tokens
    </h4>
    <p className="text-[var(--text-secondry)] open-sans text-base  ]">
    Your URBAN RAW tokens will be instantly credited to your Urban dashboard.
    </p>
  </div>
</div>

                    {/* Card 4 */}
                         <div className="neoBorder !rounded-[5px]">
  <div className="neoCard h-full space-y-2 py-6  p-2 !rounded-[5px] text-center">
    <img
      src={hb4}
      alt="hb1"
      className="w-18 mx-auto" 
    />
    <h4 className="text-[#000000] text-[1.35rem]  Gsemibold">
     Approve the Transaction
    </h4>
    <p className="text-[var(--text-secondry)] open-sans text-base  ]">
     Review your purchase details and securely confirm the transaction.
    </p>
  </div>
</div>

                     
                </div>
            </div>
        </div>
    );
};

export default BuyNowPage;
