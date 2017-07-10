import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Receita } from '../models/receita.model'

@Injectable()

export class ReceitaService {
    http: Http;
    headers: Headers;
    url: string = 'http://localhost:8000/api/contas';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    listar(): Observable<Receita[]> {
        return this.http.get(this.url, { headers: this.headers })
            .map((res: Response) => res.json());
    }

}