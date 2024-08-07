import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
getHello(){
  return 'Bonjour, à tous!';
}
}
