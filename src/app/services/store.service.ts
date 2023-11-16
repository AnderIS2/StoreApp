import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StoreModel} from "../domain/users/store.model";

@Injectable({ providedIn: 'root' })
export class StoreService{

  apiConsultStoreUrl = 'http://localhost:8080/api/tienda/consult';
  apiConsultByIdStoreUrl = 'http://localhost:8080/api/tienda/gettienda/';
  apiDeleteStoreUrl = 'http://localhost:8080/api/tienda/delete';
  apiCreateStoreUrl = 'http://localhost:8080/api/tienda/create';
  apiUpdateStoreUrl = 'http://localhost:8080/api/tienda/update';

  constructor(private httpCliente: HttpClient) {
  }

  getAllStore(): Observable<StoreModel[]>{
    return this.httpCliente.get<StoreModel[]>(this.apiConsultStoreUrl);
  }

  deleteStore(id: number): Observable<any>{
    return this.httpCliente.delete(`${this.apiDeleteStoreUrl}/${id}`);
  }

  createStore(data:any){
    return this.httpCliente.post(this.apiCreateStoreUrl, data);
  }

  updateStore(id: number, data: any): Observable<any>{
    return this.httpCliente.put(`${this.apiUpdateStoreUrl}/${id}`, data);
  }

  getById(id: number): Observable<StoreModel[]>{
    return this.httpCliente.get<StoreModel[]>(this.apiConsultByIdStoreUrl+id);
  }
}
