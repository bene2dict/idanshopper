"use client";

import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { GlobalContext } from "@/context/GlobalContext";

const ErrorModal = () => {
  const [error, setError] = useState([]);

  const { isOpen, setIsOpen } = useContext(GlobalContext);

  const closeModal = () => setIsOpen(false);

  return (
    <>
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
              <div className="dialog-content p-6  bg-white inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl  border-2 border-primary ">
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <div className="p-3 border border-gray-200 rounded-10">
                      <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        width={28}
                        height={28}
                      />
                    </div>

                    <h1 className="text-primary font-bold text-xl">
                      Oops Error !
                    </h1>

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
                    It appears you entered an invalid link, please enter a valid
                    link. <br />
                  </h4>

                  <p className="text-sm text-primary mt-2">
                    A valid link is a link copied from Jumia or Konga
                  </p>

                  <span className="text-sm text-secondary p-2 bg-slate-100">
                    https://www.jumia.com.ng/sony-playstation-5-console-standard-edition-257094579.html
                  </span>

                  <span className="w-full flex flex-row gap-3 items-center text-sm">
                    <hr className="w-full h-2" />
                    OR
                    <hr className="w-full h-2" />
                  </span>

                  <span className="text-sm text-secondary p-2 bg-slate-100">
                    https://www.konga.com/product/sony-playstation-5-digital-edition-5842154{" "}
                  </span>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ErrorModal;
