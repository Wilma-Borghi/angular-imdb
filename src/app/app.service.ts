import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private http: HttpClient) {
    }

    getFilme(titulo: string): Observable<any> {
        return this.http.get(`http://localhost:8000/auto-complete/${titulo}`);
    }

    getEmBreve(): Observable<any> {
        return this.http.get(`http://localhost:8000/movie/get-coming-soon`);
    }

    getImagem(id: string): Observable<any> {
        return this.http.get(`http://localhost:8000/movie/get-images/${id}`);
    }

    getFilmeDetalhe(id: string): Observable<any> {
        return this.http.get(`http://localhost:8000/movie/detail/${id}`);
    }

    getFilmeGenero(id: string): Observable<any> {
        return this.http.get(`http://localhost:8000/movie/get-genres/${id}`);
    }

}