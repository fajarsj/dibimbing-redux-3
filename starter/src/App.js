import CreateCustomer from './components/CreateCustomer'
import Customer from './components/Customer'
import AccountOperations from './components/AccountOperations'
import BalanceDisplay from './components/BalanceDisplay'

const App = () => {
  return (
    <div>
      <h1>🏦 Dibimbing Bank</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  )
}

export default App
