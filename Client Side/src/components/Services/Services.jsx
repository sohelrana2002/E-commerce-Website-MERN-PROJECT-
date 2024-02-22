import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaTachometerAlt } from "react-icons/fa";
import "./services.css";

const Services = () => {
  return (
    <section>
      <div className="container">
        <h1 className="heading">our services</h1>

        <div className="services__container">
          <div className="services__card">
            <span>
              <TbTruckDelivery className="services__icon" />
            </span>
            <span>Super Fast and Free Delivery</span>
          </div>
          <div className="services__card2">
            <div>
              <span>
                <FaTachometerAlt className="services__icon" />
              </span>
              <span>Non-contact Shipping</span>
            </div>
            <div>
              <span>
                <VscWorkspaceTrusted className="services__icon" />
              </span>
              <span>Money-back Guaranteed</span>
            </div>
          </div>
          <div className="services__card">
            <span>
              <RiSecurePaymentLine className="services__icon" />
            </span>
            <span>Super Secure Payment System</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
