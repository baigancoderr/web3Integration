import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Chart } from "react-google-charts";

const ProfilePage = () => {
    const referralCode = "0x59d6e....a49";
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
         
        position: "top",
        alignment: "center",
        textStyle: { color: "white", fontSize: 12},
      },
      pieSliceText: "percentage",
      pieSliceTextStyle: {
        color: "black",
        fontSize: 14,
        bold: true,
      },
      slices: {
        0: { color: "#E7B764" },
        1: { color: "#66F2C8" },
      },
      chartArea: {
        width: "100%",
          height: "80%",
          
      },
    };

    return (
        <div className="space-y-10">
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="neoCard p-5 rounded-xl">
                    <p className="text-gradient font-bold text-lg uppercase">Wallet</p>
                    <p className="text-xs text-[var(--text-secondry)] mt-1">Your connected wallet address</p>
                    <p className="text-[var(--text-primary)] Gbold text-lg mt-10">{walletAddress}</p>
                </div>

                <div className="neoCard p-5 rounded-xl">
                    <p className="text-gradient font-bold text-lg uppercase">REFERRAL CODE</p>
                        <p className="text-xs text-[var(--text-secondry)] mt-1">Copy your referral code to share</p>
                    <p className="text-[var(--text-primary)] Gbold text-lg flex items-center gap-2 mt-10">
                        {referralCode}
                        <FaCopy
                            onClick={() => copyToClipboard(referralCode)}
                            className="text-sm cursor-pointer text-[var(--text-secondry)]"
                        />
                    </p>
                </div>

                <div className="neoCard p-5 rounded-xl">
                    <p className="text-gradient font-bold text-lg uppercase">REFERRALS</p>
                    <p className="text-xs text-[var(--text-secondry)] mt-1">Count of your successful referral</p>
                    <p className="text-[var(--text-primary)] Gbold text-3xl mt-10">{referrals}</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className=" flex lg:flex-row flex-col-reverse w-full  gap-10">
                {/* Profile Form */}
                <div className=" lg:w-[60%]   neoCard p-8 rounded-xl ">
                    <h3 className="text-gradient text-3xl Gbold mb-3">Update Your Profile</h3>
                    <p className="text-sm text-[var(--text-secondry)] mb-10">
                        Invite friends and earn 5% commission on their purchases. Building wealth together!
                    </p>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[var(--text-primary)] text-sm"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[var(--text-primary)] text-sm"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="neoCard w-full px-4 py-4 mb-7 rounded-lg outline-none bg-transparent text-[var(--text-primary)] text-sm"
                    />
                    <button className="bg-[var(--golden-txt1)] text-[var(--text-primary)]  text-xl  w-full py-3 rounded-lg hover:opacity-80 transition">
                        Update Profile
                    </button>
                </div>

                {/* Google Chart */}
                <div className="neoCard lg:w-[40%]  p-6 md:w-  rounded-xl flex justify-center items-center">
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="300px"
                        data={chartData}
                        options={chartOptions}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
