import Nav from "./components/Nav.jsx"


import './App.css'
import MAdhkar from "./components/MAdhkar.jsx"
import EAdhkar from "./components/EAdhkar.jsx"

function App() {
    let component
    switch (window.location.pathname){
        case "/":
        component = <MAdhkar/>
        break
        case "/evening":
        component = <EAdhkar/>
        break
    }
    return (
        <>
            <Nav/>
            {component}
        </>
    )
  }
export default App
