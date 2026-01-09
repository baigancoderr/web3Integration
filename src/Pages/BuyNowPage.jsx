import { FaChevronDown } from "react-icons/fa";
 
import { toast } from "react-toastify";
import { SiBinance, SiEthereum, SiTether ,SiSolana} from "react-icons/si";


import { useState } from "react";
import ReactApexChart from "react-apexcharts";

import PortfolioRadialChart from "./PortfolioRadialChart";


import MOX from "../assets/BuyNow/MOX.png";
import pay from "../assets/BuyNow/pay.png";
import wallet from "../assets/BuyNow/wallet.png";
import usd from "../assets/BuyNow/usdt.png";

import USDT from "../assets/images/usdt1.png";

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




// const PortfolioRadialChart = () => {
//   const options = {
//     chart: {
//       type: "radialBar",
//       sparkline: { enabled: true },
//     },

//     series: [80, 60, 40],

//     plotOptions: {
//       radialBar: {
//         startAngle: 0,
//         endAngle: 360,

//         hollow: {
//           size: "32%", 
//         },

//         track: {
//           background: "#FFFFFF", 
//           strokeWidth: "3px",   
//           opacity:1, 
//           margin: 10,
//         },

//         dataLabels: {
//           show: false,
//         },
//       },
//     },

  

//     colors: ["#FFCC66", "#E6B65C", "#FFFFFF"],
//   };

//   return (
//     <ReactApexChart
//       options={options}
//       series={options.series}
//       type="radialBar"
//       height={400}
//     />
//   );
// };


  const [open, setOpen] = useState(false);
  // BUY WITH dropdown
const [tokenOpen, setTokenOpen] = useState(false);

// Chart dropdown
const [periodOpen, setPeriodOpen] = useState(false);

  const [selected, setSelected] = useState("Weekly (2025)");

  const options = [
    "Daily (2025)",
    "Weekly (2025)",
    "Monthly (2025)",
    "Yearly (2025)",
  ];

  const [activeToken, setActiveToken] = useState("BNB");

  const payIcons = {
  BNB: <SiBinance className="text-yellow-400 text-xl" />,
  ETH: <SiEthereum className="text-blue-400 text-xl" />,
  SOL: <SiSolana className="text-purple-400 text-xl" />,
};

const tokens = [
  {
    key: "BNB",
    label: "BNB",
    icon: <SiBinance className="text-yellow-400 text-xl" />,
  },
  {
    key: "ETH",
    label: "ETH",
    icon: <SiEthereum className="text-blue-400 text-xl" />,
  },
  {
    key: "SOL",
    label: "SOL",
    icon: <SiSolana className="text-purple-400 text-xl" />,
  },
];

const [payOpen, setPayOpen] = useState(false);


  

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



            
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               
                
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
           Transactions
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
        Mgxcoin
      </h2>
      <p className="text-lg text-[#FFFFFF] !mb-5">
        Grab The Deal Buy Now Mgxcoin
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
  <div className="relative flex justify-center">
    {/* ===== Small Screen : Dropdown ===== */}
    <div className="md:hidden w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-2 px-6 py-2 rounded-lg neoCard border border-[#E6B65C]"
      >
        {activeToken === "BNB" && <SiBinance className="text-yellow-400" />}
        {activeToken === "ETH" && <SiEthereum className="text-blue-400" />}
        {activeToken === "SOL" && <SiSolana className="text-purple-400" />}
        {activeToken}
      </button>

      {open && (
        <div className="absolute top-full mt-2 w-full rounded-lg neoCard border border-[#E6B65C] z-50">
          {["BNB", "ETH", "SOL"].map((token) => (
            <button
              key={token}
              onClick={() => {
                setActiveToken(token);
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#1a1a1a]"
            >
              {token === "BNB" && <SiBinance className="text-yellow-400" />}
              {token === "ETH" && <SiEthereum className="text-blue-400" />}
              {token === "SOL" && <SiSolana className="text-purple-400" />}
              {token}
            </button>
          ))}
        </div>
      )}
    </div>

    {/* ===== Medium & Large Screen : Side by Side ===== */}
    <div className="hidden md:flex gap-3">
      {["BNB", "ETH", "SOL"].map((token) => (
        <button
          key={token}
          onClick={() => setActiveToken(token)}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg neoCard border 
            ${
              activeToken === token
                ? "border-[#E6B65C]"
                : "border-transparent opacity-60"
            }`}
        >
          {token === "BNB" && <SiBinance className="text-yellow-400" />}
          {token === "ETH" && <SiEthereum className="text-blue-400" />}
          {token === "SOL" && <SiSolana className="text-purple-400" />}
          {token}
        </button>
      ))}
    </div>
  </div>
</div>



    </div>

    {/* You Pay */}
   <div className="space-y-1">
      <p className="text-m text-[#FFCC66]">You Pay</p>
      <div className="neoBorder !rounded-[5px]">
        <div className="neoCard flex items-center gap-3 px-4 py-3 !rounded-[5px]">

        <div className="relative">
  {/* Selected Token */}
  <button
    onClick={() => setPayOpen(!payOpen)}
    className="flex items-center gap-2"
  >
    {tokens.find(t => t.key === activeToken)?.icon}
    <FaChevronDown
      className={`text-xs transition ${
        payOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* Dropdown */}
  {payOpen && (
    <div className="absolute left-0 top-full mt-2 w-28 neoCard border border-[#E6B65C] rounded-lg z-50">
      {tokens.map((token) => (
        <button
          key={token.key}
          onClick={() => {
            setActiveToken(token.key);
            setPayOpen(false);
          }}
          className="w-full flex items-center gap-2 px-3 py-2 hover:bg-[#1a1a1a]"
        >
          {token.icon}
          <span className="text-sm">{token.label}</span>
        </button>
      ))}
    </div>
  )}
</div>



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
            <img src={MOX} className="w-9 h-8" />
          </span>

          <input
            type="text"
            placeholder="Enter MGXCOIN Amount"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>
    </div>

    {/* Buttons */}
  <div className="neoBorder !rounded-[10px] !mb-3.5">
  <div className="bg-[#000000] flex flex-row gap-4 px-4 sm:px-10 py-5 !rounded-[10px] flex-wrap custom-responsive">
    
    <button className="flex-1 py-2 rounded-lg neoCard border border-[#E6B65C] flex items-center justify-center gap-2">
      <img src={wallet} alt="wallet" className="w-5 h-5" />
      CONNECT WALLET
    </button>

   
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
        <div className="rounded-2xl h-full  Poppins neoCard p-8 bg-gradient-to-br from-black via-zinc-900 to-black">
          <h2 className="text-white text-2xl  mb-6">
            How to Grab Mgxcoin
          </h2>

          <ul className="space-y-5 text-sm">
            <li>
              <h4 className="text-[#FFCC66] font-medium text-[1.1rem]">
                • Connect Your Wallet
              </h4>
              <p className="text-gray-300 mt-1 pl-3">
                Seamlessly connect your crypto wallet to the MGXCOIN platform
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
                Your MGXCOIN tokens will be instantly credited to your MGXCOIN
                dashboard.
              </p>
            </li>
          </ul>
        </div>
        </div>

        {/* RIGHT BOX */}
        <div className="neoBorder h-full">
  <div className="rounded-2xl h-full neoCard p-4 py-4">
    
    <div className="flex items-center justify-between ">
      <h2 className="text-white text-xl font-semibold">
        Portofolio Chart
      </h2>
      {/* <button className="neoCard !Poppins text-s px-6 py-3 rounded-full flex items-center justify-center gap-2">
  Weekly (2025)
</button> */}


 <div className="relative inline-block">
      {/* Button */}
    <button
  onClick={() => setPeriodOpen(!periodOpen)}
  className="neoCard !Poppins text-s px-6 py-3 rounded-full flex items-center gap-2"
>
  {selected}
  <span className={`transition ${periodOpen ? "rotate-180" : ""}`}>▼</span>
</button>

{periodOpen && (
  <div className="absolute right-0 mt-2 w-48 rounded-xl neoCard bg-black border border-zinc-700 z-50">
    {options.map((item, i) => (
      <button
        key={i}
        onClick={() => {
          setSelected(item);
          setPeriodOpen(false);
        }}
        className="w-full text-left px-4 py-3 text-sm text-white hover:bg-zinc-800"
      >
        {item}
      </button>
    ))}
  </div>
)}



    </div>

    </div>

    <PortfolioRadialChart />
  </div>
</div>


      </div>
    </div>





            
        </div>
    );
};

export default BuyNowPage;
