export interface Alert {
  msg: string;
  status: string;
}

export enum Categories {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  success = 'success',
  info = 'info'
}

