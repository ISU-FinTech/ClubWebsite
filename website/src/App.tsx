import Home from './components/pages/home'
import Projects from './components/pages/projects'
import Leadership from './components/pages/leadership'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Resources from './components/pages/resources'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([{
  path:"/",
  element: (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  ),
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/leadership',
      element: <Leadership />
    },
    {
      path: '/resources',
      element: <Resources />
    }
  ]
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
