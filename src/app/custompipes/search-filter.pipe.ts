import { Pipe, PipeTransform } from '@angular/core';
import { userInfo } from '../models/datamodel';

@Pipe({
    name: 'searchFilter',
    standalone: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Array<userInfo>, searchName: string) {
    if(searchName == ""){
       return value;
    }else{
      // return value.filter((userData)=>{
      //   return  userData.name.toLowerCase().includes(searchName.toLowerCase()) ||
      //           userData.username.toLowerCase().includes(searchName.toLowerCase()) ||
      //           userData.email.toLowerCase().includes(searchName.toLowerCase()) ||
      //           userData.website.toLowerCase().includes(searchName.toLowerCase()) || 
      //           userData.company.name.toLowerCase().includes(searchName.toLowerCase());
      // });

      let searchlist = `${searchName}`.split(' ');
    
        return value.filter((filteredObj: any)=>{
        return searchlist.every((skey: any)=>{
          return `${JSON.stringify(filteredObj)}`.toLowerCase().includes(`${skey}`.toLowerCase());
          })
        })
    }
    return null;
  }

}
