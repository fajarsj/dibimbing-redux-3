import classes from './Counter.module.css'

const Counter = () => {
  const counter = 0
  const show = true

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button>Increment</button>
        <button>Increase by 10</button>
        <button>Decrement</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  )
}

export default Counter
