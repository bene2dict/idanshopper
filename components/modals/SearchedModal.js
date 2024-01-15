"use client";

import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { GlobalContext } from "@/context/GlobalContext";

import { TbDiscount2 } from "react-icons/tb";
import Tabs from "../Tab";
import Jumia from "./Jumia";
import Konga from "./Konga";

const SearchedModal = () => {
  // let [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [discount, setDiscount] = useState(null);

  const { error, product, isOpen, setIsOpen, handleTabs, activeTabs } =
    useContext(GlobalContext);

  useEffect(() => {
    console.log("Search Modal active tab: ", activeTabs);
    if (product) {
      handleTabs(product[0].linkType);
    }
  }, [activeTabs, product]);

  // console.log("active Tabs searchedModal: ", activeTabs);

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
              <div className="dialog-content p-6  bg-white inline-block w-full lg:w-[80vw]  my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl">
                <Tabs />
                <section className="main-searched-product relative transition-transform duration-500 ease-in-out transform">
                  {activeTabs === "jumia" && <Jumia product={product} />}
                  {activeTabs === "konga" && <Konga product={product} />}
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
