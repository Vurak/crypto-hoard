import { useState } from "react"
import { useLocation } from "wouter"
import "./App.css"
import Wouter from "./Wouter"
import { DropdownMenu } from "./components/home/DropdownMenu"
import { Transition } from "@headlessui/react"
import { InfoModal } from "./components"

function App() {
  const [location, setLocation] = useLocation()
  const [menuActive, setMenuActive] = useState(false)
  const [aboutAcitve, setAboutActive] = useState(false)
  const [feedbackActive, setFeedbackActive] = useState(false)

  const handleMenuClick = () => {
    setMenuActive(c => !c)
  }

  const handleDocumentClick = () => {
    if (menuActive) setMenuActive(false)
  }

  const handleMenuClicks = (menu: string) => {
    switch (menu) {
      case "about":
        setAboutActive(true)
        setFeedbackActive(false)
        break
      case "feedback":
        setAboutActive(false)
        setFeedbackActive(true)
        break
      default:
        break
    }
  }

  return (
    <>
      <div
        onClick={handleDocumentClick}
        className="min-h-screen w-full bg-primary-dark font-primary font-bold text-white"
      >
        <div className="pointer-events-none fixed z-30 hidden h-0 w-full items-center md:block md:h-16 ">
          <div
            onClick={() => setLocation("/")}
            className="pointer-events-auto absolute top-0 left-0 m-2 flex h-12 cursor-pointer rounded-xl bg-gradient-to-tr from-primary-accent text-white"
          >
            <div className="m-auto mx-3 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={handleMenuClick}
            className="pointer-events-auto absolute top-0 right-0 z-50 m-2 flex h-12 cursor-pointer rounded-xl bg-gradient-to-tr from-primary-accent"
          >
            <div className="m-auto mx-3 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <Transition
            show={menuActive}
            enter="transition-opacity duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="pointer-events-auto"
          >
            <DropdownMenu onOptionClick={handleMenuClicks} />
          </Transition>
        </div>
        <div className="relative flex min-h-screen w-full">
          <Wouter />
        </div>
      </div>

      <InfoModal title="About" active={aboutAcitve} setActive={setAboutActive}>
        <p>
          Crypto Hoards is a Solana Web3 enabled web app that can connect to
          your solana wallet and display your media NFTs.
        </p>
        <p className="pt-2">
          Developed by Surak, code available on{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/Vurak/crypto-hoards"
          >
            GitHub
          </a>
          .
        </p>
      </InfoModal>
      <InfoModal
        title="Feedback"
        active={feedbackActive}
        setActive={setFeedbackActive}
      >
        <p>
          If you encounter any issues or would like to see features added, feel
          free to create a new issue for it{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/Vurak/crypto-hoards/issues"
          >
            here
          </a>
          .
        </p>
      </InfoModal>
    </>
  )
}

export default App
