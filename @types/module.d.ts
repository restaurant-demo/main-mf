declare module "*.svg" {
  const content: string;
  export default content;
};

declare module "menu/MenuApp" {
  const MenuApp: React.ComponentType;
  export default MenuApp;
};

declare module "tables/TablesApp" {
  const TablesApp: React.ComponentType;
  export default TablesApp;
};

declare module "modal_lib/Modal" {
  const Modal: React.ComponentType;
  export default Modal;
};