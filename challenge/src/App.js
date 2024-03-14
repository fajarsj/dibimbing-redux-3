import { Fragment } from 'react'

import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'

const App = () => {
  const isAuth = false

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  )
}

export default App
