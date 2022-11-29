import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import MyOraderCart from './MyOraderCart';

const MyOrders = () => {
    const { dbUser, user } = useContext(AuthContext)

    const [userAllBooks, setUserAllBooks] = useState([]);

    // const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    // const { data: userAllBooks,isLoading } = useQuery({
    //     queryKey: ['userAllBooks'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/userbooks/${dbUser?._id}`);
    //         const data = await res.json();
    //         return data
    //     }
    // });

    // if(isLoading){
    //     return <h2>loding.....</h2>
    // }
    console.log(dbUser?._id)
    // console.log(user?.uid)
    console.log(user?.email)

    useEffect(() => {
        fetch(`http://localhost:5000/userbooksemail/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserAllBooks(data)
            })
            .catch(err => console.error(err))
    }, [])






    return (
        <div>
            
            
            <h1 className='text-center text-2xl'>My Orders</h1>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                    {
                      userAllBooks.map(userAllBook=><MyOraderCart key={userAllBook._id} userAllBook={userAllBook} ></MyOraderCart>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;