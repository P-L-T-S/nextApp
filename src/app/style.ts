import styled from "styled-components";

export const Wrapper = styled.section`
  header {
    display: flex;
    padding: 20px;
    gap: 12px;

    & > div {
      width: 20vw;
    }
  }

  .WrapperList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    align-content: center;
    justify-items: center;

    gap: 24px;
    padding: 20px 10vw;

    @media screen and (max-width: 1700px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 1500px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }

    WrapperPagination {
      display: flex;
      justify-content: center;
      padding: 20px;
    }
  }
`;
