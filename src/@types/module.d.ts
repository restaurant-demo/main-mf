declare module "*.svg" {
  const content: string;
  export default content;
};

declare module "menu/MenuApp" {
  const MenuApp: React.ComponentType;
  export default MenuApp;
};

declare module "modal_lib/Modal" {
  const Modal: React.ComponentType;
  export default Modal;
};