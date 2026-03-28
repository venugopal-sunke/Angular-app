import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, take, debounceTime, interval, from, Subscription, Subject, takeUntil, map, distinct, filter, BehaviorSubject, delay} from 'rxjs';
import { UserPipe } from '../models/datamodel';
import { headermenus } from '../mocks/menus';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpusersService } from '../services/httpusers.service';

@Component({
  selector: 'app-rxjsoperators',
  templateUrl: './rxjsoperators.component.html',
  styleUrls: ['./rxjsoperators.component.css']
})
export class RxjsoperatorsComponent implements OnInit, OnDestroy{

  constructor(
    private formBuilder: FormBuilder,
    private httpUsersService: HttpusersService,
  ){
    this.testForm = this.formBuilder.group({
      testdata: new FormControl('')
    })
  }

  testForm: FormGroup;

  //Array Observable
  studentList = ['Ram','Kiran','Hari','Ravi'];
  students$: Observable<Array<string>> = of(this.studentList);

  //String Observable
  studentName: string ="John Smith";
  studentName$: Observable<string> = of(this.studentName);

  products: Array<string>=['mouser','keypad','monitor'];
  products$: Observable<any>=from(this.products);

  //Object Observable
  personObj = {
    id: 35,
    name: 'Venugopal',
    city: 'Rajahmundry',
    salary: 10000,
    dob: new Date("05/10/1989")
  };

  personbObj$: Observable<UserPipe> = of(this.personObj);

  mysubscription: Subscription | undefined;

  pluckObs: Array<any> = [];

  ngOnInit(): void {

    // Observables are unicast and  cold observables, next methods emits the value
    const observable = new Observable((data)=>data.next(Math.random()));

    const observable1 = observable.subscribe((val)=> console.log(val));
    const observable2 = observable.subscribe((val)=> console.log(val));

    //Subjects are multicast and  hot observables, next methods emits the value
    const subject = new Subject();

    const subject1 = subject.subscribe((data)=> console.log(data,'subject1:::'));
    const subject2 = subject.subscribe((data)=> console.log(data,'subject2:::'));

    subject.next(Math.random());

    //Behavior Subject, next methods emits the value

    const bSubject = new BehaviorSubject('Testing');

    const bSubject1 = bSubject.subscribe((data)=> console.log(data,'bSubject1'));

    bSubject.next('Updated value');

    const bSubject2 = bSubject.subscribe((data)=> console.log(data,'bSubject2'));

    /*map operator rxjs*/
    this.httpUsersService.getAllUsersData().pipe(map((x:any)=>x.map((d:any)=>{
      return {
        ...d,
        id: d.id+'2',
        name: d.name+' '+'map operator'
      }
    }))).subscribe((data:any)=>{
     // console.log(data,'map operator')
    })
   /*map operator rxjs*/

   /*filter operator rxjs*/
   this.httpUsersService.getAllUsersData().pipe(map((x:any)=>x.filter((d:any)=>{     
      if(d.id > 3){
        return d;
      }
   }))).subscribe((filterData:any)=> {
    console.log(filterData,'filter operator');
   });
   /*filter operator rxjs*/

    /*of operator rxjs*/
    this.students$.subscribe((data: Array<string>)=> {
      console.log(data,'studenList');
    });

    this.studentName$.subscribe((data: string)=> {
      console.log(data,'studentName');
    });

    this.personbObj$.subscribe((data: UserPipe)=> {
      console.log(data,'personOb');
    });

    /*of operator rxjs*/

    /*Take Operator*/
    this.testForm.get('testdata')?.valueChanges.pipe(
      take(5),
      debounceTime(3000) // time lag before it emits next value
     ).subscribe((data: any)=>{
      console.log(data,'datatest');
     });
     /*Take Operator*/

     /*interval operator*/
      const sequen$=interval(1000); //interval is an observable
      this.mysubscription = sequen$.subscribe((num: any)=> {
          this.products$.subscribe((data: any)=> {
           // console.log(num +":::::::::"+ data,'asdfasd')
          })
      })
     /*interval operator*/

     /*Pluck operator It is depreceated*/
     this.httpUsersService.getAllUsersData().subscribe((data:any)=>{
      from(data).pipe(map((x:any)=>x?.address?.city)).subscribe((x:any)=>{
         this.pluckObs.push(x);
      });
     })
    /*Pluck operator It is depreceated*/

      /*Distinct operator rxjs*/
        //of([1,2,3,2,3,1,5,5,6,6,2,8,9,0]) It consider this as a single argument
       of(1,2,3,2,3,1,5,5,6,6,2,8,9,0).pipe(distinct()).subscribe((data:any)=>{
          //console.log(data,'distinct operator')
       });

       of(
        { age: 4, name: 'Foo'},
        { age: 7, name: 'Bar'},
        { age: 5, name: 'Foo'}
      ).pipe(distinct(({ name }) => name)).subscribe((data:any)=>{
        // console.log(data,'distinct operator use case');
      });
      /*Distinct operator rxjs*/

      //rxjs operator of and delay
      of([1, 2, 3, 4, 5])
      .pipe(
        map((x: any) =>
          x.map((d: any) => {
            console.log(d, 'ddddd');
            return d + 1;
          })
        ),
        delay(5000)
      )
      .subscribe((data) => console.log(data, 'ppppp'));

  }

  /*from operator rxjs*/
  roleName: string ='DEVELOPER';
  onRoleChange(){
    from(headermenus(this.roleName)).subscribe((data: any)=> {
      console.log(data,'headermenu');
    });
  }
  /*from operator rxjs*/

  ngOnDestroy(): void {
    this.mysubscription?.unsubscribe();
  }
}
