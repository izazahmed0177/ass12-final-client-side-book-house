import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const [sidebar, setsidebar] = useState();

    const handaleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(reault=>{
            const user=reault.user;
            console.log(user)
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
                <div className="flex flex-col items-center justify-center">
                    <svg width={188} height={74} viewBox="0 0 188 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.6477 59.0909C21.6477 52.0384 17.3438 47.8835 11.6229 47.8835C5.89134 47.8835 1.59801 52.0384 1.59801 59.0909C1.59801 66.1328 5.89134 70.2983 11.6229 70.2983C17.3438 70.2983 21.6477 66.1435 21.6477 59.0909ZM17.674 59.0909C17.674 64.0554 15.1811 66.7507 11.6229 66.7507C8.07528 66.7507 5.57173 64.0554 5.57173 59.0909C5.57173 54.1264 8.07528 51.4311 11.6229 51.4311C15.1811 51.4311 17.674 54.1264 17.674 59.0909ZM39.8304 53.6364H35.7289L31.9576 65.7919H31.7871L28.0265 53.6364H23.9142L29.7417 70H34.003L39.8304 53.6364ZM49.0803 70.3196C53.8743 70.3196 56.9212 66.9425 56.9212 61.8821C56.9212 56.8111 53.8743 53.4233 49.0803 53.4233C44.2862 53.4233 41.2393 56.8111 41.2393 61.8821C41.2393 66.9425 44.2862 70.3196 49.0803 70.3196ZM49.1016 67.2301C46.4489 67.2301 45.1491 64.8651 45.1491 61.8714C45.1491 58.8778 46.4489 56.4808 49.1016 56.4808C51.7116 56.4808 53.0114 58.8778 53.0114 61.8714C53.0114 64.8651 51.7116 67.2301 49.1016 67.2301ZM64.051 60.4119C64.051 58.0469 65.4785 56.6832 67.5133 56.6832C69.5055 56.6832 70.6987 57.9936 70.6987 60.1776V70H74.5552V59.581C74.5659 55.6605 72.3287 53.4233 68.9515 53.4233C66.5012 53.4233 64.818 54.5952 64.0723 56.4169H63.8805V53.6364H60.1944V70H64.051V60.4119ZM78.6461 70H82.5985V62.0099H86.6255L90.9082 70H95.3187L90.5993 61.3494C93.1667 60.3161 94.5197 58.1214 94.5197 55.1598C94.5197 50.9943 91.835 48.1818 86.8279 48.1818H78.6461V70ZM82.5985 58.7287V51.4844H86.2207C89.1717 51.4844 90.4927 52.8374 90.4927 55.1598C90.4927 57.4822 89.1717 58.7287 86.242 58.7287H82.5985ZM108.417 63.1179C108.417 65.6108 106.638 66.8466 104.933 66.8466C103.08 66.8466 101.844 65.5362 101.844 63.4588V53.6364H97.9874V64.0554C97.9874 67.9865 100.225 70.2131 103.442 70.2131C105.892 70.2131 107.618 68.924 108.364 67.0916H108.534V70H112.274V53.6364H108.417V63.1179ZM123.484 70.3196C127.298 70.3196 129.918 68.4553 130.6 65.6108L126.999 65.206C126.477 66.5909 125.199 67.3153 123.537 67.3153C121.044 67.3153 119.393 65.6747 119.361 62.8729H130.76V61.6903C130.76 55.9482 127.308 53.4233 123.281 53.4233C118.594 53.4233 115.536 56.8643 115.536 61.9141C115.536 67.049 118.551 70.3196 123.484 70.3196ZM119.371 60.2734C119.489 58.1854 121.033 56.4276 123.335 56.4276C125.55 56.4276 127.042 58.0469 127.063 60.2734H119.371ZM140.095 70.2876C142.907 70.2876 144.175 68.6151 144.782 67.4219H145.017V70H148.809V48.1818H144.942V56.3423H144.782C144.197 55.1598 142.993 53.4233 140.106 53.4233C136.324 53.4233 133.351 56.3849 133.351 61.8395C133.351 67.2301 136.238 70.2876 140.095 70.2876ZM141.171 67.1236C138.625 67.1236 137.282 64.8864 137.282 61.8182C137.282 58.7713 138.604 56.5874 141.171 56.5874C143.653 56.5874 145.017 58.6435 145.017 61.8182C145.017 64.9929 143.632 67.1236 141.171 67.1236ZM160.163 70.3196C163.977 70.3196 166.598 68.4553 167.28 65.6108L163.679 65.206C163.157 66.5909 161.879 67.3153 160.217 67.3153C157.724 67.3153 156.072 65.6747 156.04 62.8729H167.44V61.6903C167.44 55.9482 163.988 53.4233 159.961 53.4233C155.273 53.4233 152.216 56.8643 152.216 61.9141C152.216 67.049 155.231 70.3196 160.163 70.3196ZM156.051 60.2734C156.168 58.1854 157.713 56.4276 160.014 56.4276C162.23 56.4276 163.722 58.0469 163.743 60.2734H156.051ZM174.559 60.4119C174.559 58.0469 175.986 56.6832 178.021 56.6832C180.013 56.6832 181.206 57.9936 181.206 60.1776V70H185.063V59.581C185.074 55.6605 182.836 53.4233 179.459 53.4233C177.009 53.4233 175.326 54.5952 174.58 56.4169H174.388V53.6364H170.702V70H174.559V60.4119Z"
                            fill="white"
                        />
                        <path
                            d="M69 17.0551C69.0331 25.2688 75.7248 32 83.9453 32C92.1861 32 98.8902 25.2959 98.8902 17.0551V14.9453C98.8902 11.5521 101.651 8.79118 105.044 8.79118C108.438 8.79118 111.199 11.5521 111.199 14.9453C111.199 15.9163 111.986 16.7037 112.957 16.7037H118.232C119.203 16.7037 119.99 15.9163 119.99 14.9453C119.99 6.70457 113.286 0 105.045 0C96.8041 0 90.0995 6.70457 90.0995 14.9453V17.0551C90.0995 20.4489 87.3386 23.2088 83.9458 23.2088C80.5526 23.2088 77.7917 20.4489 77.7917 17.0551C77.7917 16.0842 77.0043 15.2968 76.0333 15.2968H70.7583C69.7874 15.2973 69 16.0842 69 17.0551Z"
                            fill="white"
                        />
                    </svg>
                    <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                        <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                            Login to your account
                        </p>
                        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                            Dont have account?{" "}
                            <Link to='/signup' tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                {" "}
                                Sign up here
                            </Link>
                        </p>
                        <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                            <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                                <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                                <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                                <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                            </svg>
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                        </button>
                       
                      
                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                            <hr className="w-full bg-gray-400  " />
                        </div>
                        <form onSubmit={handaleLogin}>
                            <div>
                                <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                                <input aria-label="enter email adress" name='email' required role="input" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            </div>
                            <div className="mt-6  w-full">
                                <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                                <div className="relative flex items-center justify-center">
                                    <input aria-label="enter Password" name='password' required role="input" type="password" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">

                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button type='submit' role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                    Log In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;