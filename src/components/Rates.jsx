import React from "react";
import { Parallax } from "react-parallax";
import { CheckCircleIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Footer from "./Footer";

const img1 = `${process.env.PUBLIC_URL + "/assets/images/hero10.jpg"}`;
const Rates = () => {
  return (
    <div>
    <Parallax
      className="lg:h-250 lg:mt-10 lg:w-full h-600 text-left lg:object-cover object-cover bg-gray-100 w-full filter "
      bgImage={img1}
    >
      <div id="rates" className="pb-8 ">
        <h3 className="lg:pt-10  pt-4 text-2xl lg:tracking-wider text-gray-800 font-bold text-left lg:ml-12 ml-8">
          Pricing
        </h3>
        <h1 className="pt-8  lg:text-7xl text-3xl lg:tracking-wide text-gray-800 font-bold ml-4 text-left lg:ml-12 ml-8">
          Price Plans.
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-10 py-14 p-4">
        <div class="flex flex-wrap lg:h-100 h-full py-3 rounded-lg  bg-gray-100 sm:py-24 lg:py-2 pb-5 mb-20 lg:px-4 lg:mx-2 font-bold text-gray-100 lg:text-xl text-3xl relative">
          <div
            alt=""
            className="w-full object-cover rounded-lg lg:h-100 h-full object-center block filter brightness-50 absolute inset-0 bg-indigo-300"
          />
          <div class="text-left ml-4 pt-24 lg:h-100 h-full relative z-10 w-full">
            <h1 class=" text-2xl text-gray-100 font-bold title-font mb-4 ">
              Starter
            </h1>

            <h2 class=" text-2xl text-gray-100 font-bold title-font mb-4 ">
              <span className="tag lg:text-widest bg-indigo-400 m-2 p-1 text-sm rounded-lg">
                Starting at ZMW 5000.00{" "}
              </span>{" "}
            </h2>

            <div className="text-xl font-semibold">
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  3 - 5 web pages{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  UI/UX Design{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Contact links{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Domain name Registration{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Web Hosting for the 1st year{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  SSL Certificate for the 1st year{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Upto 2 Custom emails setup{" "}
                </span>{" "}
              </li>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap lg:h-100 rounded-lg h-full py-3 bg-gray-100 sm:py-24 lg:py-2 pb-5 lg:mt-0 mt-10 mb-20 lg:px-4 lg:mx-2 font-bold text-gray-100 lg:text-xl text-3xl relative">
          <div
            alt=""
            class="w-full object-cover lg:h-100 rounded-lg h-full object-center block filter brightness-50 absolute inset-0 bg-blue-400 "
          />
          <div class="text-left ml-4 pt-24 lg:h-100 h-full relative z-10 w-full">
            <h1 class=" text-2xl text-gray-100 font-bold title-font mb-4 ">
              Professional{" "}
              <span className="tag lg:text-widest bg-yellow-400 m-2 p-1 text-sm rounded-lg">
                {" "}
                Most popular
              </span>
            </h1>
            <h2 class=" text-2xl text-gray-100 font-bold title-font mb-4 ">
              <span className="tag lg:text-widest bg-indigo-400 m-2 p-1 text-sm rounded-lg">
                Starting at ZMW 8500.00{" "}
              </span>{" "}
            </h2>
            <div className="text-xl font-semibold">
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  6 - 10 web pages{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  UI/UX Design{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Contact links{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Domain name Registration{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Web Hosting for the 1st year{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  SSL Certificate for the 1st year{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Upto 5 Custom emails setup{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Social Media Integration{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Google Analytics(
                  <span className="text-green-300">optional</span>){" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  SEO Integration(
                  <span className="text-green-300">optional</span>)
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  WhatsApp Integration(
                  <span className="text-green-300">optional</span>){" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Video play Integration(
                  <span className="text-green-300">optional</span>){" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Logo Design (<span className="text-green-300">
                    optional
                  </span>){" "}
                </span>{" "}
              </li>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap lg:h-100 rounded-lg h-full py-3 sm:py-24 lg:py-2 pb-5 lg:mt-0 mt-20 mb-10 lg:px-4 lg:mx-2 font-bold text-gray-100  lg:text-xl text-3xl relative">
          <div
            alt=""
            class="w-full object-cover lg:h-100 rounded-lg h-full object-center block filter brightness-50 absolute inset-0 bg-indigo-700 "
          />
          <div class="text-left ml-4 pt-24 lg:h-100 h-full relative z-10 w-full">
            <h1 class=" text-2xl text-gray-100 font-bold title-font mb-4 ">
              Enterprise
            </h1>
            <h2 class=" text-2xl text-gray-100 font-bold title-font mb-4 ">
              <span className="tag lg:text-widest bg-indigo-400 m-2 p-1 text-sm rounded-lg">
                Starting at ZMW 30000.00{" "}
              </span>{" "}
            </h2>
            <div className="text-xl font-semibold">
              <li>
                {" "}
                <span className="tag lg:text-widest text-green-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  * Ideal for larger projects like an e-commerce platform or
                  company software*{" "}
                </span>{" "}
              </li>

              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  UI/UX Design{" "}
                </span>{" "}
              </li>

              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Front-end development{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Back-end development{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Database development{" "}
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="tag lg:text-widest bg-white-300 m-2 p-1 text-sm rounded-lg">
                  {" "}
                  Custom Landing page (
                  <span className="text-green-300">optional</span>){" "}
                </span>{" "}
              </li>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
        <Footer/>
    </div>
  );
};

export default Rates;
