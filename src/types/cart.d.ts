export interface CartProduct {
  id:        string;
  name : string;
  quantity:  number;
  price:     number;
  selection: Selection[];
}

export interface ProductCart {
  id:        string;
  quantity:  number;
  price:     number;
  selection: Selection;
  name: string;
}


export interface Selection {
  size:  string;
  color: string;
  img:   string;
  idColor: string;
}


