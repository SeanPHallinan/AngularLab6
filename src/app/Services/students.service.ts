import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/afabde6e-b256-11eb-8c49-33df5a9a6b51');

  }
}
