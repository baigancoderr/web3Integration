import { useState } from 'react';
import { CgCopy } from 'react-icons/cg';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const BuyHistoryTable = () => {
    const data = {
        withdrawal: [
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588963', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588964', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588965', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588966', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],
            ['#00124588962', '82374982734.8239042934829034234', "12/12/25"],

        ],

    };

 
    const [currentData, setCurrentData] = useState('withdrawal');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(data[currentData].length / itemsPerPage);

    const getCurrentPageData = () => {
        const dataset = data[currentData];
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return dataset.slice(startIndex, endIndex);
    };

    const handleSwitchData = (type) => {
        setCurrentData(type);
        setCurrentPage(1);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const createPagination = () => {
        const pageNumbers = [];
        const visibleRange = 3;

        pageNumbers.push(1);

        if (totalPages <= visibleRange) {
            for (let i = 2; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let startRange = Math.max(2, currentPage - 1);
            let endRange = Math.min(totalPages - 1, currentPage + 1);

            if (startRange > 2) {
                pageNumbers.push('...');
            }

            for (let i = startRange; i <= endRange; i++) {
                pageNumbers.push(i);
            }

            if (endRange < totalPages - 1) {
                pageNumbers.push('...');
            }

            if (totalPages > 1) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    const currentPageData = getCurrentPageData();

    const [copyStatus, setCopyStatus] = useState({});
    

    const handleCopyAddress = (code, index, column) => {
        const key = `${index}-${column}`;
        // console.log(key)
        navigator.clipboard.writeText(code).then(() => {
            setCopyStatus(prevState => ({ ...prevState, [key]: true }));
            setTimeout(() => {
                setCopyStatus(prevState => ({ ...prevState, [key]: false }));
            }, 2000); // Hide the "Copied" message after 2 seconds
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });

        
    };


    return (
        <div id="ref-main" className=" w-full Gregular     ">
            <div className="  space-x-5 w-full    tablet:space-x-2 ">
                <button
                    onClick={() => handleSwitchData('withdrawal')}
                    className={` px-3 py-1 
                     ${currentData === 'withdrawal' ? 'bg-gradient' : 'bg-gray-700'}
                      text-black Gbold font-bold uppercase  w-full text-2xl   tracking-wider py-3  `}
                >
                    Buy History
                </button>
               
            </div>
            <div className=' w-full    ' >
                <div className="relative overflow-x-auto shadow-md   ">
                    <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs text-gray-200 uppercase bg-gray-800">
                            <tr className='font-bold text-sm tracking-wider' >
                                <th scope="col" className="px-6 py-3 text-nowrap ">Sr no.</th>
                                <th scope="col" className="px-6 py-3">TRX Hash</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Buying Date </th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentPageData.map((row, index) => (
                                <>
                                    <tr
                                        key={index}
                                        className="bg-[#151618] border-b hover:bg-[#292e35]"
                                    >
                                        <td className="px-6 py-4">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                        <td onClick={() => handleCopyAddress(row[0], index, "col0")} className="px-6 py-4 text-yellow-500 ">
                                            <div className='relative flex gap-2'>
                                                <CgCopy
                                                    className={`text-lg active:scale-[0.8] transition-all ease-in-out ${copyStatus[`${index}-col0`] ? "text-green-500" : "text-white"
                                                        }`}
                                                />
                                                <p className='cursor-pointer'>
                                                    {row[0]?.length > 10 ? `${row[0].slice(0, 10)}...` : row[0]}

                                                </p>
                                            </div>
                                        </td>


                                        <td className="px-6 py-4">

                                            {typeof row[1] === 'number' ? row[1].toFixed(5) : parseFloat(row[1]).toFixed(5)}
                                        </td>

                                        <td className="px-6 py-4 text-white ">
                                            <div className='relative flex gap-2'>
                                                <p className='cursor-pointer'>
                                                    {row[2]?.length > 10 ? `${row[2].slice(0, 10)}...` : row[2]}
                                                </p>
                                            </div>
                                        </td>


                                    </tr>


                                </>

                            ))}
                        </tbody>
                    </table>

                </div>

                <nav className="flex gap-2 items-center justify-end pt-4" aria-label="Table navigation">
                    <button
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        className="px-3 h-8 text-yellow-500 bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
                        disabled={currentPage <= 1}
                    >
                        <FaAngleDoubleLeft />
                    </button>

                    <div className="inline-flex space-x-2 text-sm">
                        {createPagination().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageClick(page)}
                                className={`px-3 h-8 border border-gray-600 rounded ${currentPage === page ? 'bg-gray-500 text-yellow-500' : 'bg-gray-700 text-yellow-500 hover:text-white hover:bg-gray-600'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        className="px-3 h-8 text-yellow-500 bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
                        disabled={currentPage >= totalPages}
                    >

                        <FaAngleDoubleRight />
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default BuyHistoryTable;
