import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../domain/users/user.model";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService{

  apiConsultUserUrl = 'http://localhost:8080/api/user/consult';
  apiConsultByIdUserUrl = 'http://localhost:8080/api/user/consult/{id}';
  apiDeleteUserUrl = 'http://localhost:8080/api/user/delete';
  apiCreateUserUrl = 'http://localhost:8080/api/user/create';
  apiUpdateUserUrl = 'http://localhost:8080/api/user/update';

  constructor(private httpCliente: HttpClient) {
  }

  getAllUser(): Observable<UserModel[]>{
    return this.httpCliente.get<UserModel[]>(this.apiConsultUserUrl);
  }

  deleteUser(id: number): Observable<any>{
    return this.httpCliente.delete(`${this.apiDeleteUserUrl}/${id}`);
  }

  createUser(data:any){
    return this.httpCliente.post(this.apiCreateUserUrl, data);
  }

  updateUser(id: number, data: any): Observable<any>{
    return this.httpCliente.put(`${this.apiUpdateUserUrl}/${id}`, data);
  }

  getById(id: number): Observable<UserModel>{
    return this.httpCliente.get<UserModel>(`${this.apiConsultByIdUserUrl}/${id}`);
  }
}
