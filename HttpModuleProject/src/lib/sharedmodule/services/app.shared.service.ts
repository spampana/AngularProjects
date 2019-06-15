import { Injectable } from '@angular/core';
import { ProductDataInfo } from '../app.product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SharedHttpService {

    url: string;

    // the HttpClient is injected in the ctor. 
    //The instance for this will be provided by HttpClientModule  
    constructor(private http: HttpClient) {
        this.url = 'http://apiapptrainingservice.azurewebsites.net/api/products';
    }
    
    getProducts(): Observable<ProductDataInfo[]> {
        let resp: Observable<ProductDataInfo[]>;
        resp = this.http.get<ProductDataInfo[]>(this.url);
        return resp;
    }

    postProduct(prd: ProductDataInfo): Observable<ProductDataInfo> {
        let resp: Observable<ProductDataInfo>;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        resp = this.http.post<ProductDataInfo>(this.url, JSON.stringify(prd), options);
        return resp;
    }

    putProduct(id: number, prd: ProductDataInfo): Observable<boolean> {
        let resp: Observable<boolean>;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        resp = this.http.put<boolean>(`${this.url}/${id}`, JSON.stringify(prd), options);
        return resp;
    }

    deleteProduct(id: number): Observable<boolean> {
        let resp: Observable<boolean>;
        resp = this.http.delete<boolean>(`${this.url}/${id}`);
        return resp;
    }
}