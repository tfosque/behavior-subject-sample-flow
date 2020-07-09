export interface Alert {
  msg: string;
  status: string;
  token: any;
  currNow?: number | string;
}

export enum Categories {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  success = 'success',
  info = 'info'
}

