import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map ,tap} from 'rxjs/operators';

@Injectable()
export class Apiservice {

  constructor(@Inject('BASE_URL') private config,
  private http: HttpClient) { }

  login(username: string, password: string) :Observable<any>{
    let url = `${this.config.url}/login`;
    return this.http.get(url,{
      params:{
        username,
        password
      }
    })
  }
}
