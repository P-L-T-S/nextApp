"use client";
import { useEffect, useState } from "react";

import {
  Pagination,
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { ProductCard } from "@/components/ProductCard";

import { IProduct } from "@/interfaces/product.modal";

import {
  getProductBySearchService,
  getProductsService,
} from "@/services/products.service";

import { Wrapper } from "./style";

interface IControls {
  limit: number;
  skip: number;
}

export default function Home() {
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortBy, setSortBy] = useState<{
    sortBy: string;
    order: "asc" | "desc";
  }>({
    sortBy: "",
    order: "asc",
  });
  const [controls, setControls] = useState<IControls>({
    limit: 15,
    skip: 0,
  });

  useEffect(() => {
    getProducts(
      controls.limit,
      controls.skip,
      sortBy.sortBy,
      sortBy.order,
      search
    );
  }, [controls, sortBy, search]);

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearch(input), 500);
    return () => clearTimeout(timeOutId);
  }, [input]);

  async function getProducts(
    limit: number,
    skip: number,
    sortBy?: any,
    order?: "desc" | "asc",
    search: string = ""
  ) {
    const res = await getProductBySearchService(search, {
      limit,
      skip,
      sortBy,
      order,
    });

    setTotalProducts(res.total);
    setProducts(res.products);
  }

  const handleChangeSelect = (event: any) => {
    setSortBy(event.target.value);
  };

  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    const c = { ...controls };
    const skiping = page - 1;
    c.skip = 15 * skiping;
    setControls(c);
  };

  return (
    <Wrapper>
      <header>
        <FormControl>
          <OutlinedInput
            id="input-with-icon-adornment"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Escolha a ordem de exibiçao
          </InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            onChange={handleChangeSelect}
            renderValue={(value) => value.sortBy + "-" + value.order}
          >
            <MenuItem value={{ sortBy: "", order: "" }}> - </MenuItem>

            <MenuItem value={{ sortBy: "price", order: "asc" }}>
              Preço - asc
            </MenuItem>

            <MenuItem value={{ sortBy: "price", order: "desc" }}>
              Preço - desc
            </MenuItem>

            <MenuItem value={{ sortBy: "rating", order: "asc" }}>
              avaliação - asc
            </MenuItem>

            <MenuItem value={{ sortBy: "rating", order: "desc" }}>
              avaliaçao - desc
            </MenuItem>

            <MenuItem value={{ sortBy: "title", order: "asc" }}>
              Nome - asc
            </MenuItem>

            <MenuItem value={{ sortBy: "title", order: "desc" }}>
              Nome - desc
            </MenuItem>
          </Select>
        </FormControl>
      </header>

      <section className="WrapperList">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>

      <div className="WrapperPagination">
        <Pagination
          count={Number((totalProducts / controls.limit).toFixed())}
          variant="outlined"
          page={page}
          onChange={handleChangePagination}
        />
      </div>
    </Wrapper>
  );
}
