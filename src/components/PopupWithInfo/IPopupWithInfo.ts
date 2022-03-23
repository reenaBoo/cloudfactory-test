export interface IInfo {
  name?: string;
  last?: number;
  high24hr?: number;
  percentChange?: number;
}

export interface IPopupWithInfo {
  info: IInfo;
  onClose: () => void;
}
