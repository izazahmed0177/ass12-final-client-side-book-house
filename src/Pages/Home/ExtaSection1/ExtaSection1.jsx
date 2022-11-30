import React from 'react';
import img3 from '../../../assets/images/banner/13.jpg';

const ExtaSection1 = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img3} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">New Book!</h1>
      <p className="py-6">Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    );
};

export default ExtaSection1;