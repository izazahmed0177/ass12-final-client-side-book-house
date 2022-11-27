import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ bookModals, setBookModals }) => {
    const {dbUser}=useContext(AuthContext)
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
    } = bookModals




    const handleBooking = event => {
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
            lastlyUserPrice
        }


        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // setTreatment(null);
                    toast.success('Booking confirmed');
                   
                }
                else{
                    toast.error(data.message);
                }
            })


    }









    return (
        <div>

            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{bookName}</h3> */}
                    <form  className='grid grid-cols-1 gap-3 mt-10'>
                        <label htmlFor="">User Name</label>
                        <input type="text" name='userName' disabled value={dbUser?.name} className="input w-full input-bordered " />
                        <label htmlFor="">User Email</label>
                        <input type="text" name='userEmail' disabled value={dbUser?.email} className="input w-full input-bordered " />
                        <label htmlFor="">Seller Name</label>
                        <input type="text" name='sellerName' disabled value={sellerName} className="input w-full input-bordered " />
                        <label htmlFor="">Seller Email</label>
                        <input type="text" name='sellerEmail' disabled value={sellerEmail} className="input w-full input-bordered " />
                        <label htmlFor="">Seller Mobile</label>
                        <input type="text" name='sellerMobile' disabled value={mobileNumber} className="input w-full input-bordered " />
                        <label htmlFor="">Book Name</label>
                        <input type="text" name='bookName' disabled value={bookName} className="input w-full input-bordered " />
                        <label htmlFor="">Book Resale Price</label>
                        <input type="text" name='bookResalePrice' disabled value={resalePrice} className="input w-full input-bordered " />
                        <label htmlFor="">Seller Location</label>
                        <input type="text" name='sellerLocation' disabled value={location} className="input w-full input-bordered " />


                        
                        
                        <label htmlFor="">User Phone Number</label>
                        <input name="userPhoneNumber" type="text" placeholder="User Phone Number" className="input w-full input-bordered" />
                        <label htmlFor="">Meeting location</label>
                        <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <label htmlFor="">Lastly User Price</label>
                        <input name="lastlyUserPrice" type="text" placeholder="Lastly User Price" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookModal;