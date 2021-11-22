export interface ParentProps {
  id: string;
  images: string[];
  name: string;
}

export interface IParentCard {
  parent: ParentProps;
  showModal?: any;
  height?: number;
}
