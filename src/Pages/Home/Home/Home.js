import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import BookCategories from '../BookCategories/BookCategories';
import ExtaSection1 from '../ExtaSection1/ExtaSection1';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <AdvertisedItems></AdvertisedItems>
            {/* <h1>home11</h1> */}

            <BookCategories></BookCategories>
            <ExtaSection1></ExtaSection1>
        </div>
    );
};

export default Home;