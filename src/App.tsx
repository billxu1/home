import { Outlet } from 'react-router-dom'
import { Header } from './stories/components/BaseComponents/header/Header'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}

export default App
