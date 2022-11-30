import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { BeakerIcon ,CheckBadgeIcon} from '@heroicons/react/24/solid'
import { data } from 'autoprefixer';


const BookItem = ({ categoriesAllBook, setBookModals }) => {

    const { dbUser } = useContext(AuthContext)


    const { _id, sellerName,sellerId, sellerEmail, bookName, image, condition, categoryName, aboutBook,
        mobileNumber,
        location,
        resalePrice,
        originalPrice,
        yearofUse,
        salesStatus,
        publishDate,
    } = categoriesAllBook

    const [verifiedUser,setVerifiedUser]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${sellerId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setVerifiedUser(data)
        })
        .catch(err=>console.error(err))
    },[sellerId])

    console.log(verifiedUser[0]?.name)






    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">

            <img
                src={image}
                className="object-cover w-full h-64"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                        aria-label="Category"
                        title="traveling"
                    >
                        Publish
                    </a>
                    <span className="text-gray-600">— {publishDate}</span>
                </p>
                <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    {bookName}
                </a>
                <p className="mb-2 text-gray-700">
                    {/* {aboutBook} */}
                    {aboutBook.length > 100 ? aboutBook.slice(0, 100) + '...' : aboutBook}
                </p>
                <div>
                    <h1 className='text-1xl font-bold'>Book: {salesStatus}</h1>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-1xl font-bold'>Resale Price: {resalePrice}</h2>
                    </div>
                    <div>
                        <h2 className='text-1xl font-bold'>Original Price: {originalPrice}</h2>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <h2 className='text-1xl font-bold'>Seller Name: {sellerName}</h2>
                        {/* <h2>{verifiedUser.name}</h2> */}
                        {
                            verifiedUser[0]?.verified === 'Yes' ?
                            <>
                            <CheckBadgeIcon className="h-6 w-6 text-blue-500"></CheckBadgeIcon>
                            </>
                            :
                            <>
                             {/* <CheckBadgeIcon className="h-6 w-6 text-blue-500"></CheckBadgeIcon> */}

                            </>
                        }
                        

                    </div>
                </div>

                <div className='flex justify-between'>
                    <div>

                        <h2 className='text-1xl font-bold'>Use: {yearofUse} Years</h2>
                    </div>
                    <div>
                        <h2 className='text-1xl font-bold'>Location: {location}</h2>
                    </div>
                </div>
                <div>
                    <h1 className='text-1xl font-bold'> Seller Number: {mobileNumber}</h1>
                </div>

                {
                     dbUser?.role === 'seller' ?
                     <>
                     <div>
                        <h1>Only Buyers Orader Book</h1>
                     </div>
                     </>
                     :
                     <>
                      {
                    salesStatus === 'available' ?
                        <>
                            <div className='text-center flex justify-center gap-2 mt-2'>
                                <label
                                   
                                    htmlFor="book-modal"
                                    className="btn btn-primary text-white inline-flex items-center md:mb-2 lg:mb-0"
                                    onClick={() => setBookModals(categoriesAllBook)}
                                >Book now</label>
                            </div>
                        </>
                        :
                        <>
                            <div className='text-center flex justify-center gap-2 mt-2' disabled>
                                <label
                                    className="btn text-white inline-flex items-center md:mb-2 lg:mb-0"
                                >Book now</label>
                            </div>
                        </>

                }
                     </>
                }
            </div>

        </div>
    );
};

export default BookItem;