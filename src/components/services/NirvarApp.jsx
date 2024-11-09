import React from "react";
import { Link } from "react-router-dom";

function NirvarApp() {
  return (
    <>
     <section>
  <div className="container mx-auto px-4 py-16">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-12 justify-between">
      <div className="lg:w-[60%] w-full">
        <h2 className="text-[#80c3d0] text-3xl font-semibold">
          Nirvar: Your All-in-One Medical App
          By combining the power of technology, user-centric design, and a commitment to data security, Nirvar is reshaping the healthcare landscape, making life easier for patients and healthcare providers alike.
        </h2>
        <div className="mt-8 lg:mt-16">
          <p className="text-[#70838b] text-base font-medium">
            With their innovative solutions, they are paving the way for a future where managing medical data is effortless, secure, and empowers individuals to take control of their health journeys. Nirvar continually invests in research and development to stay at the forefront of technological advancements in the healthcare industry. By collaborating with medical experts, engineers, and designers, the company ensures its solutions are continuously refined and aligned with the evolving needs of healthcare providers and patients. Nirvar is dedicated to simplifying life, securely storing medical data, and revolutionizing medical management. Through their innovative solutions, including a digital prescription platform and comprehensive medical management system, Nirvar empowers healthcare professionals to deliver efficient and personalized care while enabling patients to actively participate in their health journeys. By combining advanced technology, data security, and user-centric design, Nirvar is reshaping the healthcare landscape for the better.
          </p>
        </div>
        <div className="mt-12 lg:mt-24">
          <p className="text-gray-600">Download The App Now:</p>
          <div className="flex items-center mt-3 flex-wrap gap-4">
            <Link to="/download">
              <img
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                alt="Google Play"
                className="h-16 lg:h-20 w-48 lg:w-60"
              />
            </Link>
            <img
              src="https://img.freepik.com/premium-vector/vaccination-qr-code-vector-illustration_689336-39.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_siglip"
              alt="QR Code"
              className="h-16 lg:h-20 w-16 lg:w-28"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] w-full">
        <img
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1434119023/photo/black-man-hands-and-phone-mockup-at-the-office-for-communication-social-media-or-texting-at.jpg?s=612x612&w=0&k=20&c=U7fgZvgME6XR66lN7KwsljpArs9jWLUWn74rQynAlq4="
          alt="Nirvar App Preview"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default NirvarApp;
