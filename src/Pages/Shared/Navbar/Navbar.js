import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const { logOut, user ,loading,dbUser } = useContext(AuthContext)

  // const [dbUser, setDbUser] = useState([])


  console.log(user?.email)
  const userEmail = user?.email;


  // const { data: dbUser = [],isLoading,refetch} = useQuery({
  //   queryKey: ['dbUser'],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/users/role/${userEmail}`);
  //     // const res = await fetch(`http://localhost:5000/users`);
  //     const data = await res.json();
  //     return data;
  //   }
  // })


  // useEffect(() => {
  //   fetch(`http://localhost:5000/users/role/${userEmail}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setDbUser(data)
  //     })
  // },[]);



  // console.log(dbUser)

  const handleLogOut = () => {
    logOut()
      .then(() => { 
        // loading
        // refetch()
      })
      .catch(err => console.error(err))
  }

  // if (isLoading) {
  //   return <h1>loding......</h1>
    
  // }


  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>



            {
              dbUser?.role === 'admin' ?
                <>

                  <a className="mr-5 hover:text-gray-900">admin 1 Link</a>
                  <a className="mr-5 hover:text-gray-900">admin 2 Link</a>
                </>
                :
                <>
                  {
                    dbUser?.role === 'seller' ?
                      <>

                        <a className="mr-5 hover:text-gray-900">seller 1 Link</a>
                        <a className="mr-5 hover:text-gray-900">seller 2 Link</a>

                      </>
                      :
                      <>

                        {
                          dbUser?.role === 'buyers' ?
                            <>
                              <a className="mr-5 hover:text-gray-900">buyers 1 Link</a>
                              <a className="mr-5 hover:text-gray-900">buyers 2 Link</a>
                            </>
                            :
                            <>

                            </>
                        }



                      </>
                  }

                </>


            }








            {/* 
            {
              dbUser.map((user)=>
              <div key={user._id}>
              {
                user?.role =='admin' ?
                <>
                
                 <a className="mr-5 hover:text-gray-900">admin 1 Link</a>
            <a className="mr-5 hover:text-gray-900">admin 2 Link</a>
                </>
                :
                <>
                {
                  user?.role =='seller' ?
                  <>
                 
                    <a className="mr-5 hover:text-gray-900">seller 1 Link</a>
            <a className="mr-5 hover:text-gray-900">seller 2 Link</a>

                  </>
                  :
                  <>
                 
                    <a className="mr-5 hover:text-gray-900">buyers 1 Link</a>
            <a className="mr-5 hover:text-gray-900">buyers 2 Link</a>

                  </>
                }

                </>
              }
              </div>)
            } */}



            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">{user?.email}</a>





            <Link to='blog' className="mr-5 hover:text-gray-900">Blog</Link>
          </nav>

          {
            user?.uid ?
              <>
                <button onClick={handleLogOut} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">logOut</button>
              </>
              :
              <>
                <Link to='/login' className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogIn
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </>
          }



          {/* <Link to='/login' className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogIn
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link> */}


        </div>
      </header>
    </div>
  );
};

export default Navbar;