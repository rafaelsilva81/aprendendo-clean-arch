import { ProductModel } from "../../models/ProductModel";

export interface ListProducts {
  execute: () => Promise<ProductModel[]>;
}

export interface GetProduct {
  execute: (id: number) => Promise<ProductModel>;
}
