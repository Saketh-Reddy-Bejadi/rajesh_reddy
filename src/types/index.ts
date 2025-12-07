
export interface ElementType {
    id: string;
    imgURL:string;
    title: string;
    desc: string;
    src:string;
}

export interface CardProps {
  element: ElementType;
}

export interface NavbarProps {
  theme: string;
  handleTheme: () => void;
}

export interface DescriptionProps{
  theme:string
}