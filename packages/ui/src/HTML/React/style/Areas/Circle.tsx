import styled, {
  css,
  DefaultTheme,
} from "styled-components";
import { Css } from "../../classes";
import { CssStyled, StyledCss, utility } from "../../lib";
import checkCss from "../../lib/util/checkCss";

type CircleStyle = {
  borderColor?: string;
  cardHead?: boolean;
  small?: boolean;
  badge?: boolean;
  size?: {
    auto?: boolean;
    width?: string;
    height?: string;
  };
  css?: utility.ZionCss<
    undefined,
    true,
    | "width"
    | "height"
    | "border"
    | "borderRadius"
    | "placeSelf"
    | "zIndex"
    | "gridArea"
    | "backgroundColor"
    | "boxSizing"
  >;
} & CssStyled &
  StyledCss;

export const checkBorderColor = <
  T extends { borderColor?: string }
>(
  props: T
) => {
  if (!props.borderColor) return "black";
  return props.borderColor;
};

const defaultCircle = css<CircleStyle>`
  place-self: center;
  border: 1px solid ${props => checkBorderColor(props)};
  ${props => checkCss("zIndex", props)}
  ${props => checkCss("size", props)}
  ${props => checkCss("backgroundColor", props)}
  ${props => checkCss("gridArea", props)}
  ${props => new Css("border", css``, props).value}
  ${props => new Css("boxSizing", css``, props).value}
`;

const cardHeadCircle = css`
  height: 60%;
  width: 60%;
  border: 0.05rem solid;
  background-color: #e5e5e5;
`;

const Badge = css`
  background-color: ${props =>
    props.theme.palette.darkgrey};
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;

const small = css`
  width: 10px;
  height: 10px;
  border: 0.05rem solid;
  background-color: #e5e5e5;
  justify-self: center;
`;

export const Circle = styled.div<
  CircleStyle & DefaultTheme
>`
  border-radius: 100%;
  ${props =>
    props.cardHead ? cardHeadCircle : defaultCircle}
  ${props => (props.small ? small : defaultCircle)}
  ${props => props.badge && Badge}
`;

export const Circle2 = styled.div`
  height: 60%;
  width: 60%;
  border-radius: 100%;
  border: 0.05rem solid;
  background-color: transparent;
`;
