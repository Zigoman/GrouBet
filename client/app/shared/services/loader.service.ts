import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {


  private loadCounter: number;
  public handler: Subject<any> = new Subject();

  public handlerWithoutDelay: Subject<any> = new Subject();

  constructor() {
    this.loadCounter = 0;
  }

  public increaseCounter() {
    this.loadCounter++;
  }

  public decreaseCounter() {
    this.loadCounter--;
  }

  public getCounter() {
    return this.loadCounter;
  }

  public showLoaderWithoutDelay(show: boolean) {
    this.handlerWithoutDelay.next(show);
  }
}
