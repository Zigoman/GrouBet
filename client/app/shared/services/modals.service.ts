import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface IAlert {
  title: string;
  message: string;
}

export interface IModal {
  /*type: ModalType;*/
  params?: any;
}

@Injectable()
export class ModalsService {

  public handler: Subject<IModal> = new Subject();
  public alertHandler: Subject<IAlert> = new Subject();

  public open(modal: IModal) {
    this.handler.next(modal);
  }

  public openAlert(alert: IAlert) {
    this.alertHandler.next(alert);
  }

}
