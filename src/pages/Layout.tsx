import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <Navbar />
          </div>

        </header>
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>


    </>
  )
}

