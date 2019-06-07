import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from '../actions/actionTypes';

interface ActionSignIn {
  type: string;
  data: ActionSignInData;
}

export interface ActionSignInData { 
  loading: boolean;
  error: boolean;
  errorText: string;
  token: string;
  loggedIn: boolean;
}

const initialState: ActionSignInData = {
  loading: false,
  error: false,
  errorText: '',
  token: '',
  loggedIn: false
}

export default function(state = initialState, action: ActionSignIn) {
  switch (action.type) {
    case SIGN_IN_START:
      return {
        ...state,
        loading: true
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.data.token,
        loggedIn: true
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorText: action.data.errorText
      };;
    default:
      return state;
  }
}