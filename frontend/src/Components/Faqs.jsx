import React from 'react';
import leftArrow from '../Assets/leftArrow.png'; 
import rightArrow from '../Assets/rightArrow.png'; 

const Faqs = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-4 ">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
  <div className="mb-4 md:mb-0 text-center md:text-left">
    <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
    <p className="text-gray-600 w-4/6 mx-auto md:mx-0">
      Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
    </p>
  </div>
  <button className="bg-white border border-gray-800 rounded-lg hover:bg-primary hover:text-white cursor-pointer px-4 py-2 w-64">
    View All FAQ’s
  </button>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-800 rounded-lg p-6 ">
          <h4 className="text-lg font-semibold mb-2">How do I search for properties on HOMI?</h4>
          <p className="text-gray-600 mb-4 ">
            Learn how to use our user-friendly search tools to find properties that match your criteria.
          </p>
          <button className="bg-white border border-gray-800 rounded-lg hover:bg-primary hover:text-white px-4 py-2">
            Read More
          </button>
        </div>
        <div className="border border-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2">What documents do I need to sell my property through HOMI?</h4>
          <p className="text-gray-600 mb-4">
            Find out about the necessary documentation for listing your property with us.
          </p>
          <button className="bg-white border border-gray-800 rounded-lg hover:bg-primary hover:text-white px-4 py-2">
            Read More
          </button>
        </div>
        <div className="border border-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2">How can I contact an Landlord?</h4>
          <p className="text-gray-600 mb-4">
            Discover the different ways you can get in touch with our experienced agents.
          </p>
          <button className="bg-white border border-gray-800 rounded-lg hover:bg-primary hover:text-white px-4 py-2">
            Read More
          </button>
        </div>
      </div>
      <hr className="border border-gray-700 mb-4" />
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{`${currentPage} of 10`}</p>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="bg-white border border-gray-800 rounded-full hover:bg-primary hover:text-white p-2"
          >
            <img src={leftArrow} alt="Previous" className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white border border-gray-800 rounded-full hover:bg-primary hover:text-white p-2"
          >
            <img src={rightArrow} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;