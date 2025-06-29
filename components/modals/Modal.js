"use client";

import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { GlobalContext } from "@/context/GlobalContext";
import { toast } from "react-toastify";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const { product } = useContext(GlobalContext);

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const doNothing = () => {
    console.log("nothing");
  };

  console.log(email);

  const handleTrack = async (e) => {
    e.preventDefault();

    if (!email || email === "") {
      alert("Cannot send undefined");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, product }),
      });

      console.log(response);

      if (!response.ok) {
        toast.error("Failed to send tracking request. Please try again.");
        setIsSubmitting(false);
        return;
      }

      toast.success("Product tracking request sent successfully!");
      setIsSubmitting(false);
      setIsOpen(false);
    } catch (error) {
      console.log("Error", error);
      setIsSubmitting(false);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn w-1/2  px-5 py-3 cursor-pointer text-white text-base font-semibold border border-secondary bg-secondary rounded-lg mt-8"
        onClick={openModal}
      >
        Track Product
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
              <div className="dialog-content p-6  bg-white inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="p-3 border border-gray-200 rounded-10">
                      <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        width={28}
                        height={28}
                      />
                    </div>

                    <Image
                      src="/assets/icons/x-close.svg"
                      alt="close"
                      width={24}
                      height={24}
                      className="cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>

                  <h4 className="dialog-head_text text-secondary text-lg leading-[24px] font-semibold mt-4">
                    Stay updated with product pricing alerts right in your
                    inbox!
                  </h4>

                  <p className="text-sm text-gray-600 mt-2">
                    Never miss a bargain again with our timely alerts!
                  </p>
                </div>

                <form className="flex flex-col mt-5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="dialog-input_container px-5 py-3 mt-3 flex items-center gap-2 border border-gray-300 rounded-[27px]">
                    <Image
                      src="/assets/icons/mail.svg"
                      alt="mail"
                      width={18}
                      height={18}
                    />

                    <input
                      required
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="dialog-input flex-1 pl-1 border-none text-gray-500 text-base focus:outline-none border border-gray-300 rounded-[27px] shadow-xs"
                    />
                  </div>

                  <div
                    // type="submit"
                    className="dialog-btn cursor-pointer px-5 py-3 text-center text-white text-base font-semibold border border-secondary bg-secondary rounded-lg mt-8"
                    onClick={handleTrack}
                  >
                    {isSubmitting ? "Submitting..." : "Track"}
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
