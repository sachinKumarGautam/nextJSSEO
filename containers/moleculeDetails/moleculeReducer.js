import initialState from './moleculeModal'

import {
  GET_MOLECULE_SUMMARY_LOADING,
  GET_MOLECULE_SUMMARY_SUCCESS,
  GET_MOLECULE_SUMMARY_FAILURE
} from './moleculeActionTypes'

export default function moleculeReducer (state = initialState, action) {
  switch (action.type) {
    case GET_MOLECULE_SUMMARY_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case GET_MOLECULE_SUMMARY_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          id: action.id,
          name: action.name,
          description: action.description,
          side_effects: action.side_effects,
          advice: action.advice,
          restrictions: action.restrictions,
          classification: action.classification,
          diseases: action.diseases,
          consumption_per_day: action.consumption_per_day,
          refill_index: action.refill_index,
          molecule_types: action.molecule_types,
          is_full_course: action.is_full_course,
          is_tele_consult: action.is_tele_consult,
          max_order_quantity: action.max_order_quantity,
          bulk_order_quantity: action.bulk_order_quantity,
          uses: action.uses,
          how_it_works: action.how_it_works,
          precautions: action.precautions,
          habit_forming: action.habit_forming,
          cold_storage: action.cold_storage
        },
        isLoading: action.isLoading
      }

    case GET_MOLECULE_SUMMARY_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    default:
      return state
  }
}
