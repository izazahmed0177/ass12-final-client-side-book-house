import React from 'react';
import { Link } from 'react-router-dom';

const MyOraderCart = ({ userAllBook }) => {
    const { _id, image, bookName, sellerName, categoryName, lastlyUserPrice, sellerMobile } = userAllBook;
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
                        Title
                    </a>
                    <span className="text-gray-600">— {categoryName}</span>
                </p>
                <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    {bookName}
                </a>
              
                <div>
                 
                </div>
                <div className='flex justify-between'>
                    <div>
                       
                    </div>
                  
                </div>
                <div>
                    <div>
                        <h2 className='text-1xl font-bold'>Seller Name: {sellerName}</h2>
                    </div>
                    <div>
                        <h2 className='text-1xl font-bold'>Seller Phone Number: {sellerMobile}</h2>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div>

                        <h2 className='text-1xl font-bold'>User Price: {lastlyUserPrice} </h2>
                    </div>
                  
                </div>
                <div>
                   
                </div>
                

                <div className='text-center w-full flex justify-center gap-2 mt-2'>
                    <button

                        
                        className="btn btn-primary w-full text-white inline-flex items-center md:mb-2 lg:mb-0"
                    // onClick={() => setBookModals(categoriesAllBook)}
                    >Reported Book</button>
                </div>
                <div className='text-center w-full flex justify-center gap-2 mt-2'>
                    <Link
                    to='/dashboard/MyOrders/payment'

                     
                        className="btn btn-primary w-full text-white inline-flex items-center md:mb-2 lg:mb-0"
                    // onClick={() => setBookModals(categoriesAllBook)}
                    >Pay now</Link>
                </div>

            </div>

        </div>
    );
};

export default MyOraderCart;