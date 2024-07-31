import React from "react";
import Saumya from "../assets/testimonial1.png";
import Laxman from "../assets/testimonial2.png";
import Sumit from "../assets/testimonial3.png";
import "../Styles/Clientfeedback.css";
import Google from "../assets/Google.png";

const ClientFeedback = () => {
  return (
    <div className="m-5 md:mt-10">
      <div className="flex justify-center items-center">
        <h1 className="client font-semibold text-[23px] md:text-4xl">
          What our client says <span>&mdash;&mdash;</span>
        </h1>
      </div>

      <div className="flex-col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:ml-8 lg:ml-14 xl:ml-20 lg:gap-4 items-center sm:flex-row flex-wrap justify-center 2xl:flex  mt-10 md:justify-around">
        {/* first card */}

        <a href="https://rb.gy/3mdetl">
          <div className="card-client bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6 sm:mb-0 sm:mr-4">
            <div className="flex justify-between mb-4">
              <img
                src={Saumya}
                alt="Saumya"
                className="rounded-full h-16 w-16 -mt-12 ml-3 border border-black"
              />
              <div className="flex justify-around">
                <img src={Google} alt="Google Image" className="h-6" />
                <a
                  className="text-blue-600 hover:text-blue-800 font-medium tracking-wide ml-2"
                  href="https://g.co/kgs/Yn61ZEz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google
                </a>
              </div>
            </div>
            <p className="leading-tight font-normal">
              After three years of back and joint pain, my mother finally found
              relief with Dr. DS Dubey's treatment. Now she's fully recovered.
              Highly recommend his clinic!
            </p>

            <hr className="mt-5 border-black" />

            <div className="flex justify-between mt-2">
              <h3 className="text-lg font-semibold tracking-wide">Saumya</h3>
              <div className="flex items-center">
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
              </div>
            </div>
          </div>
        </a>

        {/* second card */}

        <a href="https://rb.gy/3mdetl">
          <div className="card-client bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6 sm:mb-0 sm:mr-4">
            <div className="flex justify-between mb-4">
              <img
                src={Laxman}
                alt="Laxman Mate"
                className="rounded-full h-16 w-16 -mt-12 ml-3 mr-4 border border-black"
              />
              <div className="flex justify-around -ml-10">
                <img src={Google} alt="Google Image" className="h-6" />
                <a
                  className="text-blue-600 hover:text-blue-800 font-medium tracking-wide ml-2"
                  href="https://g.co/kgs/WFMvSHD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google
                </a>
              </div>
            </div>
            <p className="leading-tight font-normal">
              Best treatment for back pain by chiropractic Dr. DS Dubey I had a
              speedy recoveryat spine joints and arthritis care centre.The
              customer service was great and the staff provide ...
            </p>

            <hr className="mt-5 border-black" />

            <div className="flex justify-between mt-2">
              <h3 className="text-lg font-semibold tracking-wide">
                Laxman Mate
              </h3>
              <div className="flex items-center">
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
              </div>
            </div>
          </div>
        </a>

        {/* third card */}
        <a href="https://rb.gy/3mdetl">
          <div className="card-client md:ml-[10rem] lg:ml-0 bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6 sm:mb-0">
            <div className="flex justify-between mb-4">
              <img
                src={Sumit}
                alt="Sumit Dubey"
                className="rounded-full h-16 w-16 -mt-12 ml-3 mr-4 border border-black"
              />
              <div className="flex justify-around -ml-10">
                <img src={Google} alt="Google Image" className="h-6" />
                <a
                  className="text-blue-600 hover:text-blue-800 font-medium tracking-wide ml-2"
                  href="https://maps.app.goo.gl/xUJykTg44rbFYkwT8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google
                </a>
              </div>
            </div>
            <p className="leading-tight font-normal">
              Excellent treatment by Dr. D.S. Dubey and his team. Very effective
              for back pain in Bhayandar.
            </p>

            <hr className="mt-5 border-black" />

            <div className="flex justify-between mt-2">
              <h3 className="text-lg font-semibold tracking-wide">
                Sumit Dubey
              </h3>
              <div className="flex items-center">
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ClientFeedback;
