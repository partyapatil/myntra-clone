import Header from '../componets/Header'
import Footer from '../componets/Footer'
import {Outlet} from "react-router-dom"
import Women from '../componets/Women';

function App() {
const item=   {

};
const price=9000
  return (
    <>
      <Header/>
      <Outlet price={price}/>
      {/* <Women price={price}/> */}

    <Footer/>

    </>
  )
}

export default App
