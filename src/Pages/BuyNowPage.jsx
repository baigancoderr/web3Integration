import { FaChevronDown } from "react-icons/fa";
 
import { toast } from "react-toastify";
import { SiBinance, SiEthereum, SiTether } from "react-icons/si";
import { useState } from "react";


import hb1 from "../assets/BuyNow/wallat.png"
import MOX from "../assets/BuyNow/MOX.png";
import pay from "../assets/BuyNow/pay.png";
import wallet from "../assets/BuyNow/wallet.png";
import usd from "../assets/BuyNow/usdt.png";
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
              <div className="neoCard1 flex md:gap-0 gap-4 md:flex-row flex-col-reverse justify-between !rounded-[5px] p-6 bg">
                <div className="md:w-[70%]  ">
                   
                   <div className=" neoCard rounded-md py-4 px-5 !bg-[#000000]">

                    
  <div className="relative w-full h-5 rounded-sm overflow-hidden bg-black">
  {/* remaining area – ONLY right + top + bottom border */}
  <div className="absolute top-0 right-0 h-full w-[41.1%] 
                  border-t border-r border-b border-[#FFFFFF] rounded-r-sm"></div>

  {/* progress */}
  <div className="h-full w-[60%] bg-goldGradient !rounded-r-[20px]"></div>
</div>


</div>

                    <div className="w-full flex justify-between mt-3 md:text-base text-[12px] text-[#FFCC66] font-medium ">
  <p>Raised - $1.03M</p>
  <p>Current - $515k</p>
</div>



                </div>

                <div className="mx-6 w-[2px] bg-[#FFCC66]" />
                <div className="flex gap-3 items-center md:w-[20%] flex-wrap justify-between text-[#FFCC66] text-sm  ">
                    <div className="  ">
                        <p className=" mb-2">Current Price</p>
                       <span className="px-2 py-1.5 rounded-md text-[#EEEEEE] shadow-[inset_0px_0px_6px_0px_#FFCC66]">
  $0.555656
</span>

                    </div>
                    <div className="">
                        <p className=" mb-2"> Next Price</p>
                       <span className="px-2 py-1.5 rounded-md text-[#EEEEEE] shadow-[inset_0px_0px_6px_0px_#FFCC66]">
  $0.555656
</span>

                    </div>
                </div>
            </div>
</div>



            {/* Buy Token and Leaderboard */}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               
                {/* Left: Leaderboard */}
                <div className="neoBorder !rounded-[5px] h-full">
                <div className="neoCard  pb-6 pt-0 !rounded-[5px] h-full">
                

                    <div className="flex items-center justify-between px-7 py-3 bg-[#000000] mb-5">
                        <div className="flex items-center gap-6">
                         
                          <img
                      src={Leaderboard}
                      alt="transaction"
                      className="w-6 h-6"
                    />
                          <h3 className="text-lg text-[#FFFFFF] open-sans font-[600]">
                            LeaderBoard
                          </h3>
                        </div>
                    
                      
                        <button className="text-xl text-[#ffffff] hover:text-gray-600">
                          ⋮
                        </button>
                      </div>



                   <div className="space-y-5 px-5 max-h-[600px] overflow-auto hide-scrollbar">
  {Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className="flex justify-between items-center p-1 px-6 rounded-lg transition
                 bg-[linear-gradient(180deg,#363636_0%,#000000_100%)]
                 shadow-[0px_0px_2px_1px_#00000040] hover:shadow-[inset_0px_0px_8px_0px_#00000090]
"
    >
      <div className="text-[var(--text-primary)]">
        <p className="text-[#FFFFFF] open-sans font-[700]">#{i + 1}</p>
        <p className="text-gold-gradienttt">0x2222...5c1</p>
      </div>

      <div className="text-right">
        <p className="text-[14px] text-[#FFFFFF] pb-1 open-sans font-[700]">
          Total Transactions
        </p>
        <p className="text-gold-gradienttt font-[600]">
          $3,927,234.34
        </p>
      </div>
    </div>
  ))}
</div>





                </div>
            </div>



 {/* Right: hOW TO BUY */}
             <div className=" neoBorder !rounded-[5px]  ">
  <div className="!bg-[#000000] !rounded-[5px] p-5 space-y-6  text-white">

    {/* Title */}
    <div
  className="border px-6 py-6 !rounded-[5px]"
  style={{
    borderWidth: "1px",
    borderStyle: "solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(148.88deg, #997A3D 25.71%, #FFCC66 69.65%)",
  }}
>
    <div className="   text-center space-y-2">
      <h2 className="text-xl open-sans text-gold-gradienttt">
        Moxcoin
      </h2>
      <p className="text-lg text-[#FFFFFF] !mb-5">
        Grab The Deal Buy Now Moxcoin
      </p>
    </div>

    {/* Progress */}
    <div className="space-y-2">


     <div className="p-[2px]  rounded-[8px] bg-[linear-gradient(148.88deg,#997A3D_25.71%,#FFCC66_69.65%)]">
  <div className="relative w-full h-7    bg-white  rounded-[16px]  overflow-hidden">
    <div className="absolute left-0 top-0 h-full w-[50%] bg-gradient-to-r from-[#CFA44A] to-[#FFD77A] rounded-[6px]" />
    <span className="absolute  inset-0 flex items-center justify-center text-sm font-semibold text-black">
      50%
    </span>
  </div>
</div>




      <div className="flex justify-between px-5 items-center text-sm text-gray-300">
        <div>
          <p className="text-[1rem] text-[#FFCC66] mb-2">Current Price</p>
          <p className="text-[#E6B65C]  text-center text-[1.1rem] ">$0.20</p>
        </div>
        <span className="text-[#E6B65C] text-xl">→</span>
        <div className="text-right">
        <p className="text-[1rem] text-[#FFFFFF] mb-2">Next Price</p>
          <p className="text-[#FFFFFF]  text-center text-[1.1rem] ">$0.20</p>
        </div>
      </div>
    </div>

    </div>




    {/* Buy With */}
    <div className="space-y-3">
      <p className="text-center text-[1.2rem] tracking-[0.1px] text-[#FFFFFF]">
        YOU CAN  <span className=" text-[#FFCC66]">  BUY WITH</span> 
      </p>

      <div className="flex justify-center gap-10">
        <button className="flex items-center gap-2 px-6 py-2 rounded-lg neoCard border border-[#E6B65C]">
          <img src={USDT} className="w-5 h-5" />
          USDT
        </button>

        <button className="flex items-center gap-2 px-6 py-2 rounded-lg neoCard border border-[#E6B65C]">
          <SiBinance className="text-yellow-400 text-lg" />
          BNB
        </button>
      </div>
    </div>

    {/* You Pay */}
   <div className="space-y-1">
      <p className="text-m text-[#FFCC66]">You Pay</p>
      <div className="neoBorder !rounded-[5px]">
        <div className="neoCard flex items-center gap-3 px-4 py-3 !rounded-[5px]">
          <span className="flex items-center gap-2 text-sm">
            <img src={usd} className="w-8 h-6" />
          </span>

          <input
            type="text"
            placeholder="Enter Usdt Amount"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>
    </div>

    {/* You Receive */}
    <div className="space-y-1">
      <p className="text-m text-[#FFCC66]">You receive</p>
      <div className="neoBorder !rounded-[5px]">
        <div className="neoCard flex items-center gap-3 px-4 py-3 !rounded-[5px]">
          <span className="flex items-center gap-2 text-sm">
            <img src={MOX} className="w-7 h-6" />
          </span>

          <input
            type="text"
            placeholder="Enter MOXCOIN Amount"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>
    </div>

    {/* Buttons */}
  <div className="neoBorder !rounded-[10px] !mb-3.5">
  <div className="bg-[#000000] flex flex-row gap-4 px-4 sm:px-10 py-5 !rounded-[10px] flex-wrap custom-responsive">
    {/* Connect Wallet Button with image icon */}
    <button className="flex-1 py-2 rounded-lg neoCard border border-[#E6B65C] flex items-center justify-center gap-2">
      <img src={wallet} alt="wallet" className="w-5 h-5" />
      CONNECT WALLET
    </button>

    {/* Buy Now Button with image icon */}
    <button
      onClick={handleBuy}
      className="flex-1 py-2 rounded-lg bg-[#000000] border border-[#FFCC66] flex items-center justify-center gap-2 text-[#FFCC66]"
    >
      <img src={pay} alt="buy" className="w-5 h-5" />
      BUY NOW
    </button>
  </div>
</div>



  </div>
</div>




            </div>
                       










            {/* Bottom Section: How to Buy Steps */}
            


    <div className="w-full ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT BOX */}
        <div className="neoBorder">
        <div className="rounded-2xl  Poppins neoCard p-8 bg-gradient-to-br from-black via-zinc-900 to-black">
          <h2 className="text-white text-2xl  mb-6">
            How to Grab Moxcoin
          </h2>

          <ul className="space-y-5 text-sm">
            <li>
              <h4 className="text-[#FFCC66] font-medium text-[1.1rem]">
                • Connect Your Wallet
              </h4>
              <p className="text-gray-300 mt-1 pl-3">
                Seamlessly connect your crypto wallet to the MOXCOIN platform
                to start your purchase journey.
              </p>
            </li>

            <li>
              <h4 className="text-[#FFCC66] font-medium text-[1.1rem] ">
                • Choose a Payment Method
              </h4>
              <p className="text-gray-300 mt-1 pl-3">
                Select your preferred cryptocurrency or supported card to
                proceed with the transaction.
              </p>
            </li>

            <li>
              <h4 className="text-[#FFCC66] font-medium text-[1.1rem]">
                • Approve the Transaction
              </h4>
              <p className="text-gray-300 mt-1 pl-3">
                Carefully review your purchase details and securely confirm the
                transaction.
              </p>
            </li>

            <li>
              <h4 className="text-[#FFCC66] font-medium text-[1.1rem] ">
                • Receive Your Tokens
              </h4>
              <p className="text-gray-300 mt-1 pl-3">
                Your MOXCOIN tokens will be instantly credited to your MOXCOIN
                dashboard.
              </p>
            </li>
          </ul>
        </div>
        </div>

        {/* RIGHT BOX */}
        <div className="neoBorder h-full">
        <div className="rounded-2xl  h-full neoCard p-8 ">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-xl font-semibold">
              Portofolio Chart
            </h2>
            <button className="bg-zinc-800 text-white text-xs px-4 py-2 rounded-full">
              Weekly (2025)
            </button>
          </div>

          <div className="flex gap-8 items-center">

            {/* CHART PLACEHOLDER */}
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-[10px] border-yellow-400"></div>
              <div className="absolute inset-4 rounded-full border-[10px] border-yellow-300"></div>
              <div className="absolute inset-8 rounded-full border-[10px] border-white"></div>
            </div>

            {/* LEGEND */}
            <div className="space-y-4 text-sm">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-400 rounded"></span>
                  <p className="text-gray-400">Income (50%)</p>
                </div>
                <p className="text-white font-semibold ml-5">
                  $632,662,662
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-300 rounded"></span>
                  <p className="text-gray-400">Spends (30%)</p>
                </div>
                <p className="text-white font-semibold ml-5">
                  $53,234,662
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-white rounded"></span>
                  <p className="text-gray-400">Safe (20%)</p>
                </div>
                <p className="text-white font-semibold ml-5">
                  $21,412,556
                </p>
              </div>
            </div>

          </div>
        </div>
        </div>

      </div>
    </div>





            
        </div>
    );
};

export default BuyNowPage;
