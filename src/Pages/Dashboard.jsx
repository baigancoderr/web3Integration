
    import { FaPercentage } from 'react-icons/fa';
    import { FaCoins, FaTag } from 'react-icons/fa6';
    import { FaPaperPlane, FaWhatsapp, FaXTwitter, FaFacebookF } from "react-icons/fa6";
    import { LuCopy } from "react-icons/lu";
    import { toast } from 'react-toastify';
    import { SlUserFollowing } from 'react-icons/sl';

    const Dashboard = () => {

        const referralLink = "https://americoin.io/?referrer=0x59d6e3CbF411bbe9a1b1849";

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
                        {/* Header */}
                        <div className="mb-5">
                            <h2 className="text-2xl md:text-3xl     text-gradient w-fit  Gbold ">
                                Portfolio Dashboard
                            </h2>
                            <p className="text-[var(--text-secondry)] mt-1">
                                Track your investments and referral rewards in real-time.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="neoCard px-5 py-4 rounded-xl  ">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className=" p-2 rounded-md neoCard">
                                        <FaCoins className="text-[var(--golden-txt1)] text-2xl" />
                                    </div>
                                    <h3 className="text-[var(--text-secondry)] text-lg ">
                                        AMERI Coin Balance
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-white mb-2">
                                    10 AMERI
                                </div>
                                <p className="text-[var(--text-secondry)] text-sm">
                                    Estimated value: $0
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="neoCard px-5 py-4 rounded-xl  ">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className=" p-2 rounded-md neoCard">
                                        <FaTag className="text-[var(--golden-txt1)] text-2xl" />
                                    </div>
                                    <h3 className="text-[var(--text-secondry)] text-lg ">
                                        Token Price
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-white mb-2">
                                    $0.0005
                                </div>
                                <p className="text-[var(--text-secondry)] text-sm">
                                    Current price at launch
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="neoCard px-5 py-4 rounded-xl  ">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className=" p-2 rounded-md neoCard">
                                        <FaPercentage className="text-[var(--golden-txt1)] text-2xl" />
                                    </div>
                                    <h3 className="text-[var(--text-secondry)] text-lg ">
                                        Earning percentage
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-white mb-2">
                                    5% Bonus
                                </div>
                                <p className="text-[var(--text-secondry)] text-sm">
                                    Enhanced rewards active
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="     ">
                        {/* Header */}
                        <div className="mb-5">
                            <h2 className="text-2xl md:text-3xl text-gradient w-fit  Gbold ">
                                Referral Performance
                            </h2>
                            <p className="text-[var(--text-secondry)] mt-1">
                                Track your referral activity and rewards in real time.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="neoCard px-5 py-4 rounded-xl  ">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className=" p-2 rounded-md neoCard">
                                        <FaCoins className="text-[var(--golden-txt1)] text-2xl" />
                                    </div>
                                    <h3 className="text-[var(--text-secondry)] text-lg ">
                                        Referrals
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-white mb-2">
                                    10  
                                </div>
                                <p className="text-[var(--text-secondry)] text-sm">
                                    Start referring to earn rewards
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="neoCard px-5 py-4 rounded-xl  ">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className=" p-2 rounded-md neoCard">
                                        <FaTag className="text-[var(--golden-txt1)] text-2xl" />
                                    </div>
                                    <h3 className="text-[var(--text-secondry)] text-lg ">
                                        Referral Income
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-white mb-2">
                                    10 AMERI
                                </div>
                                {/* <p className="text-[var(--text-secondry)] text-sm">
                                    Current price at launch
                                </p> */}
                            </div>

                            {/* Card 3 */}
                            <div className="neoCard px-5 py-4 rounded-xl  ">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className=" p-2 rounded-md neoCard">
                                        <FaPercentage className="text-[var(--golden-txt1)] text-2xl" />
                                    </div>
                                    <h3 className="text-[var(--text-secondry)] text-lg ">
                                        Bonus in USD
                                    </h3>
                                </div>
                                <div className="text-2xl font-bold text-white mb-2">
                                    $10
                                </div>
                                {/* <p className="text-[var(--text-secondry)] text-sm">
                                    Enhanced rewards active
                                </p> */}
                            </div>
                        </div>
                    </div>

                    <div className="neoCard flex  flex-col-reverse lg:flex-row p-6 md:flex justify-between items-center   rounded-xl gap-8">
                        {/* Left Section */}
                        <div className="flex flex-col w-full  items-center md:items-start  ">

                            <h3 className="text-xl md:text-left text-center md:text-3xl text-gradient   mb-3">
                                Start Your Referral Journey
                            </h3>
                            <p className="text-[var(--text-secondry)] md:text-left text-center mb-7">
                                Invite friends and earn 5% commission on their purchases.
                                Building wealth together!
                            </p>

                            {/* Referral Link */}
                            <p className="text mb-2 text-[var(--text-secondry)]   ">
                                Your Referral Link
                            </p>
                            <div className="flex items-center w-full neoCard px-4 py-2 rounded-lg mb-8 shadow-inner">
                                <input
                                    type="text"
                                    readOnly
                                    value={referralLink}
                                    className="bg-transparent text-[var(--text-primary)] w-full outline-none"
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
                                <p className="text-sm md:text-left text-center text-[var(--text-secondry)] mb-2">
                                    Share With Friends
                                </p>
                                <div className="flex gap-4">
                                    <button className="hovNeoCard p-3 rounded-lg ">
                                        <FaPaperPlane className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-lg ">
                                        <FaWhatsapp className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-lg ">
                                        <FaXTwitter className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-lg ">
                                        <FaFacebookF className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Referral Count */}
                        <div className="relative mt-6 mx-auto lg:mx-10 md:mt-0">
                            <div className="neoCard p-10 rounded-3xl">
                                <SlUserFollowing className="text-[var(--golden-txt1)] text-[7rem]" />
                            </div>
                            <div className="absolute -top-2 -right-2  neoCard text-white text-base px-3 py-2 rounded-md    ">
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    export default Dashboard