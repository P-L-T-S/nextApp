import { IProduct } from "./product.modal";

interface IResponse {
  total: number;
  skip: number;
  limit: number;
}

export interface IProductResponse extends IResponse {
  products: IProduct[];
}
