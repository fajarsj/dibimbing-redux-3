# Tugas Redux (Dibimbing)

##### **Petunjuk: Harap Baca dengan Seksama!**

Tugas ini dapat dikerjakan menggunakan Redux Klasik (Rekomendasi) atau Redux Toolkit

#### Extras

- [redux devtools](https://github.com/reduxjs/redux-devtools)
- combine reducers

#### Koneksikan React.js dengan Redux

Hubungkan React.js dengan Redux menggunakan [react-redux](https://react-redux.js.org/)

#### Setup Store

- Buat store.js

```js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

#### Setup Provider

- index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import store and provider
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

#### Setup Cart Slice

- Buat features folder/cart
- Buat cartSlice.js
- Sesuaikan store.js

#### Redux DevTools

- [Ekstensi Google Chrome](https://chromewebstore.google.com/detail/lmhkpmbekcpmknklioeibfkpmmfibljd)

#### Akses Store

- Contoh mengambil data dari Store di components/Navbar.js

```js
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart)

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
```

#### Setup Cart

- cartSlice.js

```js
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
}
```

- Sesuaikan CartContainer.js and CartItem.js.

#### Buat Reducer

- Contoh Reducer di cartSlice.js

```js
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const { clearCart } = cartSlice.actions
```

#### Buat Action

- Contoh Action

```js
const ACTION_TYPE = 'cart/clear'

const actionCreator = (payload) => {
  return { type: ACTION_TYPE, payload: payload }
}
```

#### Modal slice

- Buat features/modal/modalSlice.js
- Contoh features/modal/modalSlice.js

```js
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
    },
    closeModal: (state, action) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
```

- App.js

```js
const { isOpen } = useSelector((state) => state.modal)

return (
  <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>
)
```

#### Toggle modal

- CartContainer.js

```js
import { openModal } from '../features/modal/modalSlice'

return (
  <button
    className="btn clear-btn"
    onClick={() => {
      dispatch(openModal())
    }}
  >
    clear cart
  </button>
)
```

- Modal.js

```js
import { closeModal } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

const Modal = () => {
  const dispatch = useDispatch()

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal())
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
```

#### Kriteria Penilaian

- Setup Redux Environment
- Menerapkan Fitur Cart (Keranjang)
- Menerapkan Fitur Modal
- Kualitas Kode

#### Tata cara pengumpulan

- Pastikan semua sudah berfungsi dengan baik
- Zip seluruh folder (termasuk semua gambar yang digunakan).
- Kirimkan file .zip atau link Github melalui platform yang telah ditentukan.
