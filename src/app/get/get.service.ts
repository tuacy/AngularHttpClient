import {Injectable} from '@angular/core';
import {HttpBaseService} from '../network/http-base.service';
import {Observable} from 'rxjs';
import {Config} from './config';

@Injectable()
export class GetService {

    constructor(private http: HttpBaseService) {
    }

    getConfig(): Observable<Config> {
        const configUrl = 'asset/config.json';
        return this.http.getData<Config>(configUrl, {name: 'hello', age: 20}, {qq: '1007178106'});
    }
}
