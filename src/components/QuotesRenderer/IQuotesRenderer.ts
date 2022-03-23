export interface IQuotesRenderer {
  isPopupOpen: boolean;
  setIsPopupOpen: (isPopupOpen: boolean) => void;
  setIsPopupErrorOpen: (isPopupErrorOpen: boolean) => void;
  setErrorText: (errorText: string) => void;
  regex: any;
  title: string;
}
