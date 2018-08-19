import {Component, OnInit} from '@angular/core';
import {GetService} from './get.service';

@Component({
    selector: 'app-get',
    templateUrl: './get.component.html',
    styleUrls: ['./get.component.css'],
    providers: [GetService]
})
export class GetComponent implements OnInit {

    constructor(private getHttp: GetService) {
    }

    ngOnInit() {
    }

    onGetHttpClick() {
        // this.getHttp.getConfig()
        //     .subscribe((data: Config) => console.log(data));

        this.getHttp.getConfig()
            .subscribe({
                    next(response) {
                        console.log('next');
                        console.log(response);
                    },
                    error(err) {
                        console.error('error: ' + err);
                    },
                    complete() {
                        console.log('complete');
                    }
                }
            );

    }

}
