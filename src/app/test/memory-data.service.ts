import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Person} from './person';

export class MemoryDataService implements InMemoryDbService {

    createDb() {
        const persons: Person[] = [
            {id: '001', name: 'tuacy', age: 28},
            {id: '002', name: 'wuyx', age: 28}
        ];
        return {persons: persons};
    }
}
