import styled from "styled-components";
("../../lib/types");
import {
  Like as LikeIcon,
  Moon as MoonIcon,
  Account as AccountIcon,
  LogoZion as ZionIcon,
  Album as AlbumIcon,
  ArrowBack as ArrowBackIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  FilterAlt as FilterAltIcon,
  Home as HomeIcon,
  Repost as RepostIcon,
  Search as SearchIcon,
  Sun as SunIcon,
  Trending as TrendingIcon,
} from "./";

///// TYPES
export type Icon_v1Datas = {};
export type Icon_v1Booleans = {};
export type Icon_v1Props = NoizProps<
  Icon_v1Datas & Icon_v1Booleans
>;
export type Icon_v1ClassBooleans = {
  like?: boolean;
  moon?: boolean;
  account?: boolean;
  album?: boolean;
  arrowBack?: boolean;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  filterAlt?: boolean;
  home?: boolean;
  repost?: boolean;
  search?: boolean;
  sun?: boolean;
  trending?: boolean;
};
export type Icon_v1ClassProps = NoizDatas<Icon_v1Props> &
  Icon_v1ClassBooleans;
export type Icon_v1AsChild = MakeAsChild<
  "Icon",
  Icon_v1ClassProps
>;
export type StyledSvgProps = {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
};
////////////

export const Icon_v1 = class extends BaseNoiz<
  Icon_v1Datas,
  Icon_v1ClassProps
> {
  constructor(props: Icon_v1ClassProps) {
    super(props);
  }

  static StyledSvg = styled.svg<StyledSvgProps>`
    path {
      fill: ${props =>
        props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : ""};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
  `;

  static Svg24 = (
    props: NoizProps<StyledSvgProps, true>
  ) => (
    <Icon_v1.StyledSvg
      filled={props.filled}
      stroked={props.stroked}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      {props.children}
    </Icon_v1.StyledSvg>
  );

  LogoZion = ZionIcon;

  Like = LikeIcon;

  Moon = MoonIcon;

  Account = AccountIcon;

  Album = AlbumIcon;

  ArrowBack = ArrowBackIcon;

  ArrowLeft = ArrowLeftIcon;

  ArrowRight = ArrowRightIcon;

  FilterAlt = FilterAltIcon;

  Home = HomeIcon;

  Repost = RepostIcon;

  Search = SearchIcon;

  Sun = SunIcon;

  Trending = TrendingIcon;

  render() {
    const LogoZion = this.LogoZion;
    let Icon: () => JSX.Element = LogoZion;
    if (this.props.arrowBack) Icon = this.ArrowBack;
    if (this.props.arrowRight) Icon = this.ArrowRight;
    if (this.props.arrowLeft) Icon = this.ArrowLeft;
    if (this.props.filterAlt) Icon = this.FilterAlt;
    if (this.props.home) Icon = this.Home;
    if (this.props.repost) Icon = this.Repost;
    if (this.props.search) Icon = this.Search;
    if (this.props.sun) Icon = this.Sun;
    if (this.props.trending) Icon = this.Trending;
    if (this.props.album) Icon = this.Album;
    if (this.props.account) Icon = this.Account;
    if (this.props.like) Icon = this.Like;
    if (this.props.moon) Icon = this.Moon;
    return <Icon {...this.props.datas[0]}></Icon>;
  }
};
