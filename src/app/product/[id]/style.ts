"use client";

import { colors } from "./../../../styles/colors";

import styled from "styled-components";

export const WrapperOverview = styled.section`
  display: flex;
  height: 100vh;
  padding: 10px;

  & > div {
    width: 50%;
    height: 100%;

    border: 1px solid ${colors.neutral.high};
    border-radius: 8px;

    padding: 10px 20px;
  }

  .galery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    img {
      width: auto;
      height: auto;
    }
    & > div {
      position: absolute;
      bottom: 5%;
    }
  }

  .overview {
    padding: 60px;

    display: grid;
    align-items: center;

    .title {
      display: flex;
      justify-content: space-between;

      p {
        display: flex;
        align-items: center;
        gap: 4px;

        &:first-child {
          font-weight: bold;
          font-size: 20px;
        }
      }
    }

    .price {
      font-size: 20px;
      font-weight: bold;
      color: ${colors.neutral.mid};

      span {
        width: fit-content;
        padding: 4px 12px;

        font-size: 14px;
        font-weight: normal;

        border-radius: 12px;

        color: ${colors.neutral.lower};
        background-color: ${colors.highlight.primary};
      }
    }

    .action {
      display: flex;
      justify-content: space-between;
      gap: 8px;

      button {
        width: 100%;
        height: 50px;
      }
    }

    .accordion {
      display: flex;
      flex-direction: column;
      gap: 12px;

      & > div {
        border-radius: 12px;
      }

      .summaryAccordion {
        background-color: ${colors.neutral.high};
        border-radius: 12px;
      }

      .accordionReviews {
        display: flex;
        flex-direction: column;
        gap: 12px;

        section {
          display: flex;
          flex-direction: column;
          gap: 8px;

          padding: 4px 12px;

          border: 1px solid grey;
          border-radius: 8px;

          p:first-child {
            font-size: 20px;
            font-weight: bold;
          }

          p:last-child {
            font-size: 14px;
            color: ${colors.neutral.high};
          }
        }
      }
    }
  }
`;
