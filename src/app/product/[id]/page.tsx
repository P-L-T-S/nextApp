"use client";
import React, { useEffect, useState } from "react";

import { getProductByIdService } from "@/services/products.service";

import { IProduct } from "@/interfaces/product.modal";

import { ProductGalery } from "@/components/ProductGalery";
import { ProductOverview } from "@/components/ProductOverview";

import { WrapperOverview } from "./style";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    async function getProduct() {
      const res = await getProductByIdService(params.id);

      setProduct(res);
    }

    getProduct();
  }, [params.id]);

  return (
    <>
      {!!product ? (
        <WrapperOverview>
          <ProductGalery product={product} />
          <ProductOverview product={product} />
        </WrapperOverview>
      ) : (
        "carregando"
      )}
    </>
  );
}
