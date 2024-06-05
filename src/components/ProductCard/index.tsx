import Image from "next/image";
import { Rating, Tooltip } from "@mui/material";

import { IProduct } from "@/interfaces/product.modal";

import { WrapperProduct } from "./style";
import Link from "next/link";
import FormatToCurrency from "@/services/utils/FormatToCurrency";

interface IProps {
  product: IProduct;
}
export function ProductCard({ product }: IProps) {
  return (
    <WrapperProduct>
      <Link href={`/product/${product.id}`}>
        <div className="wrapperImage">
          <Image
            src={product.thumbnail}
            alt='product image'
            width={100}
            height={100}
          />
        </div>
        <div className="wrapperInfo">
          <p className="title">{product.title}</p>

          <Tooltip title={product.description}>
            <p className="description">{product.description}</p>
          </Tooltip>

          <p className="price">
            {FormatToCurrency(product.price)}
            <span>
              Em até 6 vezes de {FormatToCurrency(product.price / 6)} sem juros
            </span>
            <span>Economize {product.discountPercentage}% comprando hoje!</span>
          </p>

          <p className="rating">
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              precision={0.5}
              size="small"
            />
            <span>{product.rating} de 5</span>
          </p>
        </div>
      </Link>
    </WrapperProduct>
  );
}
