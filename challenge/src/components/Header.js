import classes from './Header.module.css'

const Header = () => {
  const isAuth = false

  return (
    <header className={classes.header}>
      <h1>Dibimbing Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
