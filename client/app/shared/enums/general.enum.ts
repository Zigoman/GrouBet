/**
 * Use data 'states'
 */
export enum AsyncItemState {
  UNINITIALIZED = 'uninitialized',
  LOADING = 'loading',
  POLLING = 'refreshing',
  LOADED = 'loaded',
  ERROR = 'error'
}
