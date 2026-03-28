import { createReducer, on } from "@ngrx/store";
import { setUsers } from "../actions/user.action";

let initialState = {
    users: [] as any[]
}


export const myUserReducer = createReducer(
    initialState, on(setUsers,(state,{users})=>{
       return {...state,users}
    })
)