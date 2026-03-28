import { AbstractControl } from "@angular/forms"

export const passwordMatch = (password: string, confirm_password: string)=>{
     return (form: AbstractControl)=>{
        let passwordVal = form.get('password')?.value;
        let confirmPasswordVal = form.get('confirm_password')?.value;

        if(passwordVal === confirmPasswordVal){
            return null;
        } 

        return { passWordMismatch:true }
     }
}