
import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const { logOut, user ,loading,dbUser } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => { 
        
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>



            {
              dbUser?.role === 'admin' ?
                <>

                  <Link to='/dashboard/AllBuyers' className="mr-5 hover:text-gray-900">All Buyers</Link>
                  <Link to='/dashboard/AllSellers' className="mr-5 hover:text-gray-900">All Sellers</Link>
                  <Link to='/dashboard/ReportedItems' className="mr-5 hover:text-gray-900">Report</Link>
                </>
                :
                <>
                  {
                    dbUser?.role === 'seller' ?
                      <>

                        <Link to='/dashboard/AddAproduct' className="mr-5 hover:text-gray-900">Add Book</Link>
                        <Link to='/dashboard/MyProducts' className="mr-5 hover:text-gray-900">My Books</Link>

                      </>
                      :
                      <>

                        {
                          dbUser?.role === 'buyers' ?
                            <>
                              <Link to='/dashboard/MyOrders' className="mr-5 hover:text-gray-900">My Orders</Link>
                              
                            </>
                            :
                            <>

                            </>
                        }



                      </>
                  }

                </>


            }


            {/* <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">{user?.email}</a> */}





            <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
          </nav>

          {
            user?.uid ?
              <>
                <button onClick={handleLogOut} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">logOut</button>
              </>
              :
              <>
                <Link to='/login' className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogIn
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
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