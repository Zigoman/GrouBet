import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class ClickOutsideService {

  public clickOutsideExcludes: ElementRef[];

  constructor() {
    this.clickOutsideExcludes = [];
  }

}
