import {Injectable} from '@angular/core';
import {HttpBaseService} from '../network/http-base.service';
import {Person} from '../test/person';
import {Observable} from 'rxjs';
import {UUID} from 'angular2-uuid';

@Injectable()
export class PostService {

    constructor(private http: HttpBaseService) {
    }

    getPeopleList(): Observable<Person[]> {
        const configUrl = 'api/persons';
        return this.http.getData<Person[]>(configUrl);
    }

    addPeople(): Observable<Person> {
        const configUrl = 'api/persons';
        const person = {
            id: UUID.UUID(),
            name: 'add user',
            age: 30
        };
        return this.http.postData<Person>(configUrl, person);
    }
}
