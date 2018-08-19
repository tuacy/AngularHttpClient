import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpBaseService {

    constructor(private http: HttpClient) {
    }

    /**
     * 封装一个序列化get请求的参数的方法
     * @param data {any} data
     */
    private static param(data): string {
        let url = '';
        for (const k in data) {
            if (data.hasOwnProperty(k)) {
                const value = data[k] !== undefined ? data[k] : '';
                url += `&${k}=${encodeURIComponent(value)}`;
            }
        }
        return url ? url.substring(1) : '';
    }

    /**
     * get请求
     * @param url url地址
     * @param params [params]可选提交的参数
     * @param headers {any} [header]可选设置的头信息
     */
    getData<T>(url: string, params?: any, headers?: any): Observable<T> {
        // 配置请求参数
        let httpParams: HttpParams = new HttpParams();
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                httpParams = httpParams.append(key, params[key]);
            }
        }
        // 配置请求头
        let httpHeaders: HttpHeaders = new HttpHeaders();
        for (const key in headers) {
            if (headers.hasOwnProperty(key)) {
                httpHeaders = httpHeaders.append(key, headers[key]);
            }
        }
        return this.http.get<T>(url, {headers: httpHeaders, params: httpParams});
    }

    /**
     * post 请求
     * @param url url地址
     * @param body options提交的数据
     * @param headers headers可选参数设置头
     */
    postData<T>(url: string, body: any | null, headers?: any): Observable<T> {
        let httpHeaders: HttpHeaders = new HttpHeaders();
        if (body != null) {
            httpHeaders = httpHeaders.append('Content-Type', 'application/json');
        }
        for (const key in headers) {
            if (headers.hasOwnProperty(key)) {
                httpHeaders = headers.append(key, headers[key]);
            }
        }
        return this.http.post<T>(url, body, {headers: httpHeaders});
    }

}
