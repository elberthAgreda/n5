import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpProxyService {

    private url: string;

    constructor(private http: HttpClient, private endpoint: string) {
        this.url = endpoint;
    }

    /** @description Metodo que permite Obtener datos por GET con parametros */
    public get<T>(service: string, tkn = true): Observable<T> {
        return this.http.get<T>(this.url + service, this.getHeaders(tkn));
    }

    /** @description Metodo que permite Obtener datos por POST */
    public post<T>(service: string, request: any, tkn = true): Observable<T> {
        return this.http.post<T>(this.url + service, request, this.getHeaders(tkn));
    }

    /** @description Metodo que permite Obtener datos por PUT */
    public put<T>(service: string, request: any, tkn = true): Observable<T> {
        return this.http.put<T>(this.url + service, request, this.getHeaders(tkn));
    }

    /** @description Metodo que permite agregar cabeceras a la peticion */
    private getHeaders( tkn: boolean ) {
        let headers = new HttpHeaders();
        if ( tkn ) {
            const token = localStorage.getItem('tkn');
            headers = new HttpHeaders({
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            });
            return { headers };
        }
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        return { headers };
    }

}