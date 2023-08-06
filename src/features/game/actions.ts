import axios, { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { AppDispatch } from '../../store'
import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from './actionTypes'

export const fetchQuestions = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_QUESTIONS_BEGIN })
    try {
      const { data }: AxiosResponse = await axios.get(
        'https://64c26d19eb7fd5d6ebcfd7ca.mockapi.io/questions',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: data })
      return data
    } catch (error) {
      dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: error.message })
      toast.error(error.message, { hideProgressBar: true })
    }
  }
}
