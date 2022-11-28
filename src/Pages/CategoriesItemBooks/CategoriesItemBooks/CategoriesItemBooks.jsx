import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookItem from '../BookItem/BookItem';
import BookModal from '../BookModal/BookModal';

const CategoriesItemBooks = () => {
    const categoriesAllBooks = useLoaderData();
    const [bookModals, setBookModals] = useState([]);
    const [showModal, setShowModal] = React.useState(false);
    useEffect(()=>{

    },[bookModals])
    return (
        <div>
            
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                   {
                    categoriesAllBooks &&
                    categoriesAllBooks?.map(categoriesAllBook=><BookItem key={categoriesAllBook._id}
                        categoriesAllBook={categoriesAllBook}
                        setBookModals={setBookModals}
                        setShowModal={setShowModal}
                    ></BookItem>)

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

export default CategoriesItemBooks;