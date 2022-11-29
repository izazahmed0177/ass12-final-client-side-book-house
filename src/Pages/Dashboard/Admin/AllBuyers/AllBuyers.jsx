import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import ConfirmationUser from '../ConfirmationUser/ConfirmationUser';

const AllBuyers = () => {
    const allBuyers = useLoaderData();
    const [deletingUser, setDeletingUser] = useState([]);
    const [show, setShow] = useState(false);
    

    const closeModal = () => {
        setDeletingUser([]);
        setShow(false)
    }


    const handleDeleteUser = allBuyer => {
        fetch(`http://localhost:5000/user/${allBuyer._id}`, {
            method: 'DELETE', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                // refetch();
                toast.success(`Doctor ${allBuyer.name} deleted successfully`)
                // const remaining=deletingUser.filter(buyers=>buyers._id !==allBuyer._id);
                    // setDeletingUser(remaining)
            }
        })
    }





    return (
        <div>
            {/* <h1>All Buyers</h1> */}

            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">My Buyers</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>

                                <col />
                                <col />
                                <col />
                                <col />
                                {/* <col /> */}
                                <col className="w-24" />

                            </colgroup>

                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Buyer No</th>
                                    <th className="p-3">Buyer Id</th>
                                    <th className="p-3">Buyer Name</th>
                                    <th className="p-3">Buyer Email</th>
                                    {/* <th className="p-3 text-right">Verified</th> */}
                                    <th className="p-3">Remove Buyer</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    allBuyers &&
                                    allBuyers?.map((allBuyer, i) =>
                                        <tr key={allBuyer._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">

                                            <td className="p-3">
                                                <p>{i+1}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{allBuyer._id}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{allBuyer.name}</p>
                                                
                                            </td>
                                            <td className="p-3">
                                                <p>{allBuyer.email}</p>
                                               
                                            </td>
                                            {/* <td className="p-3 text-right">
                                                <button className="btn btn-primary">Add</button>
                                            </td> */}
                                            <td className="p-3 text-right">
                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                    {/* <button className="btn btn-secondary">Delete</button> */}
                                                    <label onClick={() => setDeletingUser(allBuyer)} htmlFor="confirmation-modal" className="btn btn-secondary">Delete</label>
                                                </span>
                                            </td>
                                        </tr>

                                    )
                                }

                            </tbody>
                        </table>
                    </div>



                </div>

                {
                    <ConfirmationUser
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingUser.name} . It cannot be undone.`}
                    successAction = {handleDeleteUser}
                    successButtonName="Delete"
                    modalData = {deletingUser}
                    closeModal = {closeModal}
                    >


                    </ConfirmationUser>
                }
            </div>




        </div>
    );
};

export default AllBuyers;