import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GetComponent} from './get/get.component';
import {PostComponent} from './post/post.component';

const appRoutes: Routes = [
    {
        path: 'get',
        component: GetComponent
    },
    {
        path: 'post',
        component: PostComponent
    },
    {path: '', redirectTo: '/get', pathMatch: 'full'},
];

@NgModule({
    declarations: [
        GetComponent,
        PostComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
