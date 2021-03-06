import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import arrowIcon from "../icons/top-arrow.svg";

const Home = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Fade>
        <div className="container">
          <div className="text-container-1">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              mattis vulputate enim nulla aliquet porttitor lacus luctus
              accumsan. Eget magna fermentum iaculis eu non diam phasellus. Sit
              amet risus nullam eget felis eget nunc. Risus feugiat in ante
              metus dictum at tempor commodo. A iaculis at erat pellentesque
              adipiscing commodo elit. Nunc mi ipsum faucibus vitae aliquet nec.
              Quis risus sed vulputate odio ut enim blandit volutpat. Dictum
              fusce ut placerat orci. Malesuada fames ac turpis egestas maecenas
              pharetra convallis posuere morbi. Adipiscing bibendum est
              ultricies integer quis auctor elit sed. Dictumst vestibulum
              rhoncus est pellentesque elit ullamcorper dignissim cras. Aenean
              vel elit scelerisque mauris. Vitae tempus quam pellentesque nec
              nam aliquam. Turpis in eu mi bibendum neque egestas. Amet massa
              vitae tortor condimentum. Tristique senectus et netus et malesuada
              fames ac turpis. Tempor commodo ullamcorper a lacus vestibulum sed
              arcu non. Massa id neque aliquam vestibulum morbi blandit cursus
              risus at. Fames ac turpis egestas integer eget aliquet nibh
              praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Amet mattis vulputate enim nulla aliquet porttitor lacus luctus
              accumsan. Eget magna fermentum iaculis eu non diam phasellus. Sit
              amet risus nullam eget felis eget nunc. Risus feugiat in ante
              metus dictum at tempor commodo. A iaculis at erat pellentesque
              adipiscing commodo elit. Nunc mi ipsum faucibus vitae aliquet nec.
              Quis risus sed vulputate odio ut enim blandit volutpat. Dictum
              fusce ut placerat orci. Malesuada fames ac turpis egestas maecenas
              pharetra convallis posuere morbi. Adipiscing bibendum est
              ultricies integer quis auctor elit sed. Dictumst vestibulum
              rhoncus est pellentesque elit ullamcorper dignissim cras. Aenean
              vel elit scelerisque mauris. Vitae tempus quam pellentesque nec
              nam aliquam. Turpis in eu mi bibendum neque egestas. Amet massa
              vitae tortor condimentum. Tristique senectus et netus et malesuada
              fames ac turpis. Tempor commodo ullamcorper a lacus vestibulum sed
              arcu non. Massa id neque aliquam vestibulum morbi blandit cursus
              risus at. Fames ac turpis egestas integer eget aliquet nibh
              praesent.
            </p>
          </div>
          <div className="top-container-img1"></div>
          <div className="text-container-1">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              mattis vulputate enim nulla aliquet porttitor lacus luctus
              accumsan. Eget magna fermentum iaculis eu non diam phasellus. Sit
              amet risus nullam eget felis eget nunc. Risus feugiat in ante
              metus dictum at tempor commodo. A iaculis at erat pellentesque
              adipiscing commodo elit. Nunc mi ipsum faucibus vitae aliquet nec.
              Quis risus sed vulputate odio ut enim blandit volutpat. Dictum
              fusce ut placerat orci. Malesuada fames ac turpis egestas maecenas
              pharetra convallis posuere morbi. Adipiscing bibendum est
              ultricies integer quis auctor elit sed. Dictumst vestibulum
              rhoncus est pellentesque elit ullamcorper dignissim cras. Aenean
              vel elit scelerisque mauris. Vitae tempus quam pellentesque nec
              nam aliquam. Turpis in eu mi bibendum neque egestas. Amet massa
              vitae tortor condimentum. Tristique senectus et netus et malesuada
              fames ac turpis. Tempor commodo ullamcorper a lacus vestibulum sed
              arcu non. Massa id neque aliquam vestibulum morbi blandit cursus
              risus at. Fames ac turpis egestas integer eget aliquet nibh
              praesent.
            </p>
          </div>
          <div className="footer-img"></div>
          <div className="scroll-top" onClick={scrollTop}>
            <img className="arrow-icon" src={arrowIcon} alt="arrow-icon" />
            <p>Başa Dön</p>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Home;
