import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;

  setIsModalOpen: (data: boolean) => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
  isModalOpen: false,

  setIsModalOpen: (data) => {
    if (get().isModalOpen !== data) {
      set({ isModalOpen: data });
    }
  },
}));
