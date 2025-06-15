import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="container p-5 text-center mb-5">
        <div className="row">
          <img
            src="media/images/homeHero.png"
            alt="heroImage"
            className="mb-5"
          />
          <h1 className="mt-5 ">Invest in everything</h1>
          <p className="fs-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            type="button"
            class="btn btn-primary fs-5 p-2 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup for free
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
