export enum SelectedPage {
    Home = 'home',
    Products = 'products',
    Features = 'features',
    About = 'about',
    Contact = 'contact'
  }
export interface StatisticType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ProductsType {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
  }