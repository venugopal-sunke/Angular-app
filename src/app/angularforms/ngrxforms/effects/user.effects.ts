import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpusersService } from "src/app/services/httpusers.service";
import { getUsers, setUsers } from "../actions/user.action";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class UserEffect{
    constructor(private actions: Actions, private httpUserService: HttpusersService){}
 
    fetchUsers = createEffect(
        () => this.actions.pipe(
                ofType(getUsers),
                mergeMap(
                    ()=>this.httpUserService.getAllUsersData().pipe(
                     map((data) => setUsers({users: data}))
                    )
                )
            )
        
    )
}