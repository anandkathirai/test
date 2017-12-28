import { Injectable} from '@angular/core';

@Injectable()
export class Config{

    public getUrl(environment){
        var Env= {
            environment : environment,
            rootUrl : '',
            App : {
                API_HOST='',
            },
            if(environment = 'development')
            {
                Env.App.API_HOST="http://localhost:8090/";
            }
        }
    }
}