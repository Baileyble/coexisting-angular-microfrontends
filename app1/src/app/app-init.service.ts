import {APP_INITIALIZER, Injectable, Provider} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() {
    console.log('app service init');
  }

  appInit() {
    console.log('init');
  }

}

export const APP_INIT_SERVICE: Provider[] = [
  AppInitService,
  {
    provide: APP_INITIALIZER,
    useFactory: (appInitService: AppInitService) => () => appInitService.appInit(),
    deps: [AppInitService],
    multi: true
  }
];
