import { Directive, HostListener } from '@angular/core';
import { KEY_CODE } from '../enums/key-type.enum';

@Directive({
  selector: '[teamsKeyPress]'
})
export class KeyPressDirective {

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(e) {
    if (e.key === KEY_CODE.CTRL) {
      console.log(e.key);
    }
  }

}
