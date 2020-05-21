import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainSerivesService {

  http: any;

  constructor(private htpp: HttpClient) { }



  private _URL:string='http://localhost:4300/production';

  getProductionDetails(): Observable<any>{
     return this.htpp.get<any>(this._URL)
  }

  private _URL1:string='http://localhost:1233/employe';

  getcreateDetails(): Observable<any>{
     return this.htpp.get<any>(this._URL1)
  }







  checkusernameandpassword(uname: string, pwd : string)
        {
        if(uname == "ravi" && pwd =="ravi123"){
          localStorage.setItem('username',"ravi");
          return true;
        } else{
          return false;
        }
}









   patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateUserName(userName: string) {
    const UserList = ['ankit', 'admin', 'user', 'superuser'];
    return (UserList.indexOf(userName) > -1);
  }




}
