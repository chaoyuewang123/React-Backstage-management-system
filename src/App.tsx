import { useState, useEffect } from 'react'
import { message } from 'antd';
import { useRoutes, useLocation, useNavigate } from "react-router-dom"
import router from './router';

function Tologin() {
  const Navigate = useNavigate()
  useEffect(() => {
    Navigate('/login')
    message.warning('Please login first')
  }, [])
  return <div></div>
}

function ToPage1() {
  const Navigate = useNavigate()
  useEffect(() => {
    Navigate('/page1')
    message.warning('You alreadu Login')
  }, [])
  return <div></div>
}


function BeforeRouterEnter() {
  const outlet = useRoutes(router)
  const location = useLocation()
  let token = localStorage.getItem("react-backstage-managemnet-token")
  if (location.pathname === '/login' && token) {
    return <ToPage1 />
  }
  if (location.pathname !== '/login' && !token) {
    return <Tologin />
  }

  return outlet
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/*       <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/user'}>User</Link> */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
