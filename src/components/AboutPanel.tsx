export const AboutPanel = ({}) => {
  return (
    <div className="relative top-1/2 m-4 mx-auto max-h-screen -translate-y-1/2 overflow-y-scroll rounded-md bg-primary-light p-5 text-white sm:w-4/5 md:w-2/3 lg:w-1/3">
      <div className="mb-4 flex h-9 w-full text-xl font-bold">
        About{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto h-9 w-9 cursor-pointer"
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
      <div className="flex w-full">
        Minim cillum exercitation veniam duis pariatur eu ad ut. Commodo anim
        aliqua minim ad commodo sunt incididunt culpa Lorem qui Lorem. Et qui
        pariatur aliqua in ea cillum aliquip nisi sunt ex aliquip deserunt. Sunt
        enim incididunt tempor culpa Lorem dolore non do cupidatat dolor magna
        aliquip id quis. Est aliqua cupidatat cupidatat consequat dolor do
        excepteur officia aute sunt duis velit sit nostrud.
      </div>
    </div>
  )
}
