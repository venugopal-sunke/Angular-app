import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { SPINNERMESSAGE } from '../app.constants';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(
    private spinnerService: SpinnerService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = 'Message from Application';
    const spinnerRef=this.spinnerService.start(SPINNERMESSAGE.message);
    return next.handle(request.clone({
      setHeaders : {
        Authorization: token,
      }
    })).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.status === 404) {
          errorMsg = 'Server is down. Please try after some time.';
          this.spinnerService.openSnackBar(errorMsg, 'center', 'top');
        }else if(error.status === 500 && error.error.message === 'Bad credentials'){
          errorMsg =  ` ${error.error.message}`;
          this.spinnerService.openSnackBar(errorMsg, 'center', 'top')
        } 
        else {
          errorMsg =  ` ${error.error.message}`;
          this.spinnerService.openSnackBar(errorMsg, 'center', 'top');
        }
        
        throw new Error(errorMsg)
      }),
      finalize(()=>{
        this.spinnerService.stop(spinnerRef);
      })
    );
  }
}
