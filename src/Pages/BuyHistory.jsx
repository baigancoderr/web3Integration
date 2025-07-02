 
import BuyHistoryTable from "../Components/BuyHistoryTable"
import PriceDetails from "../Components/PriceDetails"
import addData from "../assets/images/addData.png"

 


const BuyHistory = () => {
  return (
    <>
      <div className=" Gregular p-4 h-fit mt-14 ml-64 tablet:ml-0 ">
        <div className="p-4  tablet:p-0      rounded-lg   ">
          <PriceDetails />

          <div className="grid grid-cols-3 laptop:grid-cols-1  gap-4 mb-4">
            <div className="flex col-span-2  laptop:col-span-1   justify-center overflow-hidden rounded-lg bg-gray-50 h-fit dark:bg-[#151618] border-[#424242] border-[2px]   ">
              
              <div className=" flex flex-col w-full ">
                <BuyHistoryTable/>
              </div>

            </div>


            <div className="grid laptop:hidden col-span-1 items-center justify-center rounded-lg bg-gray-50   dark:bg-[#151618] border-[#424242] border-[2px] ">
              <img src={addData} className=" h-full " alt="" />
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default BuyHistory