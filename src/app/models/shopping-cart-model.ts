export interface CartItem {
  product: string;
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
