import * as React from "react"

interface Props {
  first?: boolean
  last?: boolean
  children: React.ReactNode
}

const MenuItem = ({ first = false, last = false, children }: Props) => (
  <div
    className={`${last ? "rounded-b-lg" : "border-b border-blue-50"} ${
      first ? "rounded-t-lg" : ""
    } hover:bg-primary-accent cursor-pointer p-2 text-center duration-200`}
  >
    {children}
  </div>
)

export const DropdownMenu = () => {
  return (
    <div className="from-primary-accent absolute top-16 right-0 z-50 mr-2 grid min-h-[5rem] grid-flow-row rounded-lg bg-gradient-to-tr text-white">
      <MenuItem first>About</MenuItem>
      <MenuItem last>Feedback</MenuItem>
    </div>
  )
}
