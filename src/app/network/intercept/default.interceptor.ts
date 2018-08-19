import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {
    HttpErrorResponse,
    HttpHandler,
    HttpHeaderResponse,
    HttpInterceptor,
    HttpProgressEvent,
    HttpRequest,
    HttpResponse,
    HttpSentEvent,
    HttpUserEvent,
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';

/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {
    }

    /**
     * 跳转到指定的界面
     * @param url
     */
    private navigateTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    /**
     * 处理服务器异常信息
     */
    private handleErrorResponseData(event: HttpErrorResponse): Observable<any> {
        switch (event.status) {
            case 401: // 未登录状态码,跳转到登入页面
                break;
            case 403:
            case 404:
            case 500:
                break;
            default:
                // 未知错误
                break;
        }
        return of(event);
    }

    /**
     * 处理服务器返回的数据
     */
    private handleResponseData(event: HttpResponse<any>): Observable<any> {
        return of(event);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<| HttpSentEvent
        | HttpHeaderResponse
        | HttpProgressEvent
        | HttpResponse<any>
        | HttpUserEvent<any>> {
        // 做请求前的一些处理
        return next.handle(req).pipe(
            mergeMap((event: any) => {
                // 对放回结果做处理
                if (event instanceof HttpResponse && event.status === 200) {
                    return this.handleResponseData(event);
                }
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleErrorResponseData(err))
        );
    }
}
