import { Fragment, useContext, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon, ExclamationIcon } from "@heroicons/react/outline"
import { Button } from "../Button"
import { modalContext } from "../../context/modalContext"

export default function SignUpPopUp() {
  const { modalIsOpen, setModalIsOpen } = useContext(modalContext)
  const [inputValue, setInputValue] = useState("")
  const [effect, setEffect] = useState(false)
  const [warning, setWarning] = useState(false)

  function handleClick() {
    if (!inputValue) {
      setEffect(true)
      setWarning(true)

      setTimeout(() => setWarning(false), 2500)
    }

    if (inputValue) {
      window.location.href = `https://dashboard.getorda.com/signup/?state=${inputValue}`
    }
  }

  function turnOffAnimation() {
    setEffect(false)
  }

  return (
    <Transition.Root show={modalIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setModalIsOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:h-full sm:p-6">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="h-7 mb-8"
                  src="/orda-blue-logo.png"
                  alt="Orda Logo"
                />
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-5xl leading-6 font-extrabold text-gray-900"
                  >
                    Sign up with Orda
                  </Dialog.Title>
                  <div className="mt-8">
                    <Dialog.Description className="text-lg text-gray-800">
                      Connect your Square account to create your mobile app with
                      Orda
                    </Dialog.Description>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <label
                  className={`${
                    effect && "animate-wiggle border-2 border-red-500"
                  } flex items-center bg-gray-200 rounded-full pl-6 ${
                    warning && "border-2 border-red-500"
                  }`}
                  onAnimationEnd={() => turnOffAnimation()}
                >
                  {warning ? (
                    <ExclamationIcon
                      className="h-6 w-6 mr-2 text-red-500"
                      aria-hidden="true"
                    />
                  ) : null}
                  <input
                    className={`${
                      warning && "placeholder-red-500"
                    } bg-gray-200 outline-none w-80 pr-6`}
                    placeholder={
                      warning
                        ? "Please enter your store URL here"
                        : "Enter your store URL here"
                    }
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button text="Connect with Square" onClick={handleClick} />
                </label>
              </div>
              <p className="text-gray-400 text-sm text-center mt-20">
                By logging in you agree to our{" "}
                <a className="text-light-blue" href="#">
                  privacy policy
                </a>
              </p>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setModalIsOpen(false)}
                >
                  <XIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
