import { IProduct } from "@/interfaces/product.modal";
import { IProductResponse } from "@/interfaces/response.modal";

import {
  ConvertObjectToArray,
  ConvertObjToString,
} from "@/services/utils/convertObjectToArray";

interface IProps {
  limit?: number;
  skip?: number;
  select?: string; // aceita lista separada por virgula
  sortBy?: keyof IProduct;
  order?: "desc" | "asc";
}

interface IProductCategories {
  name: string;
  slug: string;
  url: string;
}

export async function getProductsService(props?: IProps) {
  let queryParams = "";

  if (!!props) {
    queryParams = ConvertObjToString<IProps>(props);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?${queryParams}`,
    {
      cache: "force-cache",
    }
  );

  const data: IProductResponse = await res.json();

  return data;
}

export async function getProductByIdService(id: number | string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
    cache: "force-cache",
  });

  const data: IProduct = await res.json();

  return data;
}

export async function getProductBySearchService(query: string, props?: IProps) {
  let queryParams = "";

  if (!!props) {
    queryParams = ConvertObjToString<IProps>(props);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/search?q=${query}&${queryParams}`,
    {
      cache: "force-cache",
    }
  );

  const data: IProductResponse = await res.json();

  return data;
}

export async function getProductCategoriesService() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`,
    {
      cache: "force-cache",
    }
  );

  const data: IProductCategories[] = await res.json();

  return data;
}

export async function getProductCategoryListService() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category-list`,
    {
      cache: "force-cache",
    }
  );

  const data: string[] = await res.json();

  return data;
}

export async function getProductByCategoryService(
  category: string,
  props?: IProps
) {
  let queryParams = "";

  if (!!props) {
    queryParams = ConvertObjToString<IProps>(props);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}?${queryParams}`,
    {
      cache: "force-cache",
    }
  );

  const data: IProductResponse[] = await res.json();

  return data;
}
