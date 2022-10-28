import { css, FlattenSimpleInterpolation } from "styled-components";
import { Sizes } from "../../../global.types";

const defaultSize = css`
  width: 100%;
  height: 100%;
`;

export const checkSizeRatio = (props: {
  size?: Sizes;
  options?: { sizes?: {} };
}): FlattenSimpleInterpolation => {
  let result: FlattenSimpleInterpolation;
  switch (props.size) {
    case "small":
      result = css`
        width: 50vw;
      `;
      break;
    case "mid":
      result = css`
        width: 60vw;
      `;
      break;
    case "big":
      result = css`
        width: 70vw;
      `;
      break;
    default:
      result = defaultSize;
      break;
  }
  return result;
};
