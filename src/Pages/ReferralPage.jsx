import { FaCopy, FaFacebookF, FaTelegramPlane, FaWhatsapp,FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";
import ref from "../assets/images/ref.png";
import ameriIcon from "../assets/images/ameriIcon.webp"
import { Chart } from "./Chart";
   import { FaPercentage } from 'react-icons/fa';
    import { FaCoins, FaTag } from 'react-icons/fa6';
    import { LuCopy } from "react-icons/lu";
    import { SlUserFollowing } from 'react-icons/sl';
import referralImg from "../assets/images/ref_img.png";
import ok from "../assets/images/dash-last.png"
import ref1 from "../assets/Refrall/ref1.png"
import ref2 from "../assets/Refrall/ref2.png"

const ReferralPage = () => {
    const referralLink = "https://moxcoin.io/?referre ";

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
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT CARD */} 
        <div className="neoBorder !rounded-[10px]">
                   <div className="h-full neoCard py-6 px-7 !rounded-[10px] "
  style={{
    boxShadow: `
      6px 6px 11.4px 0px #0000002E,
      2px 2px 8.5px -5px #3E3E3EE5 inset,
      -2px -2px 4px 0px #00000040 inset
    `,
  }}
> 
         <h2 className="text-xl !font-[600] text-gold-gradienttt  mb-5 open-sans  text-center">
  Mox – The AI-Powered Wealth Network
</h2>

            <div
  className="neoCard py-6 px-4 !rounded-[10px]"
  style={{
    boxShadow: `
      6px 6px 11.4px 0px #0000002E,
      2px 2px 8.5px -5px #3E3E3EE5 inset,
      -2px -2px 4px 0px #00000040 inset
    `,
  }}
>
          <p className=" text-[14px] mb-2 !font-[500]">
            Mox is not just a referral platform — it’s an intelligent,
            decentralized wealth ecosystem powered by AI-driven arbitrage
            strategies designed for consistent and scalable growth.
          </p>

          <div className="space-y-5 text-gray-700">
            <div>
              <h4 className="font-semibold  mb-1 text-gold-gradienttt  tracking-[0.5px]">Instant Earnings</h4>
              <p className="text-sm text-[#FFFFFF]">
                Earn up to 10% instant rewards on every successful signup
                through your Mox referral link — payouts are fast,
                transparent, and automated.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-gold-gradienttt  tracking-[0.5px]">Smart Compounded Growth</h4>
              <p className="text-sm text-[#FFFFFF]">
                As your Mox network expands, your participation in the
                AI-managed arbitrage profit pool increases, enabling
                compounding returns over time.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1 text-gold-gradienttt  tracking-[0.5px]">
                Sustainable & Stable Returns
              </h4>
              <p className="text-sm text-[#FFFFFF]">
                All rewards are backed by real arbitrage trading profits,
                ensuring long-term sustainability — not hype or speculation.
              </p>
            </div>
          </div>
          </div>
        </div>
        </div>

        {/* RIGHT CARD */}
        <div className="neoBorder !rounded-[10px]">
                 <div className="neoCard h-full py-6 px-7 !rounded-[10px] "
  style={{
    boxShadow: `
      6px 6px 11.4px 0px #0000002E,
      2px 2px 8.5px -5px #3E3E3EE5 inset,
      -2px -2px 4px 0px #00000040 inset
    `,
  }}
>
           <h2 className="text-xl !font-[600] mb-5 open-sans text-gold-gradienttt  text-center">
 Invite & Earn – How It Works
</h2>

          <p className=" text-[14px] mb-8 !font-[500]">
           Mox rewards you for growing the ecosystem with instant
            bonuses and ongoing profit-sharing opportunities. Every new
            participant you onboard strengthens the AI arbitrage engine —
            while boosting your income.
          </p>

          <div className="space-y-3">
            {[
              {
                step: "01",
                title: "Join the Program",
                desc: "Sign up as an Mox Affiliate and start earning instantly.",
              },
              {
                step: "02",
                title: "Invite Others",
                desc: "Share your referral link and bring new investors into the $Mox ecosystem.",
              },
              {
                step: "03",
                title: "Earn on Deposits",
                desc: "Receive instant referral rewards from every deposit your network participants make.",
              },
              {
                step: "04",
                title: "Multiply Your Earnings",
                desc: "As your affiliates invite others, your network expands and so does your income.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#FFCC66] font-semibold">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-gold-gradienttt ">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-[#FFFFFF] !font-[500]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

      </div>
    </div>

    <Chart/>

{/* Sabse Niche wala Part  */}


<div className="p-[1px] my-6 rounded-xl
                      bg-[linear-gradient(148.88deg,#997A3D_25.71%,#FFCC66_69.65%)]">
      
        <div className="flex items-center justify-between px-3 py-2 rounded-xl
                        bg-[linear-gradient(180deg,#363636_0%,#000000_100%)]">
      
          <div className="flex items-center gap-3">
            <img src={ref} alt="tokenomic" className="w-5 h-5" />
            <h3 className="text-lg font-bold text-white open-sans">
             Reffral Income
            </h3>
          </div>
      
          <button className="text-xl text-gray-400 hover:text-white">
            ⋮
          </button>
      
        </div>
      </div>

                  <div className="neoBorder rounded-xl h-full">

                    <div className="neoCard flex  flex-col-reverse lg:flex-row p-6 md:flex justify-between items-center   rounded-xl gap-8">
                        {/* Left Section */}
                        <div className="flex flex-col w-full  items-center md:items-start  ">

                           
                            <p className="text-center md:text-left mb-5 text-xl font-bold
text-gold-gradienttt ">
  Invite friends and earn 5% commission on their purchases.
  Building wealth together!
</p>


                            {/* Referral Link */}
                            <p className="text mb-2 text-[#FFFFFF]  ">
                                Your Referral Link
                            </p>

                           
                            <div className="flex items-center w-full neoCard px-4 py-2 rounded-lg mb-8 shadow-inner">
                                <input
                                    type="text"
                                    readOnly
                                    value={referralLink}
                                    className="bg-transparent text-[#FFCC66] text-[1.1rem]  font-[400] underline w-full outline-none"
                                />
                                <button
                                    onClick={handleCopy}
                                    className="ml-2 p-2 hovNeoCard hover:bg-[var(--golden-txt1)]/10 rounded-md"
                                >
                                    <LuCopy className="text-[var(--golden-txt1)] text-lg" />
                                </button>
                            </div>
                            

                            {/* Social Share */}
                            <div>
                                        <p className="text-center md:text-left mb-5 text-m font-bold text-gold-gradienttt
 ">
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
    className="w-full max-w-[500px] mx-auto "
  />
  </div>
                        
                    </div>
                    </div>


                    {/* Extra Section */}
                    <section className="open-sans neoCard  mt-7 rounded-[7px]  p-6 md:p-10 "
                     style={{
    boxShadow: `
      6px 6px 11.4px 0px #0000002E,
      2px 2px 8.5px -5px #3E3E3EE5 inset,
      -2px -2px 4px 0px #00000040 inset
    `,
  }}>
                   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        
        {/* Left Content */}
        <div>
          <h2 className="text-[#FFCC66] !text-[1.3rem] md:text-2xl font-semibold mb-4">
            Mox DeFi Yield Initiative
          </h2>

          <h4 className="text-[#997A3D] font-semibold mb-2">
            Stake Your Tokens, Fuel the Mox Ecosystem
          </h4>

          <p className="text-[#FFFFFF] text-sm leading-relaxed">
            Join the MoxCoin Initiative to earn steady rewards
            while boosting the ecosystem. Our referral network gives
            early supporters instant bonuses and ongoing profit sharing.
          </p>
        </div>

        {/* Card 1 */}
        <div className="neoBorder !rounded-xl">
        <div className="bg-[#000000] !rounded-xl shadow-lg p-4"
             style={{
    boxShadow: `
      6px 6px 11.4px 0px #0000002E,
      2px 2px 8.5px -5px #3E3E3EE5 inset,
      -2px -2px 4px 0px #00000040 inset
    `,
  }}>
  
  {/* Top Row */}
  <div className="flex items-center justify-between mb-2">
    <h3 className="font-semibold text-[#FFFFFF] text-[1.2rem] max-w-[145px]   ">
      Earn Daily Passive Income
    </h3>

    <img
      src={ref1}
      alt="Passive Income"
      className="w-16 h-16"
    />
  </div>

  {/* Description */}
  <p className="text-[#FFFFFF] text-[1.1rem] !font-[300] leading-relaxed">
    Get instant referral bonuses and share in profits from
    network deposits.
  </p>

</div>
</div>


        {/* Card 2 */}
         <div className="neoBorder !rounded-xl">
        <div className="bg-[#000000] !rounded-xl shadow-lg p-4"      style={{
    boxShadow: `
      6px 6px 11.4px 0px #0000002E,
      2px 2px 8.5px -5px #3E3E3EE5 inset,
      -2px -2px 4px 0px #00000040 inset
    `,
  }}>
  
  {/* Top Row */}
  <div className="flex items-center justify-between mb-2">
    <h3 className="font-semibold text-[#FFFFFF] text-[1.2rem] max-w-[145px]   ">
      Enjoy Daily Passive Income
    </h3>

    <img
      src={ref2}
      alt="Passive Income"
      className="w-16 h-16"
    />
  </div>

  {/* Description */}
  <p className="text-[#FFFFFF] text-[1.1rem] !font-[300] leading-relaxed">
  Unlock instant referral bonuses and profit sharing from network contributions.
  </p>

</div>
</div>

      </div>
    </section>

</>

  );


};

export default ReferralPage;
