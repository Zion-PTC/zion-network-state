import styled from "styled-components";
import { GCssStyled } from "../../lib";

export type ContentAreaProps = {
  overflow?: string;
} & StyledDefault &
  GCssStyled<
    | "border"
    | "width"
    | "height"
    | "display"
    | "placeSelf"
    | "overflow"
    | "gridArea"
    | "placeContent"
  >;

// this div shall be placed in a container which provides its dimension.
export const ContentArea = styled.div<ContentAreaProps>`
  width: 100%;
  height: 100%;
  display: grid;
  place-self: center;
  ${props => (props.overflow ? "overflow: auto;" : "")}
  ${props =>
    props.css_?.gridArea &&
    `grid-area: ${props.css_.gridArea};`}
  ${props =>
    props.css_?.placeContent &&
    `place-content: ${props.css_.placeContent};`}
`;
