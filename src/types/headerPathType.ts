export interface DropdownItem {
    id: number;
    title: string;
    path?:string
  }
  
  export interface UsePageType {
    id: number;
    title: string;
    dropdown?: DropdownItem[];
    path?:string
  }
