export enum EModalType {
  MENU = 'menu',
  TABLES = 'tables',
  WAITERS = 'waiters',
  ORDERS = 'orders',
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