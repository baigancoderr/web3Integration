import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch, FiCalendar, FiChevronDown } from "react-icons/fi";

import { CgCopy } from 'react-icons/cg';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Transaction = ({ trxData, datatype }) => {

    const data = trxData

    const [currentData, setCurrentData] = useState('transaction');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(data[currentData].length / itemsPerPage);
 const [openDate, setOpenDate] = useState(false);


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
        <>

    
<div className="flex justify-end items-center gap-3 mb-4">
  {/* Search Bar */}
  <div className="relative w-[200px] neoCard !rounded-[8px] ">
    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
      <FiSearch size={16} />
    </span>
    <input
      type="text"
      placeholder="Search"
      className="pl-10 pr-3 py-2 !rounded-[8px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2659F2] text-sm text-[#B7B7B7] open-sans w-full"
    />
  </div>

  {/* Date Filter */}
  <div className="relative neoCard">
    <button
      onClick={() => setOpenDate(!openDate)}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm text-[#525252]"
    >
      Select date
      <FiChevronDown size={16} />
    </button>

    {openDate && (
      <div className="neoCard absolute top-[170%] right-0 w-[200px] bg-white border border-[#2659F2] rounded-lg p-4 shadow-lg z-50">
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Start Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm placeholder:text-[#525252] text-[#525252] focus:outline-none"
          />
          <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="End Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm placeholder:text-[#525252] text-[#525252] focus:outline-none"
          />
          <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    )}
  </div>
</div>





        <div id="ref-main" className=" w-full Gregular     ">
            <div className="  space-x-5 w-full    tablet:space-x-2 ">
                
             
            </div>
            <div className=' w-full    ' >
                <div className="relative overflow-x-auto shadow-md   ">
                    <table className="w-full text-sm text-left  ">
                        <thead className="text-xs text-[var(--text-secondry )]  bg-gray-900 neoCard">
                            <tr className='font-bold text-sm tracking-wider' >
                                <th scope="col" className="px-6 py-3 text-nowrap text-[1.25rem] !text-[#363636] ">No</th>
                                <th scope="col" className="px-6 py-3 text-[1.25rem] !text-[#2659F2]">Amount</th>
                                <th scope="col" className="px-6 py-3 text-[1.25rem] !text-[#363636]">Adress</th>
                                <th scope="col" className="px-6 py-3 text-[1.25rem] !text-[#2659F2]">USD Value</th>
                                <th scope="col" className="px-6 py-3 text-[1.25rem] !text-[#363636]"> Date </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPageData.map((row, index) => (
                                <>
                                    <tr
                                        key={index}
                                        className="bg-[#FFFDFD]  "
                                    >
                                        <td className="px-6 py-4 text-[#363636] open-sans">{(currentPage - 1) * itemsPerPage + index + 1}</td>

                                        <td   className="px-6 py-4 text-[#2659F2] ">
                                            <div className='relative flex gap-2'>
                                                
                                                <p className='cursor-pointer'>
                                                    {row[0]?.length > 10 ? `${row[0].slice(0, 10)}...` : row[0]}

                                                </p>
                                            </div>
                                        </td>
                                        <td onClick={() => handleCopyAddress(row[1], index, "col1")} className="px-6 py-4 text-[#363636] ">
                                            <div className='relative flex gap-2'>
                                                {/* <CgCopy
                                                    className={`text-lg active:scale-[0.8] transition-all ease-in-out ${copyStatus[`${index}-col1`] ? "text-green-500" : "text-white"
                                                        }`}
                                                /> */}
                                                <p className='cursor-pointer'>
                                                    {row[1]?.length > 10 ? `${row[1].slice(0, 10)}...` : row[1]}
                                                </p>
                                            </div>
                                        </td>

                                        <td onClick={() => handleCopyAddress(row[2], index, "col2")} className="px-6 py-4 26680394850 text-[#2659F2] ">
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
                                        {/* <td className="px-6 py-4 text-[var(--golden-txt1)] text-nowrap font-bold ">$ {row[2]}</td> */}

                                        <td className="px-6 py-4 text-[#363636]">
                                            {row[3]}
                                            {/* {typeof row[3] === 'number' ? row[3].toFixed(5) : parseFloat(row[3]).toFixed(5)} */}

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
                        className="px-3 h-8 text-[var(--golden-txt1)] bg-[white] border-gray-600 rounded hover:text-white hover:bg-gray-600"
                        disabled={currentPage <= 1}
                    >
                        <FaAngleDoubleLeft />
                    </button>

                    <div className="inline-flex space-x-2 text-sm">
                        {createPagination().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageClick(page)}
                                className={`px-3 h-8 border border-gray-600 rounded ${currentPage === page ? 'bg-[white] text-[var(--golden-txt1)]' : 'bg-gray-700 text-[var(--golden-txt1)] hover:text-white hover:bg-gray-600'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        className="px-3 h-8 text-[var(--golden-txt1)] tracking-widest bg-[white] border-gray-600 rounded hover:text-white hover:bg-gray-600"
                        disabled={currentPage >= totalPages}
                    >

                        <FaAngleDoubleRight />
                    </button>
                </nav>
            </div>
        </div>
        </>
    );
};

Transaction.propTypes = {
    trxData: PropTypes.shape({
        transaction: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            )
        ).isRequired,
    }).isRequired,
    datatype: PropTypes.string.isRequired,
  };

export default Transaction;
