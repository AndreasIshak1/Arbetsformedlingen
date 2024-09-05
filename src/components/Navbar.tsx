import { DigiHeader, DigiHeaderNavigation, DigiHeaderNavigationItem } from "@digi/arbetsformedlingen-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const [isCurrentPage, setIsCurrentPage] = useState({
    home: true,
    saved: false
  })

  const handleClick = (currentPage: string) => {
    if (currentPage === "home") {
      setIsCurrentPage({
        home: true,
        saved: false
      })
    } else {
      setIsCurrentPage({
        home: false,
        saved: true
      })
    }

  }

  return (
    <DigiHeader
      afSystemName="KarriärJakten"
      afHideSystemName={false}
      afMenuButtonText="Meny"
    >
      <a slot="header-logo" aria-label="Designsystemets startsida" href="/"></a>

      <div slot="header-navigation">
        <DigiHeaderNavigation
          afCloseButtonText="Stäng"
          afCloseButtonAriaLabel="Stäng meny"
          afNavAriaLabel="Huvudmeny"
        >
          <NavLink to={"/"}><DigiHeaderNavigationItem afCurrentPage={isCurrentPage.home} onClick={() => handleClick("home")}>
            <a href="/">Hem</a>
          </DigiHeaderNavigationItem></NavLink>

          <NavLink to={"/saved"}><DigiHeaderNavigationItem afCurrentPage={isCurrentPage.saved} onClick={() => handleClick("saved")}>
            <a href="/">Sparade</a>
          </DigiHeaderNavigationItem></NavLink>

        </DigiHeaderNavigation>
      </div>
    </DigiHeader>


  )
}
