import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const AddAproduct = () => {
    const {dbUser}=useContext(AuthContext)
    const { register, handleSubmit ,reset,} = useForm();
    const [data, setData] = useState("");
    // publishDate:new Date()
    let date=new Date()
    const dateFormat=format(date,'PP');

    const [bookCategorys, setBookCategory]=useState([])
    const [categorydb, setCategory]=useState(null)

    useEffect(()=>{
        fetch('https://ass12-final-server-site-book-house.vercel.app/category')
        .then(res=>res.json())
        .then(data=>setBookCategory(data))
    },[])

    



    const handleAddProduct=data=>{

        console.log(data.category)

      


        fetch(`https://ass12-final-server-site-book-house.vercel.app/category/${data.category}`)
        .then(res=>res.json())
        .then(data=>setCategory(data))
        console.log(categorydb)
        console.log(categorydb[0].name)

        const categoryName=categorydb[0].name;





   
   

        const product={
            sellerName:dbUser.name,
            sellerId:dbUser._id,
            sellerEmail:dbUser.email,
            bookName:data.bookName,
            image:data.image,
            condition:data.condition,

           

            categoryId:data.category,
            categoryName,
           
            aboutBook:data.aboutBook,
            mobileNumber:data.mobileNumber,
            location:data.location,
            resalePrice:data.resalePrice,
            originalPrice:data.originalPrice,
            yearofUse:data.yearofUse,
            salesStatus:"available",
            advertised:"no",
            // publishDate111:new Date(),
            publishDate:dateFormat,

        }

        console.log(product)

        fetch('https://ass12-final-server-site-book-house.vercel.app/books',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setCategory(null)
            toast.success(`${data.bookName} is added successfully`)
            reset();
           
            
            
        })
    }



    return (
        <div>
           


            <section className="p-6 bg-gray-800 text-gray-50">
                {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"> */}
                <form onSubmit={handleSubmit(handleAddProduct)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full">

                                <label for="firstname" className="text-sm">Book name</label>
                                <input {...register("bookName",{
                                    required:"Book Name Required"
                                })} placeholder="Book name" id="firstname" type="text" className="w-full text-black rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 " />
                            </div>


                            <div className="col-span-full">
                                <label for="address" className="text-sm">Book Image Url</label>
                                <input {...register("image",{
                                    required:"Book Image Url Required"
                                })} placeholder="Book Image Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>




                            <select {...register("condition", { required: true })} className='col-span-full text-black'>
                                <option value="">Condition...</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>

                         
                           
                                  <label for="address" className="text-sm">Book Category</label>
                                <select {...register("category", { required: true })} className='col-span-full text-black'>


                                {
                                    bookCategorys?.map(bookCategory=> <option key={bookCategory._id}   value={
                                      bookCategory._id
                                      

                                    }>{bookCategory.name}</option>)
                                }
                               
                            </select>

                            



                            <div className='col-span-full'>
                            <label className="text-sm">About Book</label>
                                <textarea {...register("aboutBook",{
                                    required:"About Book Required"
                                })} placeholder="About Book" className=' w-full text-black' />
                            </div>





                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Mobile Number</label>
                                <input {...register("mobileNumber",{
                                    required:"Mobile Number Required"
                                })} placeholder="Mobile Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>






                            <div className="col-span-full">
                                <label for="address" className="text-sm">Location</label>
                                <input  {...register("location",{
                                    required:"Location Required"
                                })} placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>


                            {/* <div className="col-span-full">
                                <label for="address" className="text-sm">Address</label>
                                <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div> */}
                            





                            <div className="col-span-full sm:col-span-2">
                                <label  className="text-sm">Resale Price</label>
                                <input {...register("resalePrice",{
                                    required:true
                                })} placeholder="Resale Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label  className="text-sm">Original Price</label>
                                <input {...register("originalPrice",{
                                    required:"Original Price Required"
                                })} placeholder="Original Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label  className="text-sm">Year of Use</label>
                                <input {...register("yearofUse",{
                                    required:"Year of Use Required"
                                })} placeholder="Year of Use" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                           

                            <button className="btn btn-secondary">Submit</button>
                            {/* <p>{data}</p> */}
                        </div>
                    </div>

                </form>
            </section>






        </div>
    );
};

export default AddAproduct;