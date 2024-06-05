import styled from "styled-components";
import { colors } from "@/styles/colors";

export const WrapperProduct = styled.section`
  background-color: ${colors.neutral.higher};

  height: 40vh;
  width: 100%;

  border-radius: 8px;

  transition: all 500ms ease-out;

  cursor: pointer;

  &:hover {
    background-color: ${colors.neutral.higher};
    transform: translate(-8px, -8px);
    box-shadow: 8px 8px 4px ${colors.neutral.mid};
  }

  .wrapperImage {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40%;
    width: 100%;

    border-radius: 8px;

    img {
      height: 100%;
      width: auto;
    }
  }

  .wrapperInfo {
    display: grid;

    height: 60%;
    padding: 8px;

    .title {
      display: flex;
      justify-content: center;
      font-weight: bold;
    }

    .description {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 12px;

      span:last-child {
        font-size: 14px;
      }
    }
    .price {
      font-weight: bold;

      span {
        display: flex;

        font-size: 12px;

        width: fit-content;
        padding: 4px 12px;

        &:first-child {
          font-weight: normal;
          color: ${colors.neutral.mid};
        }

        &:last-child {
          background-color: ${colors.highlight.primary};
          border-radius: 12px;
        }
      }
    }
  }
`;
