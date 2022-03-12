import { default as React } from "react"

interface MenuProps {
  onOptionClick: (menu: string) => void
}
interface MenuItemProps {
  onClick?: () => void
  first?: boolean
  last?: boolean
  path?: string
  children: React.ReactNode
}

const MenuItem = ({
  onClick,
  first = false,
  last = false,
  path,
  children,
}: MenuItemProps) => {
  return (
    // <Link href={path || ""}>
    <div
      onClick={onClick}
      className={`${last ? "rounded-b-lg" : "border-b border-blue-50"} ${
        first ? "rounded-t-lg" : ""
      } cursor-pointer p-2 text-center duration-200 hover:bg-primary-accent`}
    >
      {children}
    </div>
    // </Link>
  )
}

export const DropdownMenu = ({ onOptionClick }: MenuProps) => {
  const handleAboutClick = () => {
    onOptionClick("about")
  }
  return (
    <div className="absolute top-16 right-0 z-50 mr-2 grid min-h-[5rem] grid-flow-row rounded-lg bg-gradient-to-tr from-primary-accent">
      <MenuItem onClick={handleAboutClick} first>
        About
      </MenuItem>
      <MenuItem last>Feedback</MenuItem>
    </div>
  )
}
