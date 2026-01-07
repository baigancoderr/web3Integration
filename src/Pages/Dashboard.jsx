
    import { FaPercentage } from 'react-icons/fa';
    import { FaCoins, FaTag } from 'react-icons/fa6';
    import { FaPaperPlane, FaWhatsapp, FaXTwitter, FaFacebookF } from "react-icons/fa6";
    import { LuCopy } from "react-icons/lu";
    import { toast } from 'react-toastify';
    import { SlUserFollowing } from 'react-icons/sl';
    import transactionIcon from "../assets/images/trans-logo.png";
   
import walletIcon from "../assets/images/wallet.png";
import tokenomicIcon from "../assets/images/tokenomic.png";
import wall from "../assets/images/wall.png";
import ref from "../assets/images/ref.png";
import tokenomicChart from "../assets/images/tokenomic-chart.png";
import ReactApexChart from "react-apexcharts";

  import referralImg from "../assets/images/ref_img.png";
import { Chart } from './Chart';




      const Dashboard = () => {

  
  const referralBarData = [
    { month: "Jan", value: 220 },
    { month: "Feb", value: 240 },
    { month: "Mar", value: 350 },
    { month: "Apr", value: 410 },
    { month: "May", value: 230 },
    { month: "Jun", value: 160 },
    { month: "Jul", value: 340 },
    { month: "Aug", value: 360 },
    { month: "Sep", value: 260 },
    { month: "Oct", value: 220 },
    { month: "Nov", value: 410 },
    { month: "Dec", value: 500 },
  ];

  const referralAreaData = [
    { month: "Jan", value: 450 },
    { month: "Feb", value: 280 },
    { month: "Mar", value: 220 },
    { month: "Apr", value: 390 },
    { month: "May", value: 420 },
    { month: "Jun", value: 480 },
    { month: "Jul", value: 330 },
    { month: "Aug", value: 310 },
    { month: "Sep", value: 200 },
    { month: "Oct", value: 190 },
    { month: "Nov", value: 420 },
    { month: "Dec", value: 460 },
  ];


// ================= BAR CHART =================
const referralBarChart = {
  series: [
    {
      name: "Referrals",
      data: referralBarData.map(d => d.value),
    },
  ],
  options: {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },

    plotOptions: {
      bar: {
        borderRadius: 6,
        borderRadiusApplication: "around", 
        columnWidth: "50%",
      },
    },

    // 👇 Gradient color for bars
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal", 
        shadeIntensity: 0,
        gradientToColors: ["#2659F2"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [2.27, 95.35],
      },
    },

    colors: ["#001D76"],

    dataLabels: {
      enabled: false,
    },

    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `$${val}`,
      },
    },

    grid: {
      strokeDashArray: 6,
    },

    xaxis: {
      categories: referralBarData.map(d => d.month),
      labels: {
        style: {
          colors: "#000000",
        },
      },
    },

    yaxis: {
      min: 100,
      max: 500,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#000000",
        },
      },
    },
  },
};



// ================= AREA CHART =================
const referralAreaChart = {
  series: [
    {
      name: "Income",
      data: referralAreaData.map(d => d.value),
    },
  ],
  options: {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0,
      },
    },
    colors: ["#2563EB"],
    dataLabels: { enabled: false },
    grid: {
      strokeDashArray: 6,
    },
   
    xaxis: {
      categories: referralAreaData.map(d => d.month),
      labels: { style: { colors: "#000000" } },
    },
    yaxis: {
      min: 100,
      max: 500,
      tickAmount: 4,
    },
  },
};



        const referralLink = "https://moxcoin.io/?referre";

        const handleCopy = () => {
            navigator.clipboard.writeText(referralLink);
            // alert("Referral link copied!");
            toast.success("Referral link copied!", {
                icon: "✅",
                autoClose: 1000,
            });
        };

        return (
            <>
                {/* alrady wraped in main container  */}

                <div className="space-y-10">

                  
                




                    <div className="     ">
                        
                     




                        

                        {/* Cards */}
         {/* OUTER WRAPPER */}
<div className="p-6 pt-16 rounded-[10px] bg-black shadow-[0px_0px_5px_0px_#FFCC66]">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Card 1 */}
    <div className=" rounded-xl h-full">
      <div className="hovNeoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between ">
        <div>
          <div className="flex items-center gap-3 mb-4">
           
            <h3 className="text-[#525252] text-lg "> Total Net Profit</h3>
          </div>
          <div className="text-2xl font-bold text-[#000000] mb-2 ">$60,641.61</div>
          <p className="text-[#525252] !font-[400] text-[14px] ">
            Gross value: $0
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
     <div className=" rounded-xl h-full">
      <div className="hovNeoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* <div className="p-2 rounded-md neoCard">
              <FaCoins className="text-[var(--golden-txt1)] text-2xl" />
            </div> */}
            <h3 className="text-[#525252] text-lg Inter"> Total Net Profit</h3>
          </div>
          <div className="text-2xl font-bold text-[#000000] mb-2">$10,000.61</div>
          <p className="text-[#525252] !font-[400] text-[14px] !Inter">
            Gross value: $0
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
     <div className=" rounded-xl h-full">
      <div className="hovNeoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* <div className="p-2 rounded-md neoCard">
              <FaCoins className="text-[var(--golden-txt1)] text-2xl" />
            </div> */}
            <h3 className="text-[#525252] text-lg Inter"> Total Net Profit</h3>
          </div>
          <div className="text-2xl font-bold text-[#000000] mb-2">$10,000.61</div>
          <p className="text-[#525252] !font-[400] text-[14px] !Inter">
            Gross value: $0
          </p>
        </div>
      </div>
    </div>

    {/* Card 4 */}
     <div className=" rounded-xl h-full">
      <div className="hovNeoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* <div className="p-2 rounded-md neoCard">
              <FaCoins className="text-[var(--golden-txt1)] text-2xl" />
            </div> */}
            <h3 className="text-[#525252] text-lg Inter"> Total Net Profit</h3>
          </div>
          <div className="text-2xl font-bold text-[#000000] mb-2">$10,000.61</div>
          <p className="text-[#525252] !font-[400] text-[14px] !Inter">
            Gross value: $0
          </p>
        </div>
      </div>
    </div>

  </div>
</div>


</div>

 {/* transcation table wala part */}




<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 ">

  

<div className="lg:col-span-2 rounded-xl overflow-hidden
                shadow-[0px_0px_4px_0px_#FFCC66] bg-black px-5">

  {/* HEADING */}
  <div className="px-5 py-4">
    <h2 className="text-[#FFCC66] text-[1.3rem] font-[600] mb-[10px]">
      Balance History
    </h2>
    <p className="text-sm text-gray-400">
     Recent deposits, withdrawals, and balance changes
    </p>
  </div>

  {/* TABLE */}
  <div className="overflow-x-auto">
    <table className="min-w-[500px] w-full text-sm border-collapse">

      {/* TABLE HEAD */}
      <thead>
        <tr className="text-[#FFFFFF] Inter">
          <th className="py-3 px-5 text-center shadow-[inset_0_-1px_0_0_#FFCC66]">
            Date
          </th>
          <th className="py-3 px-5 text-center shadow-[inset_0_-1px_0_0_#FFCC66]">
            Type
          </th>
          <th className="py-3 px-5 text-center shadow-[inset_0_-1px_0_0_#FFCC66]">
            Amount
          </th>
          <th className="py-3 px-5 text-center shadow-[inset_0_-1px_0_0_#FFCC66]">
            Balance After
          </th>
        </tr>
      </thead>

      {/* TABLE BODY */}
      <tbody>
        {[
          ["01/06/2025", "Deposit", "$500", "$5,500"],
          ["01/07/2025", "Withdraw", "$750", "$4,750"],
          ["01/08/2025", "Deposit", "$600", "$5,350"],
          ["01/09/2025", "Deposit", "$820", "$6,170"],
           ["01/06/2025", "Deposit", "$500", "$5,500"],
          ["01/07/2025", "Withdraw", "$750", "$4,750"],
          ["01/08/2025", "Deposit", "$600", "$5,350"],
      
        ].map((row, i) => (
          <tr key={i} className="text-white text-center">

            {/* DATE */}
            <td className="py-4 px-5 text-gray-400">
              {row[0]}
            </td>

            {/* TYPE */}
           <td className="px-5">
  <div
    className={`inline-block px-3 py-1 rounded-[25px] text-sm font-semibold
      ${row[1] === "Deposit"
        ? "bg-[#FFCC66] text-[#000000]"
        : "bg-[#FDECEC] text-red-500"}`}
  >
    {row[1]}
  </div>
</td>

            

            {/* AMOUNT */}
            <td className="px-5 text-[#076C2F]">
              {row[2]}
            </td>

            {/* BALANCE (HIGHLIGHT DIV) */}
            <td className="px-5">
              
                <span className="text-[#525252] font-bold">
                  {row[3]}
                </span>
             
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  </div>
</div>





  {/* RIGHT : WALLET + TOKENOMIC */}
 <div className="flex flex-col gap-6">

  <div className="rounded-xl overflow-hidden">

   
    <div className="p-[1px] mb-4 rounded-xl
                bg-[linear-gradient(148.88deg,#997A3D_25.71%,#FFCC66_69.65%)]">

  <div className="flex items-center justify-between px-5 py-3 rounded-xl
                  bg-[linear-gradient(180deg,#363636_0%,#000000_100%)]">

    <div className="flex items-center gap-3">
      <img src={tokenomicIcon} alt="tokenomic" className="w-6 h-6" />
      <h3 className="text-lg font-bold text-white open-sans">
        Tokenomic
      </h3>
    </div>

    <button className="text-xl text-gray-400 hover:text-white">
      ⋮
    </button>

  </div>
</div>


   
   
<div
  className="p-[1px] rounded-b-xl
             bg-[linear-gradient(148.88deg,#997A3D_25.71%,#FFCC66_69.65%)]">

  <div
    className="neoCard rounded-b-xl p-5
               shadow-[inset_0px_4px_4px_0px_#2C4AEC0F,_0px_4px_4px_0px_#00000017]">

    <img
      src={tokenomicChart}
      alt="tokenomic chart"
      className="w-full h-auto object-contain"
    />

  </div>
</div>



</div>

 
  <div className="rounded-xl overflow-hidden">
    
  
    <div className="p-[1px] mb-4 rounded-xl
                bg-[linear-gradient(148.88deg,#997A3D_25.71%,#FFCC66_69.65%)]">

  <div className="flex items-center justify-between px-5 py-3 rounded-xl
                  bg-[linear-gradient(180deg,#363636_0%,#000000_100%)]">

    <div className="flex items-center gap-3">
      <img src={wall} alt="tokenomic" className="w-6 h-6" />
      <h3 className="text-lg font-bold text-white open-sans">
        Your Wallet
      </h3>
    </div>

    <button className="text-xl text-gray-400 hover:text-white">
      ⋮
    </button>

  </div>
</div>

    

    
    <div
  className="p-[1px] rounded-b-xl
             bg-[linear-gradient(148.88deg,#997A3D_25.71%,#FFCC66_69.65%)]">

  <div
    className="neoCard rounded-b-xl p-5
               shadow-[inset_0px_4px_4px_0px_#2C4AEC0F,_0px_4px_4px_0px_#00000017]">

    <p className="text-sm text-[#FFFFFF] mb-2">
      Total balance
    </p>

    <div className="flex justify-between items-center mb-4">
      <span className="text-2xl font-bold text-[#FFFFFF]">
        $124,442.00
      </span>

      <span className="text-green-600 text-sm
                       bg-green-100 px-2 py-1 rounded">
        +1,423.00
      </span>
    </div>

    <div className="pt-4 flex justify-between items-center
                    shadow-[inset_0_1px_0_0_#FFCC66]/40">
      <div className="text-sm text-[#FFFFFF]">
        Exchange
        <div className="font-semibold text-[#FFCC66] mt-1">
          1 MOX = $24.00
        </div>
      </div>
    </div>

  </div>
</div>



  </div>

 
  

</div>
</div>



{/* Chart Wala Part */}


<Chart/>



{/* Sabse niche wala part */}


 
<div className="lg:col-span-2 rounded-xl overflow-hidden">

 <div className="p-[1px]  rounded-xl
                bg-[linear-gradient(148.88deg,#997A3D_25.71%,#FFCC66_69.65%)]">

  <div className="flex items-center justify-between px-5 py-3 rounded-xl
                  bg-[linear-gradient(180deg,#363636_0%,#000000_100%)]">

    <div className="flex items-center gap-3">
      <img src={ref} alt="tokenomic" className="w-6 h-6" />
      <h3 className="text-lg font-bold text-white open-sans">
        Start Your Refferal Journey
      </h3>
    </div>

    <button className="text-xl text-gray-400 hover:text-white">
      ⋮
    </button>

  </div>
</div>


  </div>

                  <div className="neoBorder rounded-xl h-full">

                    <div className="neoCard flex  flex-col-reverse lg:flex-row p-6 md:flex justify-between items-center   rounded-xl gap-8">
                        {/* Left Section */}
                        <div className="flex flex-col w-full  items-center md:items-start  ">

                           
                         


                            {/* Referral Link */}
                          <p className="text mb-2 text-[#FFFFFF] ">
                                Your Referral Link
                            </p>

                          <div className="neoBorder w-full rounded-lg p-[1px] mb-8">
  <div className="flex items-center w-full neoCard px-4 py-2 rounded-lg">
    <input
      type="text"
      readOnly
      value={referralLink}
      className="bg-transparent text-[#FFCC66] text-[1.1rem]
                 font-[400] underline w-full outline-none"
    />

    <button
      onClick={handleCopy}
      className="ml-2 p-2 hovNeoCard
                 hover:bg-[var(--golden-txt1)]/10 rounded-md"
    >
      <LuCopy className="text-[var(--golden-txt1)] text-lg" />
    </button>
  </div>
</div>


                            {/* Social Share */}
                            <div>
                                        <p className="text-center md:text-left mb-5 text-m  text-[#FFFFFF]">
 share with friends
</p>

                                <div className="flex gap-4">
                                    <button className="hovNeoCard p-3 rounded-[50px] ">
                                        <FaPaperPlane className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-[50px] ">
                                        <FaWhatsapp className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-[50px] ">
                                        <FaXTwitter className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-[50px] ">
                                        <FaFacebookF className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                </div>
                            </div>

    

                        </div>

                        {/* Right Section: Referral Count */}
                  
                         <div className="  ">
  <img
    src={referralImg}
    alt="Referral"
    className="w-full max-w-[350px] mx-auto "
  />
  </div>
                        
                    </div>
                    </div>

                    
                </div>
            </>
        );
    }

    export default Dashboard