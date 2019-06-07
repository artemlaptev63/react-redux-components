import { SIGN_IN_START, SIGN_IN_ERROR, SIGN_IN_SUCCESS } from './actionTypes';
import { signInApi } from './api';
import { Dispatch } from 'redux';

export const signIn = (email: string, password: string) => async (dispatch: Dispatch) => {

  dispatch({ type: SIGN_IN_START });

  try {
    const token = await signInApi(email, password);
    dispatch({
      type: SIGN_IN_SUCCESS,
      data: {
        token
      }
    });
  } catch(err) {
    dispatch({
      type: SIGN_IN_ERROR,
      data: {
        errorText: err
      }
    });
  }
  
}