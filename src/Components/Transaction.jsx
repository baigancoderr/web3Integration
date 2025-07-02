import { useState } from 'react';
import { CgCopy } from 'react-icons/cg';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Transaction = ({ trxData, datatype }) => {

    const data = trxData

    const [currentData, setCurrentData] = useState('transaction');
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
                    onClick={() => handleSwitchData('transaction')}
                    className={` px-3 py-1 
                     ${currentData === 'transaction' ? 'bg-gradient' : 'bg-gray-700'}
                      text-black Gbold font-bold uppercase  w-full text-2xl rounded-t-xl tracking-wider py-3  `}
                >
                    {datatype}
                </button>
                {/* <button
                    onClick={() => handleSwitchData('Refral')}
                    className={`px-3 py-1
                     ${currentData === 'Refral' ? 'bg-yellow-500' : 'bg-gray-700'}
                      text-white rounded-3xl`}
                >
                    Referral
                </button> */}
            </div>
            <div className=' w-full    ' >
                <div className="relative overflow-x-auto shadow-md   ">
                    <table className="w-full text-sm text-left  ">
                        <thead className="text-xs text-[var(--text-secondry )] uppercase bg-gray-800">
                            <tr className='font-bold text-sm tracking-wider' >
                                <th scope="col" className="px-6 py-3 text-nowrap ">Sr no.</th>
                                <th scope="col" className="px-6 py-3">TRX Hash</th>
                                <th scope="col" className="px-6 py-3">From</th>
                                <th scope="col" className="px-6 py-3">To </th>
                                <th scope="col" className="px-6 py-3"> Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPageData.map((row, index) => (
                                <>
                                    <tr
                                        key={index}
                                        className="bg-[var(--primary-bg)] border-b hover:bg-[#292e35]"
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
                                        <td onClick={() => handleCopyAddress(row[1], index, "col1")} className="px-6 py-4 text-white ">
                                            <div className='relative flex gap-2'>
                                                <CgCopy
                                                    className={`text-lg active:scale-[0.8] transition-all ease-in-out ${copyStatus[`${index}-col1`] ? "text-green-500" : "text-white"
                                                        }`}
                                                />
                                                <p className='cursor-pointer'>
                                                    {row[1]?.length > 10 ? `${row[1].slice(0, 10)}...` : row[1]}
                                                </p>
                                            </div>
                                        </td>

                                        <td onClick={() => handleCopyAddress(row[2], index, "col2")} className="px-6 py-4 26680394850 ">
                                            <div className='relative flex gap-2'>
                                                <CgCopy
                                                    className={`text-lg active:scale-[0.8] transition-all ease-in-out ${copyStatus[`${index}-col2`] ? "text-green-500" : "text-white"
                                                        }`}
                                                />
                                                <p className='cursor-pointer'>
                                                    {row[2]?.length > 10 ? `${row[2].slice(0, 10)}...` : row[2]}
                                                </p>
                                            </div>
                                        </td>

                                        {/* <td className="px-6 py-4 text-white text-nowrap ">$ {row[1]}</td> */}
                                        {/* <td className="px-6 py-4 text-yellow-500 text-nowrap font-bold ">$ {row[2]}</td> */}

                                        <td className="px-6 py-4">

                                            {typeof row[3] === 'number' ? row[3].toFixed(5) : parseFloat(row[3]).toFixed(5)}

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

export default Transaction;
