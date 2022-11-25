import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAproduct = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div>
            {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
               
                <input {...register("firstName")} placeholder="First name" />
                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" />
                <p>{data}</p>
                <input type="submit" />
            </form> */}


            <section className="p-6 bg-gray-800 text-gray-50">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full">

                                <label for="firstname" className="text-sm">Book name</label>
                                <input {...register("bookName")} placeholder="Book name" id="firstname" type="text" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>

                            {/* <div className="col-span-full sm:col-span-3">
                                <label for="lastname" className="text-sm">Book Price</label>
                                <input {...register("price")} placeholder="Book Price" id="lastname" type="text" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div> */}


                            <div className="col-span-full">
                                <label for="address" className="text-sm">Book Image Url</label>
                                <input {...register("Image")} placeholder="Book Image Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>




                            <select {...register("condition", { required: true })} className='col-span-full text-black'>
                                <option value="">Condition...</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>

                            <select {...register("category", { required: true })} className='col-span-full text-black'>
                                <option value="">Book Category...</option>
                                <option value="Action and Adventure">Action and Adventure</option>
                                <option value="Classics">Classics</option>
                                <option value="Comic Book or Graphic Novel">Comic Book or Graphic Novel</option>
                                <option value="Detective and Mystery">Detective and Mystery</option>
                                <option value="Fantasy">Fantasy</option>
                            </select>



                            <div className='col-span-full'>
                            <label className="text-sm">About Book</label>
                                <textarea {...register("aboutBook")} placeholder="About Book" className=' w-full text-black' />
                            </div>





                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Mobile Number</label>
                                <input {...register("mobileNumber")} placeholder="Mobile Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>






                            <div className="col-span-full">
                                <label for="address" className="text-sm">Location</label>
                                <input  {...register("location")} placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>


                            {/* <div className="col-span-full">
                                <label for="address" className="text-sm">Address</label>
                                <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div> */}
                            





                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm">Resale Price</label>
                                <input {...register("resalePrice")} placeholder="Resale Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm">Original Price</label>
                                <input {...register("originalPrice")} placeholder="Original Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm">Year of Use</label>
                                <input {...register("yearofUse")} placeholder="Year of Use" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>

                            <button className="btn btn-secondary">Submit</button>
                        </div>
                    </div>

                </form>
            </section>






        </div>
    );
};

export default AddAproduct;