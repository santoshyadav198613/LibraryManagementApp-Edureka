import { InjectionToken } from '@angular/core';
import { IValueProvider } from './IvalueProvider';


export let API_CONFIG = new InjectionToken<IValueProvider>('value.service');

export let APP_CONFIG: IValueProvider = {
    baseUrl: 'http://jsonplaceholder.typicode.com/',
    token: 'HGGF454DF',
    pageSize: 5
}
