import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {Person} from '../test/person';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService]
})
export class PostComponent implements OnInit {

    constructor(private postHttp: PostService) {
    }

    ngOnInit() {
    }

    onGetPeopleListClick() {
        this.postHttp.getPeopleList().subscribe((data: Person[]) => console.log(data));
    }

    onAddPeopleListClick() {
        this.postHttp.addPeople().subscribe((data: Person) => console.log(data));
    }
}
