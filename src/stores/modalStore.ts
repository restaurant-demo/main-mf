import { create } from 'zustand';
import { ModalState } from 'main/modalTypes';

export const useModalStore = create<ModalState>((set) => ({
  modal: {
    isOpen: false,
    type: null
  },

  setModal: (isOpen, type) => set({ modal: { isOpen, type } }),
}));
