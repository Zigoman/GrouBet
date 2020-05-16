/**
 * Generic wrapper interface
 */
import {AsyncItemState} from '../enums/general.enum';

export interface AsyncItem<T> {
  state: AsyncItemState;
  error?: Error;
  cachedAt?: Date;

  isPolling: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;

  data?: T;
}
