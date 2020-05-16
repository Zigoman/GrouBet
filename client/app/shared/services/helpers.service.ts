import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class HelpersService {

  constructor() {
  }

  static getLocalDateString(timestamp) {
    return new Date(timestamp).toLocaleDateString('en-GB', {timeZone: 'UTC'});
  }

  static containsObject(obj, list) {
    let i;
    for (i = 0; i < list.length; i++) {
      if (_.isEqual(list[i], obj)) {
        return true;
      }
    }
    return false;
  }

   static getLocalDateTimeString(timestamp) {
    return new Date(timestamp).toLocaleString('en-GB', {timeZone: 'UTC'});
  }

}
