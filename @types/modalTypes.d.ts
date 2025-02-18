export enum EModalType {
  MENU = 'menu',
  TABLE = 'table',
  CABINET = 'cabinet',
  WAITER = 'waiter',
  ORDER = 'order',
}

declare module "main/modalTypes" {
  export interface ModalState {
    modal: {
      isOpen: boolean;
      type: EModalType | null;
    };
    setModal: (isOpen: boolean, type: EModalType | null) => void;
  }
}