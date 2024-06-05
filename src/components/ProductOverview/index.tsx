import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
} from "@mui/material";

import { StarRounded, ArrowDropDown } from "@mui/icons-material";

import FormatToCurrency from "@/services/utils/FormatToCurrency";

import { IProduct } from "@/interfaces/product.modal";

interface IProps {
  product: IProduct;
}

export function ProductOverview({ product }: IProps) {
  return (
    <div className="overview">
      <div className="title">
        <p>{product?.title}</p>
        <p>
          <StarRounded htmlColor="gold" /> {product?.rating}
        </p>
      </div>

      <div className="price">
        {product?.price > 40 ? (
          <>
            <p>
              <s>{FormatToCurrency(product?.price as number)}</s>
            </p>
            <span>
              Desconto de {product.discountPercentage}% comprando hoje!
            </span>
          </>
        ) : (
          <p>{FormatToCurrency(product?.price as number)}</p>
        )}
      </div>

      <div className="action">
        <Button
          variant="outlined"
          onClick={() => alert("Pode ser implementado no futuro")}
        >
          Adicionar no carrinho
        </Button>
        <Button
          variant="contained"
          onClick={() => alert("Pode ser implementado no futuro")}
        >
          Comprar agora
        </Button>
      </div>

      <div className="accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            className="summaryAccordion"
          >
            <p>Descrição</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>{product?.description}</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            className="summaryAccordion"
          >
            <p>Termos e Condições</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>Garantia: {product?.warrantyInformation}</p>
            <p>Frete: {product?.shippingInformation}</p>
            <p>
              Estoque: {product?.availabilityStatus} ( apenas {product?.stock}{" "}
              disponíveis)
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            className="summaryAccordion"
          >
            <p>Avaliações</p>
          </AccordionSummary>
          <AccordionDetails className="accordionReviews">
            {product?.reviews.map((review, index) => (
              <section key={index + review.date}>
                <p>{review.reviewerName}</p>
                <p>
                  <Rating
                    readOnly
                    name="read-only"
                    value={review.rating}
                    precision={0.5}
                  />
                </p>
                <p>{review.comment}</p>
                <p>{new Date(review.date).toLocaleDateString()}</p>
              </section>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
