 
import Transaction from '../Components/Transaction'

const MyTransaction = () => {
    const data = {
            transaction: [
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
                ['123k AMERI', "8asd79a87s98df7s9a87sedf", '0x88df989sf', '3/7/2025 '],     
            ],
        };
    return (
      <>
        <div className="neoCard md:p-10 p-3 rounded-xl">
          <Transaction  datatype={"My Transactions"}  trxData={data} />
        </div>
      </>
    );
}


export default MyTransaction

