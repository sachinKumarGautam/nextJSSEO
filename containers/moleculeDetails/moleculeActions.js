import {
  GET_MOLECULE_SUMMARY_LOADING,
  GET_MOLECULE_SUMMARY_SUCCESS,
  GET_MOLECULE_SUMMARY_FAILURE
} from './moleculeActionTypes'

export function getMoleculeSummaryLoading (moleculeState, saltId) {
  return {
    type: GET_MOLECULE_SUMMARY_LOADING,
    moleculeState,
    isLoading: true,
    isError: false,
    error: {},
    saltId: saltId
  }
}

export function getMoleculeSummarySuccess (moleculeState, result) {
  return {
    type: GET_MOLECULE_SUMMARY_SUCCESS,
    moleculeState,
    isLoading: false,
    id: result.id,
    name: result.name,
    description: result.description,
    side_effects: result.side_effects,
    advice: result.advice,
    restrictions: result.restrictions,
    classification: result.classification,
    diseases: result.diseases,
    consumption_per_day: result.consumption_per_day,
    refill_index: result.refill_index,
    molecule_types: result.molecule_types,
    is_full_course: result.is_full_course,
    is_tele_consult: result.is_tele_consult,
    max_order_quantity: result.max_order_quantity,
    bulk_order_quantity: result.bulk_order_quantity,
    uses: result.uses,
    how_it_works: result.how_it_works,
    precautions: result.precautions,
    habit_forming: result.habit_forming,
    cold_storage: result.cold_storage
  }
}

export function getMoleculeSummaryFailure (moleculeState, error) {
  return {
    type: GET_MOLECULE_SUMMARY_FAILURE,
    moleculeState,
    isLoading: false,
    isError: true,
    error: error
  }
}
