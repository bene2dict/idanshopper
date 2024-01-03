"use client";

import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { GlobalContext } from "@/context/GlobalContext";
import PriceInfoCard from "../PriceInfoCard";

import { TbDiscount2 } from "react-icons/tb";

const SearchedModal = ({ product }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [focusVendor, setFocusVendor] = useState("jumia");
  const [discount, setDiscount] = useState(null);

  const { error } = useContext(GlobalContext);

  console.log(product);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="btn  px-5 py-3 text-white text-base font-semibold border border-secondary bg-secondary rounded-lg mt-8"
        onClick={openModal}
      >
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          onClose={closeModal}
          className="dialog-container fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60"
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            />

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog-content p-6  bg-white inline-block w-full max-w-[70vw] my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl">
                <div className="top-tab bg-slate-100 w-1/3 p-1 mx-auto flex flex-row justify-center items-center rounded-3xl text-center font-bold">
                  <span className="bg-primary shadow-sm rounded-3xl text-white p-2 w-1/2 cursor-pointer">
                    Jumia
                  </span>
                  <span className="w-1/2 p-2 cursor-pointer">Konga</span>
                </div>

                <section className="main-searched-product">
                  <article className="jumia-product my-3">
                    <div className="searched-container flex flex-col lg:flex-row gap-3">
                      <div className="product-image flex-grow lg:max-w-[50%] max-w-full py-16 border border-[#CDDBFF] rounded-[17px]">
                        <Image
                          src={product.image || "/assets/images/hero-1.svg"}
                          alt={product.title || "title"}
                          width={580}
                          height={400}
                          className="mx-auto"
                        />
                      </div>

                      <div className="description-container lg:max-w-[50%] flex flex-col gap-5 m-0">
                        <div className="flex flex-col gap-5">
                          <h1 className="text-4xl font-semibold">
                            Sony PlayStation 5 Console - Standard Edition
                          </h1>

                          <span className="text-md font-normal text-primary-green">
                            Brand
                          </span>

                          <div className="price-amount text-3xl font-semibold flex flex-row justify-between items-center border-t-2 border-b-2 py-6">
                            <div className="price flex flex-col ">
                              <h3 className="text-sm text-primary">PRICE</h3>
                              <span className="flex flex-row">
                                <p className=" m-0">$ </p>
                                <p>5000</p>
                              </span>

                              <p className="text-[16px] opacity-50 line-through">
                                8000
                              </p>
                            </div>

                            <div className="seller-name flex flex-col justify-end text-left  -ml-20 font-normal">
                              <p className="text-sm text-primary-orange font-medium m-0">
                                {" "}
                                Seller Name
                              </p>
                              <p className="text-xl text-gray-900 font-medium m-0">
                                Onyx Shop Ltd
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="description">
                          <h1 className="text-2xl font-semibold">
                            Website Tips
                          </h1>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolor, sit. Mollitia, libero temporibus
                            assumenda nostrum error minus architecto magni
                            voluptas odit voluptatem. Vitae consequuntur nam
                            neque non at commodi repellat dolore necessitatibus,
                            a accusantium magnam tempora, laborum maiores
                            facere? Est.
                          </span>
                        </div>

                        <div className="price-change-container flex flex-col gap-5">
                          <div className="flex gap-5 flex-wrap">
                            {["Current price", "Old price", "Discount(%)"].map(
                              (x, index) => (
                                <PriceInfoCard
                                  key={index}
                                  index={index}
                                  iconSrc="/assets/icons/price-tag.svg"
                                  value={500}
                                  title={x}
                                />
                              )
                            )}
                          </div>
                        </div>

                        <div className="track-button">
                          <button
                            type="submit"
                            className="searchbar-btn w-full bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Track
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </section>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchedModal;
