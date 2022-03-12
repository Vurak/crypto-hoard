import { Transition } from "@headlessui/react"
import React, { ReactNode } from "react"

interface Props {
  title: string
  children: ReactNode
  active: boolean
  setActive: React.Dispatch<boolean>
}

export const InfoModal = ({ title, active, setActive, children }: Props) => {
  return (
    <Transition
      show={active}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0">
        <div className="fixed inset-0 bg-black opacity-50" />
        <div className="fixed right-0 h-full w-full p-4 shadow-lg">
          <div className="relative top-1/2 m-4 mx-auto max-h-screen -translate-y-1/2 overflow-y-auto rounded-md bg-primary-light p-5 text-white sm:w-4/5 md:w-2/3 lg:w-1/3">
            <div className="mb-4 flex h-9 w-full text-xl font-bold">
              {title}
              <svg
                onClick={() => setActive(false)}
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto h-9 w-9 cursor-pointer duration-150 hover:text-primary-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex w-full flex-col">{children}</div>
          </div>
        </div>
      </div>
    </Transition>
  )
}
