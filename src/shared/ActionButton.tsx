import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className='rounded-full bg-primary-100 text-white px-6 py-4 hover:outline hover:outline-1 hover:bg-transparent hover:text-white'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
    >
        {
            children
        }
    </AnchorLink>
  )
}

export default ActionButton 