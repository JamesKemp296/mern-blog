import React from "react"
import { SM_MEDIA_QUERY } from "../../utils"

// Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery"

// Components
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

interface Props {}

const Header: React.FC<Props> = () => {
  const isSmallScreen = useMediaQuery(SM_MEDIA_QUERY)

  return (
    <>
      {isSmallScreen ? (
        <MobileHeader currentUser={true} />
      ) : (
        <DesktopHeader currentUser={true} />
      )}
    </>
  )
}

export default Header
