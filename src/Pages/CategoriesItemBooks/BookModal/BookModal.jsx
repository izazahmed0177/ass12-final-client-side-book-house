import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ bookModals, setBookModals }) => {
    const {dbUser}=useContext(AuthContext)
    const [show, setShow] = useState(false);
    // const reload=()=>window.location.reload();
    // const handleClose = () => setShow(false);

    const  { _id, 
        sellerName, 
        sellerEmail, 
        bookName, 
        image, 
        condition,
         categoryName, 
        aboutBook,
        mobileNumber,
        location,
        resalePrice,
        originalPrice,
        yearofUse,
        salesStatus,
        publishDate,
        categoryId,
        sellerId
    } = bookModals

    




    const handleBookingBook = event => {

        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const sellerMobile = form.sellerMobile.value;
        const bookName = form.bookName.value;
        const bookResalePrice = form.bookResalePrice.value;
        const sellerLocation= form.sellerLocation.value;
        const userPhoneNumber= form.userPhoneNumber.value;
        const meetingLocation= form.meetingLocation.value;
        const lastlyUserPrice= form.lastlyUserPrice.value;



        fetch(`http://localhost:5000/allBook/bookmodal/${_id}`, {
            method: 'PUT', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                console.log(data)
                toast.success(`This ${bookName}  is Booked`)
                // refetch();


                const bookingBook = {
                    userName,
                    userEmail,
                    sellerName,
                    sellerEmail,
                    sellerMobile,
                    bookName,
                    bookResalePrice,
                    sellerLocation,
                    userPhoneNumber,
                    meetingLocation,
                    lastlyUserPrice,
                    allBookId:_id,
                    categoryName:categoryName,
                    categoryNameId:categoryId,
                    sellerId:sellerId,
                    userId:dbUser._id,
                    image:image,
                    aboutBook:aboutBook,
                    

                }

                fetch('http://localhost:5000/userbooks', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(bookingBook)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            // setTreatment(null);
                            setBookModals([])
                            form.reset();
                            toast.success('Booking Book confirmed');
                           
                        }
                        else{
                            toast.error(data.message);
                        }
                    })
                    .catch(err=>console.log(err))
        




            }
        })
        .catch(err=>console.log(err))
       

    }


    return (
        <div>

            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{_id}</h3> */}
                    <form onSubmit={handleBookingBook} className='grid grid-cols-1 gap-3 mt-10'>
                        <label htmlFor="">User Name</label>
                        <input type="text" name='userName' disabled value={dbUser?.name} className="input w-full input-bordered " />
                        <label htmlFor="">User Email</label>
                        <input type="text" name='userEmail' required disabled value={dbUser?.email} className="input w-full input-bordered " />
                        <label htmlFor="">Seller Name</label>
                        <input type="text" required name='sellerName' disabled value={sellerName} className="input w-full input-bordered " />
                        <label htmlFor="">Seller Email</label>
                        <input type="text" name='sellerEmail' required disabled value={sellerEmail} className="input w-full input-bordered " />
                        <label htmlFor="">Seller Mobile</label>
                        <input type="text" name='sellerMobile' required disabled value={mobileNumber} className="input w-full input-bordered " />
                        <label htmlFor="">Book Name</label>
                        <input type="text" name='bookName' required disabled value={bookName} className="input w-full input-bordered " />
                        <label htmlFor="">Book Resale Price</label>
                        <input type="text" name='bookResalePrice' required disabled value={resalePrice} className="input w-full input-bordered " />
                        <label htmlFor="">Seller Location</label>
                        <input type="text" name='sellerLocation' required disabled value={location} className="input w-full input-bordered " />


                        
                        
                        <label htmlFor="">User Phone Number</label>
                        <input name="userPhoneNumber" required type="text" placeholder="User Phone Number" className="input w-full input-bordered" />
                        <label htmlFor="">Meeting location</label>
                        <input name="meetingLocation" required type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <label htmlFor="">Lastly User Price</label>
                        <input name="lastlyUserPrice" required type="text" placeholder="Lastly User Price" className="input w-full input-bordered" />
                        <br />
                       

                        <input  className='btn btn-primary w-full' type="submit" value="Submit" />
                       
                       
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookModal;