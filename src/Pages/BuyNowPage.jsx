import { FaChevronDown } from "react-icons/fa";
 
import { toast } from "react-toastify";
import { SiBinance, SiEthereum, SiTether } from "react-icons/si";
import { useState } from "react";


import hb1 from "../assets/images/hb1.webp"
import hb2 from "../assets/images/hb2.webp"
import hb3 from "../assets/images/hb3.webp"
import hb4 from "../assets/images/hb4.webp"


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
            <div className="neoCard flex md:gap-0 gap-4 md:flex-row flex-col-reverse justify-between rounded-lg p-6">
                <div className="md:w-[70%]  ">
                    <div className="neoCard rounded-md py-4  px-5">
                        <div className="w-full h-4 bg-[var(--secondry-bg)] rounded-sm  overflow-hidden">
                            <div className="h-full w-[75%] bg-[var(--golden-txt1)] "></div>
                        </div>
                    </div>
                    <div className="w-full text-[var(--text-secondry)] flex justify-between mt-3 md:text-base text-sm ">
                        <p>Raised - $1.03M</p>
                        <p>Current - $515k</p>
                    </div>
                </div>

                <div className="mx-6 w-[2px] bg-[#575757]" />
                <div className="flex gap-3 items-center md:w-[20%] flex-wrap justify-between text-[var(--text-secondry)] text-sm">
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

            {/* Buy Token and Leaderboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: How to Buy */}
                <div className="neoCard    p-4 py-7 rounded-xl space-y-5">
                    <div className="flex justify-between items-center">
                        <a href="#how-to-buy"  className="Gsemibold underline underline-offset-4 text-[var(--text-primary)]">
                            HOW TO BUY ⓘ
                        </a>
                        <span className="text-sm text-[var(--text-secondry)]">
                            Presale AMERI
                        </span>
                    </div>

                    <div className="px-5 space-y-5">
                        <p className=" font-bold "> Current Presale : 01</p>

                        {/* You Pay */}
                        <div className="relative space-y-1">
                            <p className="text-sm text-[var(--text-secondry)] mb-2">
                                You Pay
                            </p>

                            <div className="neoCard  p-3 py-5 rounded-lg">
                                <div className="flex gap-4 relative z-10">
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
                                    <input
                                        type="text"
                                        placeholder="Ex : 0.00"
                                        className="neoCard  p-3 w-full rounded-lg bg-transparent text-[var(--text-primary)] outline-none"
                                    />
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
                                <div className="flex mt-3 justify-between text-xs text-[var(--text-secondry)]">
                                    <p>Balance: 0.0000</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </div>

                        {/* You Recive */}
                        <div className="space-y-1">
                            <p className="text-sm text-[var(--text-secondry)] mb-2">
                                You Recive
                            </p>

                            <div className="neoCard p-3 py-5 rounded-lg ">
                                <div className="flex gap-4 ">
                                    <button className="neoCard  cursor-default flex items-center gap-2 px-4 rounded-lg text-[var(--text-primary)] text-sm">
                                        <SiBinance className="text-yellow-400 text-xl" />
                                        <span className="text-sm">BNB</span>
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="Ex : 0.00"
                                        className="neoCard  p-3 w-full rounded-lg bg-transparent text-[var(--text-primary)] outline-none"
                                    />
                                </div>

                                {/* Balance Row */}
                                <div className="flex mt-3 justify-between text-xs text-[var(--text-secondry)]">
                                    <p>Balance: 0.0000</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <p className="text-[var(--text-secondry)] text-xs">
                            NOTE: Min. Amount to Purchase: 0.0103 ETH
                        </p>

                        {/* Buy Token Button */}
                        <button
                            onClick={handleBuy}
                            className="bg-gradient  text-[var(--text-primary)] font-bold w-full py-3 rounded-lg opacity-80 hover:opacity-100 transition"
                        >
                            BUY TOKEN
                        </button>

                        {/* Referral Code */}
                        <div>
                            <p className="text-sm text-[var(--text-secondry)] mb-1">
                                Referral Code
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Ex : 0x36dddfgr..."
                                    className="neoCard  p-3 w-full rounded-lg bg-transparent text-[var(--text-primary)] outline-none"
                                />
                                <button className="hovNeoCard  px-4 rounded-lg text-[var(--text-primary)] text-sm">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Leaderboard */}
                <div className="neoCard p-6 rounded-xl">
                    <h3 className="Gsemibold text-[var(--text-primary)] mb-2">
                        LEADERBOARD
                    </h3>
                    <p className="text-sm text-[var(--text-secondry)] mb-7">
                        Top 10 AMERI coin Holders
                    </p>
                    <div className="space-y-5 px-5 max-h-[520px] overflow-auto hide-scrollbar">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center border-b border-[var(--border-color1)] pb-2"
                            >
                                <div className="text-[var(--text-primary)]">
                                    <p className="text-[var(--golden-txt1)]">#{i + 1}</p>{" "}
                                    <p>0x2222...5c1</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gradient pb-1 ">
                                        Total Transactions
                                    </p>
                                    <p className="text-[var(--text-primary)]">$3,927,234.34</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: How to Buy Steps */}
            <div id="how-to-buy+i" className="neoCard p-6 rounded-xl space-y-10">
                <h3 className="text-center text-xl text-gradient Gbold">
                    HOW TO BUY AMERI COIN
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
                    {/* Card 1 */}
                    <div className=" ">
                        <div className="neoCard h-full space-y-7 p-5 rounded-xl">
                            <h4 className="text-[var(--text-primary)] text-xl lg:text-[1.6vw] Gsemibold">
                                CONNECT YOUR WALLET
                            </h4>
                            <img src={hb1} alt="hb1" className="text-[var(--golden-txt1)] text-3xl mx-auto" />
                            <p className="text-[var(--text-secondry)] text-base lg:text-[1vw]">
                                Securely link your crypto wallet to the AMERI coin presale platform.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className=" ">
                        <div className="neoCard h-full space-y-7 p-5 rounded-xl">
                            <h4 className="text-[var(--text-primary)] text-xl lg:text-[1.6vw] Gsemibold">
                                Select a Payment Option
                            </h4>
                            <img src={hb2} alt="hb2" className="text-[var(--golden-txt1)] text-3xl mx-auto" />
                            <p className="text-[var(--text-secondry)] text-base lg:text-[1vw]">
                                Pick your preferred cryptocurrency or supported card to proceed with the transaction.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className=" ">
                        <div className="neoCard h-full space-y-7 p-5 rounded-xl">
                            <h4 className="text-[var(--text-primary)] text-xl lg:text-[1.6vw] Gsemibold">
                                Authorize the Transaction
                            </h4>
                            <img src={hb3} alt="hb3" className="text-[var(--golden-txt1)] text-3xl mx-auto" />
                            <p className="text-[var(--text-secondry)] text-base lg:text-[1vw]">
                                Review the purchase details and confirm your payment through a secure process.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="  ">
                        <div className="neoCard h-full  space-y-7 p-5 rounded-xl">
                            <h4 className="text-[var(--text-primary)] text-xl lg:text-[1.6vw] Gsemibold">
                                Access Your Tokens
                            </h4>
                            <img src={hb4} alt="hb4" className="text-[var(--golden-txt1)] text-3xl mx-auto" />
                            <p className="text-[var(--text-secondry)] text-base lg:text-[1vw]">
                                Your purchased tokens will be instantly available in your dashboard.
                            </p>
                        </div>
                    </div>

                     
                </div>
            </div>
        </div>
    );
};

export default BuyNowPage;
