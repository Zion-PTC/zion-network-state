import styled, { css } from "styled-components";
import { checkBorderColor } from "../../lib/util";
import checkCss from "../../lib/util/checkCss";
import { paletteDarkGrey } from "../../lib/util/";
import { sixty } from "../common/position";
import { Css } from "../../classes/Css";

type Css_ = CssPropUnion<
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

type Size = {
  auto?: boolean;
  width?: string;
  height?: string;
};

export type CircleStyle = {
  borderColor?: string;
  cardHead?: boolean;
  small?: boolean;
  badge?: boolean;
  logoImage?: boolean;
  size?: Size;
  css_?: Css_;
} & StyledDefault;

const checkCssStyles = css<CircleStyle>`
  ${props => checkCss("zIndex", props)}
  ${props => checkCss("size", props)}
  ${props => checkCss("backgroundColor", props)}
  ${props => checkCss("gridArea", props)}
`;

const CssStyles = css<CircleStyle>`
  ${props => new Css("border", css``, props).value}
  ${props => new Css("boxSizing", css``, props).value}
`;

const defaultCircle = css<CircleStyle>`
  place-self: center;
  border: 1px solid ${props => checkBorderColor(props)};
  ${checkCssStyles}
  ${CssStyles}
`;

const cardHead = css`
  ${sixty}
  border: 0.05rem solid;
  background-color: #e5e5e5;
`;

const logoImage = css`
  ${sixty}
  border-radius: 100%;
  border: 0.05rem solid;
  background-color: transparent;
`;

// creata function helper che recupera il valore palette
// darkgrey
const badge = css`
  background-color: ${paletteDarkGrey};
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

export const Circle = styled.div<CircleStyle>`
  border-radius: 100%;
  ${props => (props.cardHead ? cardHead : defaultCircle)}
  ${props => props.badge && badge}
  ${props => props.logoImage && logoImage}
  ${props => props.small && small}
`;
