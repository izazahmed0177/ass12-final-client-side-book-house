import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const MyItemProducts = ({sellerBook,refetch}) => {
    const {_id,bookName,categoryName,resalePrice,salesStatus,advertised}=sellerBook;

    const handleUpdateBook = sellerBoook => {
        const proceed = window.confirm('Are you sure,you want to Advertised this Book')

        if (proceed) {

            fetch(`https://ass12-final-server-site-book-house.vercel.app/book/advertised/${sellerBook._id}`, {
                method: 'PUT',
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        console.log(data)
                        toast.success(`This ${sellerBook.bookName}  is Advertised`)
                        refetch();

                    }
                })
                .catch(err => console.log(err))

        }

    }


    const handleDeleteUser = sellerBook => {

        const proceed = window.confirm('Are you sure,you want to cancel this User')
        if (proceed) {
            fetch(`https://ass12-final-server-site-book-house.vercel.app/books/${sellerBook._id}`, {
                method: 'DELETE',
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        toast.success(`This ${sellerBook.bookName} deleted successfully`)
                        refetch()
                        // const remaining=deletingUser.filter(buyers=>buyers._id !==allBuyer._id);
                        // setDeletingUser(remaining)

                    }
                })

        }
    }

    const handleTostBook=selerbook=>{
        toast.success(`This ${sellerBook.bookName} Book Are Alrady Add Advertised`)
    }




    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">


        <td className="p-3">
            <p>{bookName}</p>
        </td>
        <td className="p-3">
            <p>{categoryName}</p>
        </td>
        <td className="p-3">
            <p>{resalePrice}</p>
           
        </td>
        <td className="p-3">
            <p>{salesStatus}</p>
            
        </td>
        <td className="p-3 text-right">
            {
                salesStatus === 'available' ?
                <>

                {
                     advertised === 'no' ?
                     <>
                    <button onClick={() => handleUpdateBook(sellerBook)}  className="btn btn-primary">{advertised}</button>

                     </>
                     :
                     <>
                     <button  onClick={() => handleTostBook(sellerBook)}   className="btn">{advertised}</button>

                     </>

                }



                 {/* <button onClick={() => handleUpdateBook(sellerBook)}  className="btn btn-primary">{advertised}</button> */}
                
                </>
                :
                <>
                 <h1 className="">Item Booked</h1>
                </>

            }


           
        </td>
        <td className="p-3 text-right">
            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                <button onClick={() => handleDeleteUser(sellerBook)} className="btn btn-secondary">Delete</button>
            </span>
        </td>
    </tr>

    );
};

export default MyItemProducts;