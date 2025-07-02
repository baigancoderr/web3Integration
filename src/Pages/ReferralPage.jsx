import { FaCopy, FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";
import ameriIcon from "../assets/images/ameriIcon.webp"

const ReferralPage = () => {
    const referralCode = "0x59d6e3CbF411bbe9a1b849";
    const referralLink = `https://americoin.io/?referrer=${referralCode}`;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    return (
        <div className="md:space-y-10 flex flex-col-reverse md:flex-col">
            {/* Top Banner */}
            <div className="neoCard flex md:mt-0 mt-10 md:flex-row flex-col-reverse justify-between md:items-center gap-5 px-6 py-10 rounded-xl">
                <div className="">
                    <h2 className="Gbold text-[var(--text-primary)] max-w-[20rem] text-gradient text-3xl">
                        Boost Your Wallet with
                        AMERI coin Referral
                    </h2>
                    <p className="text-base text-[var(--text-secondry)] mt-6">
                        Use your referral link to bring in users and receive instant token rewards.
                    </p>
                </div>
                <img
                    src={ameriIcon} // Replace with your actual logo path
                    alt="Referral Icon"
                    className="w-20 md:w-36"
                />
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left: Start Journey */}
                <div className="neoCard p-6 rounded-xl md:col-span-2 space-y-6">
                    <h3 className="text-3xl Gbold text-gradient">Start Your Referral Journey</h3>
                    <p className="text-[var(--text-secondry)] text-sm">
                        Invite friends and earn 5% commission on their purchases. Building wealth together!
                    </p>

                    {/* Referral Link Box */}
                    <div className="relative">
                        <input
                            type="text"
                            readOnly
                            value={referralLink}
                            className="w-full neoCard   rounded-lg px-4 py-4 text-sm text-[var(--text-primary)] pr-10 outline-none"
                        />
                        <button
                            onClick={() => copyToClipboard(referralLink)}
                            className="absolute hovNeoCard p-2 rounded-md right-3 top-1/2 -translate-y-1/2 text-[var(--text-primary)]"
                        >
                            <FaCopy />
                        </button>
                    </div>

                    {/* Share Icons */}
                    <div className="space-y-2">
                        <p className="text-[var(--text-secondry)] text-sm">🔗 Share With Friends</p>
                        <div className="flex gap-4">
                            <button className="hovNeoCard p-3 rounded-lg  transition">
                                <FaTelegramPlane className="text-[var(--golden-txt1)] text-2xl" />
                            </button>
                            <button className="hovNeoCard p-3 rounded-lg  transition">
                                <FaWhatsapp className="text-[var(--golden-txt1)] text-2xl" />
                            </button>
                            <button className="hovNeoCard p-3 rounded-lg  transition">
                                <FaXTwitter className="text-[var(--golden-txt1)] text-2xl" />
                            </button>
                            <button className="hovNeoCard p-3 rounded-lg  transition">
                                <FaFacebookF className="text-[var(--golden-txt1)] text-2xl" />
                            </button>
                        </div>
                    </div>

                    {/* How it Works Section */}
                    <div className="pt-4">
                        <h4 className="Gbold text-[var(--text-primary)] mb-3">How does it work?</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Step 1 */}
                            <div className="neoCard p-4 rounded-xl space-y-4 text-sm">
                                <div className=" w-10 h-10 rounded-md neoCard text-[var(--text-primary)] flex items-center justify-center text-xl font-bold">
                                    1
                                </div>
                                <h5 className="text-gradient Gsemibold text-xl lg:text-[1.2vw]">Share Your Unique Link</h5>
                                <p className="text-[var(--text-secondry)]">
                                    After connecting your wallet, {"you'll"} receive a personalized referral link. Share it with friends, your
                                    followers, or your community to start earning.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="neoCard p-4 rounded-xl space-y-4 text-sm">
                                <div className=" w-10 h-10 rounded-md neoCard text-[var(--text-primary)] flex items-center justify-center text-xl font-bold">
                                    2
                                </div>
                                <h5 className="text-gradient Gsemibold text-xl lg:text-[1.2vw]">Invite Others to Buy $AMERI</h5>
                                <p className="text-[var(--text-secondry)]">
                                    When someone uses your referral link to purchase $AMERI, their wallet is automatically linked to your
                                    referral—no manual action needed.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="neoCard p-4 rounded-xl space-y-4 text-sm">
                                <div className=" w-10 h-10 rounded-md neoCard text-[var(--text-primary)] flex items-center justify-center text-xl font-bold">
                                    3
                                </div>
                                <h5 className="text-gradient Gsemibold text-xl lg:text-[1.2vw]">Earn Instantly</h5>
                                <p className="text-[var(--text-secondry)]">
                                    You’ll receive 10% of the purchased $AMERI instantly in your dashboard for every successful
                                    transaction made through your link.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Referral Code Box */}
                    <div className="neoCard p-5 rounded-lg  ">
                        <p className="text-gradient tracking-wide text-base font-bold">REFERRAL CODE</p>
                        <p className="text-xs mt-3 text-[var(--text-secondry)]">Copy your referral code to share</p>
                        <p className="text-[var(--text-primary)] mt-14   text-2xl flex items-center gap-2">
                            0x59d6e...a49
                            <FaCopy
                                onClick={() => copyToClipboard(referralCode)}
                                className="text-sm  cursor-pointer text-[var(--text-secondry)]"
                            />
                        </p>
                    </div>

                    {/* Referrals Count */}
                    <div className="neoCard p-5 rounded-lg ">
                        <p className="text-gradient tracking-wide text-base font-bold">REFERRALS</p>
                        <p className="text-xs mt-3 text-[var(--text-secondry)]">Count of your successful referral</p>
                        <p className="text-[var(--text-primary)] mt-14  text-2xl">10</p>
                    </div>

                    {/* Referral Earnings */}
                    <div className="neoCard p-5 rounded-lg  ">
                        <p className="text-gradient tracking-wide text-base font-bold">REFERRAL EARNINGS</p>
                        <p className="text-xs mt-3 text-[var(--text-secondry)]">
                            Your total referral earnings in AMERI coin
                        </p>
                        <p className="text-[var(--text-primary)] mt-14  text-2xl">10 AMERI</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralPage;
