import React, { useState } from "react";
import Image from "next/image";

import { MobileStepper, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

import { IProduct } from "@/interfaces/product.modal";

interface IProps {
  product: IProduct;
}

export function ProductGalery({ product }: IProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="galery">
      <Image
        src={product.images[activeStep]}
        alt="imagem do produto"
        height={500}
        width={500}
      />

      <MobileStepper
        variant="dots"
        steps={product.images.length}
        position="static"
        activeStep={activeStep}
        // sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === product.images.length - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}
