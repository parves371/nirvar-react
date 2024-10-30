import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-5 mb-4">
        <div className="bg-white rounded-full shadow-md flex-shrink-0">
          <img
            src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?ga=GA1.1.286398526.1730285537&semt=ais_siglip"
            alt="Selina Gomez"
            className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0">
          <h2 className="text-center sm:text-left text-lg sm:text-xl font-bold">Selina Gomez</h2>
          <h3 className="text-center sm:text-left font-semibold text-teal-500">User</h3>
        </div>
      </div>
      <p className="text-center sm:text-left text-gray-600 sm:w-[80%] mx-auto sm:mx-0 mt-4">
        Since I started using Nirvar, my healthcare experience has been
        transformed. Gone are the days of struggling to schedule doctor
        appointments and forgetting important medical details. With Nirvar, I
        can easily book appointments with just a few taps on my phone, and all
        my medical history is right at my fingertips. It's like having a
        personal assistant dedicated to my health. I highly recommend Nirvar to
        anyone looking for a convenient and efficient way to manage their
        healthcare needs.
      </p>
    </div>
  );
};

export default TestimonialCard;
