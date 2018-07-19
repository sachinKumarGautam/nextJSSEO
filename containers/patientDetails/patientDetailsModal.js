const initialState = {
  payload: [],
  patient: {},
  isLoading: false,
  errorState: {
    isError: false,
    error: {}
  },
  patientFormDetails: {
    full_name: '',
    gender: '',
    age: 0,
    mobile: 0
  },
  addNewPatient: {
    payload: [],
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  }
}

export default initialState
