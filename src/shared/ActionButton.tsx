import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode
    setSelectedPage?: (value: SelectedPage) => void
    active?: boolean
}

const ActionButton = ({ children, active, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className='rounded-full bg-primary-100 text-white px-6 py-4 hover:outline hover:cursor-pointer hover:outline-1 hover:bg-white hover:text-primary-100'
        // onClick={() =>active && setSelectedPage(SelectedPage.Home)}
        // href={`#${active && SelectedPage.Home}`}
    >
        {
            children
        }
    </AnchorLink>
  )
}

export default ActionButton 