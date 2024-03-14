import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'

const App = () => {
  const isOpen = false

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
