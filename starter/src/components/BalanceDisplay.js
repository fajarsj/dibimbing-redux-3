const formatCurrency = (value) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'IDR',
  }).format(value)
}

const BalanceDisplay = () => {
  return <div className="balance">{formatCurrency(123456)}</div>
}

export default BalanceDisplay
