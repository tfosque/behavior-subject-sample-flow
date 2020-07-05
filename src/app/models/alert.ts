export interface Alert {
  show: boolean;
  msg: string;
  category: string;
}

export enum Categories {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
  success = 'success',
  info = 'info'
}

