import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Chart } from "react-google-charts";
    import { FaCoins, FaTag } from 'react-icons/fa6';
    import { FaPaperPlane, FaWhatsapp, FaXTwitter, FaFacebookF } from "react-icons/fa6";
      import { FaPercentage } from 'react-icons/fa';
      import profile1 from "../assets/profile/profile7.png"; 
        import profile2 from "../assets/profile/profile2.png"; 
          import profile3 from "../assets/profile/profile3.png"; 
            import profile4 from "../assets/profile/profile4.png"; 
            import profile5 from "../assets/profile/profile6.png"; 

const ProfilePage = () => {
    const referralCode = "abcdefghijklmnoopqrs";
    const shortCode = (code) => {
  if (!code || code.length <= 6) return code;
  return `${code.slice(0, 3)}...${code.slice(-3)}`;
};

    const walletAddress = "0x55d6...e253";
    const referrals = 10;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    const chartData = [
        ["Type", "Amount"],
        ["Purchase", 60],
        ["Referrals", 40],
    ];

    const chartOptions = {
  pieHole: 0.6,
  backgroundColor: "transparent",

  legend: {
    position: "bottom",
    alignment: "center",
    maxLines: 2,
    textStyle: {
      color: "#FFFFFF",
      fontSize: 14,
    },
    
  },

  pieSliceText: "percentage",
  pieSliceTextStyle: {
    color: "#000000",
    fontSize: 14,
    bold: true,
  },

  slices: {
    0: { color: "#FFCC66" },
    1: { color: "#FFFFFF" },
  },

  chartArea: {
    width: "100%",   // ✅ important
    height: "75%",   // ✅ legend ke liye space
  },
};


    return (
        <div className="space-y-10">
            {/* progress Bar */}
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
            {/* Top Cards */}
                             <div className="     ">
                                    {/* Header */}
                                    <div className="mb-5">
                                        <h2 className="text-2xl md:text-3xl    text-gold-gradienttt w-fit  open-sans ">
                                            Portfolio Dashboard
                                        </h2>
                                        <p className="text-[#DEDEDE] mt-1 open-sans font-bold">
                                            Track your investments and referral rewards in real-time.
                                        </p>
                                    </div>
            
            
            
            
                                    
            
                                    {/* Cards */}
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
              {/* Card 1 */}
              <div className="neoBorder !rounded-xl h-full">
                <div className="bg-[#000000] px-5 py-4 !rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">


                      <div className="neoBorder !rounded-[5px]"> 
                     <div className="p-1 !rounded-[5px] neoCard">
  <img
    src={profile1}
    alt="Coins"
    className="w-7 h-7 object-contain"
  />
</div>
</div>


                      <h3 className="text-[#FFFFFF] text-lg open-sans">MGXCOIN</h3>
                    </div>
                    <div className="text-[1.2rem] !font-bold text-[#FFCC66] mb-2">10 MGX</div>
                    <p className="text-[#FFFFFF] text-sm open-sans">Estimated value: $0</p>
                  </div>
                </div>
              </div>
            
              {/* Card 2 */}
              <div className="neoBorder !rounded-xl h-full">
                <div className="bg-[#000000] px-5 py-4 !rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
<div className="neoBorder !rounded-[5px]"> 
                          <div className="p-1 !rounded-[5px] neoCard">
  <img
    src={profile2}
    alt="Coins"
    className="w-7 h-7 object-contain"
  />
</div>
</div>


                      <h3 className="text-[#FFFFFF] text-lg open-sans">Wallet</h3>
                    </div>
                    <div className="text-[1.2rem] font-bold text-[#FFCC66] mb-2">0x55d...fgh</div>
                    <p className="text-[#FFFFFF] text-sm open-sans">Your Connected Wallet Address</p>
                  </div>
                </div>
              </div>
            
              {/* Card 3 */}
              <div className="neoBorder !rounded-xl h-full">
                <div className="bg-[#000000] px-5 py-4 !rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
<div className="neoBorder !rounded-[5px]"> 
                         <div className="p-1 !rounded-[5px] neoCard">
  <img
    src={profile3}
    alt="Coins"
    className="w-7 h-7 object-contain"
  />
</div>
</div>


                      <h3 className="text-[#FFFFFF] text-lg open-sans">Reffralls</h3>
                    </div>
                    <div className="text-[1.2rem] font-bold text-[#FFCC66] mb-2">12</div>
                    <p className="text-[#FFFFFF] text-sm open-sans">Count Of Successfull Adress</p>
                  </div>
                </div>
              </div>
            
              {/* Card 4 */}
              <div className="neoBorder !rounded-xl h-full">
                <div className="bg-[#000000] px-5 py-4 !rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
<div className="neoBorder !rounded-[5px]"> 
                          <div className="p-1 !rounded-[5px] neoCard">
  <img
    src={profile4}
    alt="Coins"
    className="w-7 h-7 object-contain"
  />
</div>
</div> 

                      <h3 className="text-[#FFFFFF] text-lg open-sans">Reffral Code</h3>
                    </div>


                    {/* <div className="text-2xl font-bold text-[#363636] mb-2">abcd...xyz</div> */}
                    <div className="flex items-center gap-3 mb-2">
 <span className="text-[1.2rem] font-bold text-[#FFCC66]">
  {shortCode(referralCode)}
</span>

{/* <button
  onClick={() => copyToClipboard(referralCode)}
  className="p-2 rounded-md neoCard hover:bg-[#2659F2]/10 transition"
  title="Copy referral code"
>
  <FaCopy className="text-[##FFFFFF] text-lg cursor-pointer" />
</button> */}

</div>

                   
                   
                    <p className="text-[#FFFFFF] text-sm open-sans">Copy of reffral code to share</p>
                  </div>
                </div>
              </div>
              </div>
            
            </div>

            {/* Bottom Section */}
            <div className=" flex lg:flex-row flex-col-reverse w-full gap-9 ">
              
                

                {/* Google  pie Chart */}
             
<div className="lg:w-[45%] p-[1px] rounded-xl gap-10 gap-10 
                bg-gradient-to-r from-[#FFCC66] to-[#997A3D]">
  
  <div className="neoCard p-6 rounded-2xl
                  flex justify-center items-center relative bg-white">
  
  {/* Pie Chart */}
 <Chart
  chartType="PieChart"
  width="100%"
  height="440px"  
  data={chartData}
  options={chartOptions}
/>


  {/* Center Image */}
  <div className="absolute flex items-center justify-center
                  w-[150px] h-[150px]
                  rounded-full
                  bg-white
                  shadow-md">
    <img
      src={profile5}   
      alt="Center Icon"
      className="w-[150px] h-[150px] object-contain"
    />
  </div>

</div>
</div>


                

  {/* Profile Form */}
                <div className="neoBorder lg:w-[55%] ">
                <div className=" lg:w-[100%] h-[100%]  neoCard p-8 rounded-xl ">
                    <h3 className="text-gold-gradienttt text-2xl open-sans mb-3">Update Your Profile</h3>
                    <p className="text-sm text-[#ffffff] mb-10">
                        Invite friends and earn 5% commission on their purchases. Building wealth together!
                    </p>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[#FFCC66] text-sm"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[#FFCC66] text-sm"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[#FFCC66] text-sm"
                    />
            <button
  className="
    text-[#000000] open-sans !font-[600] text-xl w-full py-3 rounded-lg
    transition hover:opacity-80
    bg-[linear-gradient(148.88deg,#997A3D_25.71%,#FFCC66_69.65%)]
    shadow-[6px_6px_11.4px_0px_#0000002E,
            inset_2px_2px_8.5px_-5px_#3E3E3EE5,
            inset_-2px_-2px_4px_0px_#00000040]
  "
>
  Update Profile
</button>

                </div>
                </div>
               



                
            </div>
        </div>
    );
};

export default ProfilePage;
