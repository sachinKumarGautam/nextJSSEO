const initialState = {
  payload: [],
  isEdit: false,
  patient: {
    full_name: '',
    gender: '',
    age: '',
    mobile: ''
  },
  isLoading: false,
  errorState: {
    isError: false,
    error: {}
  },
  patientFormDetails: {
    full_name: '',
    gender: '',
    age: '',
    mobile: ''
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
