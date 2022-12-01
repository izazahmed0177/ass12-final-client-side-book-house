import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const AllSellers = () => {
    const allSellers = useLoaderData();


    const handleDeleteUser = allseller => {

        const proceed = window.confirm('Are you sure,you want to cancel this User')
        if (proceed) {
            fetch(`https://ass12-final-server-site-book-house.vercel.app/user/${allseller._id}`, {
                method: 'DELETE',
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        toast.success(`Seller ${allseller.name} deleted successfully`)
                        // const remaining=deletingUser.filter(buyers=>buyers._id !==allBuyer._id);
                        // setDeletingUser(remaining)

                    }
                })

        }
    }

    const handleUpdateUser = allSeller => {
        const proceed = window.confirm('Are you sure,you want to Update this User')

        if (proceed) {

            fetch(`https://ass12-final-server-site-book-house.vercel.app/user/verified/${allSeller._id}`, {
                method: 'PUT',
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        console.log(data)
                        toast.success(`This ${allSeller.name}  is Verified`)

                    }
                })
                .catch(err => console.log(err))

        }

    }




    return (
        <div>
            {/* <h1>My Products</h1>
        <h2>{sellerBooks.length}</h2> */}
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">My Seller</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>

                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />

                            </colgroup>

                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Seller No</th>
                                    <th className="p-3">Seller Id</th>
                                    <th className="p-3">Seller Name</th>
                                    <th className="p-3">Seller Email</th>
                                    <th className="p-3 text-right">Verified</th>
                                    <th className="p-3">Remove Seller</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    allSellers &&
                                    allSellers?.map((allSeller, i) =>
                                        <tr key={allSeller._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">

                                            <td className="p-3">
                                                <p>{i + 1}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{allSeller._id}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{allSeller.name}</p>

                                            </td>
                                            <td className="p-3">
                                                <p>{allSeller.email}</p>

                                            </td>
                                            <td className="p-3 text-right">

                                                {
                                                    allSeller?.verified === 'no' ?
                                                        <>
                                                            <button onClick={() => handleUpdateUser(allSeller)} className="btn btn-primary">{allSeller.verified}</button>


                                                        </>
                                                        :
                                                        <>
                                                            <button className="btn">{allSeller.verified}</button>

                                                        </>
                                                }



                                                {/* <button onClick={() => handleUpdateUser(allSeller)} className="btn btn-primary">{allSeller.verified}</button> */}
                                            </td>
                                            <td className="p-3 text-right">
                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                    <button onClick={() => handleDeleteUser(allSeller)} className="btn btn-secondary">Delete</button>
                                                </span>
                                            </td>
                                        </tr>

                                    )
                                }





                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;