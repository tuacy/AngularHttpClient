import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {DefaultInterceptor} from './network/intercept/default.interceptor';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MemoryDataService} from './test/memory-data.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            MemoryDataService, {dataEncapsulation: false}
        ),
        AppRoutingModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
