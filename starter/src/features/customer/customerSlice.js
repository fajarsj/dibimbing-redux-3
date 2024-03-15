const initialStateCustomer = {
  fullName: '',
  nationalId: '',
  createdAt: '',
}

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case 'customer/create':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      }
    case 'customer/updateName':
      return { ...state, fullName: action.payload.fullName }
    default:
      return { ...state }
  }
}

export const createCustomer = (fullName, nationalId) => {
  return {
    type: 'customer/create',
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  }
}

export const updateName = (fullName) => {
  return { type: 'account/updateName', payload: fullName }
}

export default customerReducer
