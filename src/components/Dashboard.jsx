import NavBar from "./Navbar"
import { AppWrapper, UserDetail, UserTitle } from "../styles/App"
import CardBox from "./CardBox"
import Balance from "./Balance"
import { Typography } from "@mui/material"
import Footer from "./Footer"

function Dashboard() {
  return (
    <AppWrapper>
      <NavBar />
      <UserDetail>
        Hello, <UserTitle>UserName</UserTitle>
      </UserDetail>
      <Balance />
      <CardBox />
      <Footer />
    </AppWrapper>
  )
}

export default Dashboard
