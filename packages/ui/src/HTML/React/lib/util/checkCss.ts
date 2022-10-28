import {
  css,
  CSSProperties,
  FlattenSimpleInterpolation,
} from "styled-components";
// import { utility } from "../global.types";
import {
  // checkGridArea,
  checkGridArea2,
  checkPlaceItems,
  checkPlaceContent,
  checkBackgroundColor,
  checkSize,
  checkZIndex,
} from "./checkCss/";
import { checkGridTemplate } from "./checkCss/checkGridTemplate";

// class CheckCss {}

// type Choice = "gridArea" | "placeContent" | "placeItems" | "backgroundColor";

export default function <
  T extends {
    css_?: {
      gridArea?: CSSProperties["gridArea"];
      placeContent?: CSSProperties["placeContent"];
      backgroundColor?: CSSProperties["backgroundColor"];
      zIndex?: CSSProperties["zIndex"];
      gridTemplateColumns?: string;
      gridTemplateRows?: string;
      placeItems?: CSSProperties["placeItems"];
    };
    size?:
      | { auto?: boolean; width?: string; height?: string }
      | ("small" | "mid" | "big");
  }
>(
  type:
    | "gridArea"
    | "placeContent"
    | "placeItems"
    | "backgroundColor"
    | "size"
    | "zIndex"
    | "gridTemplateRows"
    | "gridTemplateColumns",
  props: T
): FlattenSimpleInterpolation | undefined {
  let resultCss: FlattenSimpleInterpolation | undefined;
  switch (type) {
    case "backgroundColor":
      resultCss = checkBackgroundColor(props);
      break;
    case "gridArea":
      resultCss = checkGridArea2(props);
      break;
    case "placeContent":
      resultCss = checkPlaceContent(props);
      break;
    case "placeItems":
      resultCss = checkPlaceItems(props);
      break;
    case "gridTemplateRows":
      if (props.css_)
        resultCss = checkGridTemplate(
          "rows",
          props as {
            css_: { gridTemplateColumns?: string; gridTemplateRows?: string };
          }
        );
      break;
    case "gridTemplateColumns":
      if (props.css_)
        resultCss = checkGridTemplate(
          "columns",
          props as {
            css_: { gridTemplateColumns?: string; gridTemplateRows?: string };
          }
        );
      break;
    case "size":
      resultCss = checkSize(
        props as { size: { auto?: boolean; width?: string; height?: string } }
      );
      break;
    case "zIndex":
      resultCss = checkZIndex(props);
      break;
    default:
      resultCss = css``;
      break;
  }
  return resultCss;
}