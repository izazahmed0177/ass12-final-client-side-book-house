import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookCategories = () => {
  const [bookCategorys, setBookCategory] = useState([])

  useEffect(() => {
    fetch('https://ass12-final-server-site-book-house.vercel.app/category')
      .then(res => res.json())
      .then(data => setBookCategory(data))
  }, [])


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Our Book Categories</h1>

        </div>
        <div className="flex flex-wrap -m-2">


          {

            bookCategorys?.map(bookCategory => <div key={bookCategory._id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg btn btn-outline btn-primary">

                <Link to={`/categorybooks/${bookCategory._id}`} className="flex-grow ">
                  <h1 className="text-gray-900 title-font font-medium ">{bookCategory.name}</h1>

                </Link>
              </div>
            </div>)
          }



        </div>
      </div>
    </section>
  );
};

export default BookCategories;