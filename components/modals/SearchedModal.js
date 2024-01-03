"use client";

import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { GlobalContext } from "@/context/GlobalContext";

const SearchedModal = ({ product }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

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

                      <div className="description-container lg:max-w-[50%] flex flex-col gap-5">
                        <h1 className="text-2xl font-semibold">
                          Sony PlayStation 5 Console - Standard Edition
                        </h1>

                        <div className="price ">
                          <div className="price-label">
                            <span>Price</span>
                          </div>
                          <div className="price-amount flex flex-row gap-2">
                            <span>$ </span>
                            <span>5000</span>
                          </div>
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
