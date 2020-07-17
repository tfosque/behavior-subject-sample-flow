export interface ProductModel {
  id?: number;
  product: string;
  mongoId?: {};
  details: {
    itemOrProductDescription: string;
    catalogRefId: string;
    commerceId: string;
    productId: string;
  };
  price: {
    unitPrice: number;
    uom: string;
  };
  size?: string;
  thickness?: string;
  color?: string;
  desc?: string;
  manufacturerNumber?: string;
  specificatoins?: [];
  documents?: [];
  qty: number;
  total: number;
  variations?: Variations;
}

export interface Variations {
  [attribute: string]: AttributeValues;
}

export interface AttributeValues {
  [attributeValue: string]: string[];
}

export interface Variation {
  attr: string;
  attrValue: string;
  sku: string;
}
