import React, { useEffect, useState } from 'react';
import BookModal from '../../CategoriesItemBooks/BookModal/BookModal';
import AdvertiseItem from './AdvertiseItem';

const AdvertisedItems = () => {
  const [advertisedBooks,setAdvertisedBooks]=useState([])
  
  const [bookModals, setBookModals] = useState([]);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(()=>{
    fetch('http://localhost:5000/book/advertised/item')
    .then(res=>res.json())
    .then(data=>{
      setAdvertisedBooks(data)
    })
  },[])
    return (
      <div>
            
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
             {
              advertisedBooks &&
              advertisedBooks?.map(categoriesAllBook=><AdvertiseItem key={categoriesAllBook._id}
                  categoriesAllBook={categoriesAllBook}
                  setBookModals={setBookModals}
                  setShowModal={setShowModal}
              ></AdvertiseItem>)

             }
             {
              <BookModal
              bookModals={bookModals}
              setBookModals={setBookModals}
              ></BookModal>
             }

          </div>
      </div>
  </div>
    );
};

export default AdvertisedItems;