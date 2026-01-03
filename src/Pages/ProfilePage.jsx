import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Chart } from "react-google-charts";
    import { FaCoins, FaTag } from 'react-icons/fa6';
    import { FaPaperPlane, FaWhatsapp, FaXTwitter, FaFacebookF } from "react-icons/fa6";
      import { FaPercentage } from 'react-icons/fa';
      import profile1 from "../assets/profile/profile1.png"; 
        import profile2 from "../assets/profile/profile2.jpg"; 
          import profile3 from "../assets/profile/profile3.png"; 
            import profile4 from "../assets/profile/profile4.png"; 

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
      color: "#000",
      fontSize: 14,
    },
    
  },

  pieSliceText: "percentage",
  pieSliceTextStyle: {
    color: "white",
    fontSize: 14,
    bold: true,
  },

  slices: {
    0: { color: "#2659F2" },
    1: { color: "#7CB1ED" },
  },

  chartArea: {
    width: "100%",   // ✅ important
    height: "75%",   // ✅ legend ke liye space
  },
};


    return (
        <div className="space-y-10">
            {/* progress Bar */}
                <div className="neoBorder rounded-[2px]">
              <div className="neoCard flex md:gap-0 gap-4 md:flex-row flex-col-reverse justify-between rounded-[2px] p-6 bg">
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
            {/* Top Cards */}
                             <div className="     ">
                                    {/* Header */}
                                    <div className="mb-5">
                                        <h2 className="text-2xl md:text-3xl     text-gradient w-fit  open-sans ">
                                            Portfolio Dashboard
                                        </h2>
                                        <p className="text-[#363636] mt-1 open-sans font-bold">
                                            Track your investments and referral rewards in real-time.
                                        </p>
                                    </div>
            
            
            
            
                                    
            
                                    {/* Cards */}
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
              {/* Card 1 */}
              <div className="neoBorder rounded-xl h-full">
                <div className="neoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">

                     <div className="p-2 rounded-md neoCard">
  <img
    src={profile1}
    alt="Coins"
    className="w-6 h-6 object-contain"
  />
</div>


                      <h3 className="text-[#2659F2] text-lg open-sans">URBAN</h3>
                    </div>
                    <div className="text-[1.2rem] !font-bold text-[#363636] mb-2">10 URBAN</div>
                    <p className="text-[var(--text-secondry)] text-sm open-sans">Estimated value: $0</p>
                  </div>
                </div>
              </div>
            
              {/* Card 2 */}
              <div className="neoBorder rounded-xl h-full">
                <div className="neoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">

                          <div className="p-2 rounded-md neoCard">
  <img
    src={profile2}
    alt="Coins"
    className="w-6 h-6 object-contain"
  />
</div>


                      <h3 className="text-[#2659F2] text-lg open-sans">Wallet</h3>
                    </div>
                    <div className="text-[1.2rem] font-bold text-[#363636] mb-2">0x55d...fgh</div>
                    <p className="text-[var(--text-secondry)] text-sm open-sans">Your Connected Wallet Address</p>
                  </div>
                </div>
              </div>
            
              {/* Card 3 */}
              <div className="neoBorder rounded-xl h-full">
                <div className="neoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">

                         <div className="p-2 rounded-md neoCard">
  <img
    src={profile3}
    alt="Coins"
    className="w-6 h-6 object-contain"
  />
</div>


                      <h3 className="text-[#2659F2] text-lg open-sans">Reffralls</h3>
                    </div>
                    <div className="text-[1.2rem] font-bold text-[#363636] mb-2">12</div>
                    <p className="text-[var(--text-secondry)] text-sm open-sans">Count Of Successfull Adress</p>
                  </div>
                </div>
              </div>
            
              {/* Card 4 */}
              <div className="neoBorder rounded-xl h-full">
                <div className="neoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">

                          <div className="p-2 rounded-md neoCard">
  <img
    src={profile4}
    alt="Coins"
    className="w-6 h-6 object-contain"
  />
</div>

                      <h3 className="text-[#2659F2] text-lg open-sans">Reffral Code</h3>
                    </div>


                    {/* <div className="text-2xl font-bold text-[#363636] mb-2">abcd...xyz</div> */}
                    <div className="flex items-center gap-3 mb-2">
 <span className="text-[1.2rem] font-bold text-[#363636]">
  {shortCode(referralCode)}
</span>

<button
  onClick={() => copyToClipboard(referralCode)}
  className="p-2 rounded-md neoCard hover:bg-[#2659F2]/10 transition"
  title="Copy referral code"
>
  <FaCopy className="text-[#2659F2] text-lg cursor-pointer" />
</button>

</div>

                   
                   
                    <p className="text-[var(--text-secondry)] text-sm open-sans">Copy of reffral code to share</p>
                  </div>
                </div>
              </div>
              </div>
            
            </div>

            {/* Bottom Section */}
            <div className=" flex lg:flex-row flex-col-reverse w-full gap-9 ">
              
                

                {/* Google  pie Chart */}
             
<div className="lg:w-[45%] p-[1px] rounded-xl gap-10 gap-10 
                bg-gradient-to-r from-[#001D76] to-[#2659F2]">
  
  <div className="neoCard p-6 rounded-2xl
                  flex justify-center items-center relative bg-white">
  
  {/* Pie Chart */}
 <Chart
  chartType="PieChart"
  width="100%"
  height="437px"  
  data={chartData}
  options={chartOptions}
/>


  {/* Center Image */}
  <div className="absolute flex items-center justify-center
                  w-[130px] h-[130px]
                  rounded-full
                  bg-white
                  shadow-md">
    <img
      src={profile3}   
      alt="Center Icon"
      className="w-[130px] h-[130px] object-contain"
    />
  </div>

</div>
</div>


                

  {/* Profile Form */}

                <div className=" lg:w-[55%]  neoCard p-8 rounded-xl ">
                    <h3 className="text-gradient text-2xl open-sans mb-3">Update Your Profile</h3>
                    <p className="text-sm text-[var(--text-secondry)] mb-10">
                        Invite friends and earn 5% commission on their purchases. Building wealth together!
                    </p>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[#363636] text-sm"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[#363636] text-sm"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[#363636] text-sm"
                    />
                    <button className="bg-[var(--golden-txt1)] text-[WHITE]  open-sans font-[600] text-xl  w-full py-3 rounded-lg hover:opacity-80 transition">
                        Update Profile
                    </button>
                </div>
               



                
            </div>
        </div>
    );
};

export default ProfilePage;
