const initialState = {
  payload: {
    id: '',
    name: '',
    description: null,
    side_effects: [],
    advice: null,
    restrictions: null,
    classification: null,
    diseases: [],
    consumption_per_day: 0,
    refill_index: 0,
    molecule_types: [],
    is_full_course: null,
    is_tele_consult: null,
    max_order_quantity: 0,
    bulk_order_quantity: 0,
    uses: [],
    how_it_works: [],
    precautions: {},
    habit_forming: false,
    cold_storage: false
  },
  isLoading: false,
  errorState: {
    isError: false,
    error: {}
  }
}

export default initialState
