declare module "*.svg" {
  const content: string;
  export default content;
};

declare module "menu/MenuComponent" {
  const MenuComponent: React.ComponentType;
  export default MenuComponent;
};