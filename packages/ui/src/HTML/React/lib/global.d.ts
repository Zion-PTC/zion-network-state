import {
  DefaultTheme as DefThem,
  css,
} from "styled-components";
import { CardFormats } from "../style/Areas/Shape";
import {
  BooleanSizes as BoolS,
  EnumToUnion as En2Un,
  Position as Pos,
  Sizes as Siz,
  CssStyled as CssSt,
  StyledCss as StCss,
  utility,
  StyledDefault as StDef,
  FluidStyled as FlSt,
  BasicProps as BasPr,
  FluidTheme as FluTh,
} from "./global.types";

export {};
declare global {
  type MakeBooleansFromEnum<T> = {
    [props in keyof T]?: boolean;
  };
  type MakeBooleansFromUnion<T extends string> = {
    [props in T]?: boolean;
  };
  type Position = Pos;
  type Sizes = Siz;
  type BooleanSizes = BoolS;
  type CssStyled = CssSt;
  type StyledCss = StCss;
  type EnumToUnion<T> = En2Un<T>;
  // type DefaultTheme = DefThem;
  type CssPropUnion<T> = utility.CssPropUnion<T>;
  type StyledDefault = StDef;
  type FluidStyled = FlSt;
  type BasicFluidProps = BasPr;
  type FluidTheme = FluTh;
}
