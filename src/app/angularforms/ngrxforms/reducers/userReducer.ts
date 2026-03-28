import { createReducer, on } from '@ngrx/store';
import { updateEmail, updateMobile, updateName } from '../actions/actionCreater';

let initialState = {
    name: "",
    email: "",
    mobile: ""
}

export const userReducer = createReducer(initialState,
      on(updateName,(state,data) => ({ ...state, name: data.name})),
      on(updateEmail,(state,data) => ({ ...state, email: data.email})),
      on(updateMobile,(state,data) => ({ ...state, mobile: data.mobile}))
)