import styled, { css } from "styled-components";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { SVGButton } from "../../../style/Buttons";
import { Share } from "../../Icons/Share";
import { More_Normal } from "../../Icons/More_Normal";
import { Badge } from "../../Items/Badge";
import { Twitter } from "../../Icons/Twitter";
import { NavBarProps } from "../../../style/Layout";
import { ItemsArea } from "../../Items/ItemsArea";
import { ItemsAreaProps } from "../../Items/ItemsArea";
import { Image } from "../../GlobalSections";
import { Card, CardProps } from "../../Items";
import { NavBar } from "../../../classes";

type toDelete = {
  background?: { bottomBackgroundColor?: string };
};

type ProfilePage_v5Datas = {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  columns: number;
  theme: FluidTheme;
  datas: CardProps[];
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
  navbar: StyledDefault<NavBarProps>;
  itemsarea: ItemsAreaProps;
  nftpfp: CardProps;
  tracks: number;
  followers: number;
  following: number;
  description: string;
} & toDelete;

type ProfilePage_v5Css = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = ProfilePage_v5Datas & ProfilePage_v5Css;

export type ProfilePage_v5Props = StyledDefault<ToEdit>;

const StyledTwitter = styled(Twitter)`
  place-self: end;
`;

const NavBarStyled = styled(NavBar)``;

export const ProfilePage_v5Data = (
  props: PropsWithChildren<ProfilePage_v5Props>
) => {
  const [isAvatarImageLoaded, setIsAvatarImageLoaded] =
    useState(false);

  function handleClick() {
    props.setIsShowMore(!props.isShowMore);
  }

  return (
    <div className={props.className} css={props.css}>
      <div id="bg-upper"></div>
      <div id="profile-avatar">
        <Image
          src="https://ipfs.io/ipfs/QmPGGowQG4oPoRf884Hz9WXivACoDni1GsdDYkRdXVLfJc?filename=QmPGGowQG4oPoRf884Hz9WXivACoDni1GsdDYkRdXVLfJc"
          imageLoaded={!isAvatarImageLoaded}
          handleisLoading={setIsAvatarImageLoaded}
        ></Image>
      </div>
      <div id="infos">
        <p id="account">{"<account name>"}</p>
        <p id="handle">{"@handle"}</p>
        <div id="details">
          <div id="text-area">
            <p id="bold">{props.tracks}</p>
            <p>Tracks</p>
          </div>
          <div id="text-area">
            <p id="bold">{props.followers}</p>
            <p>Followers</p>
          </div>
          <div id="text-area">
            <p id="bold">{props.following}</p>
            <p>Following</p>
          </div>
        </div>
        <div id="social">
          <div>
            <button id="follow-btn">
              <p>Follow</p>
            </button>
          </div>
          <SVGButton>
            <Share />
          </SVGButton>
          <SVGButton>
            <More_Normal />
          </SVGButton>
        </div>
        <div id="description">
          <p>{props.description}</p>
        </div>
        <button onClick={handleClick}>Show More</button>
        <div id="links-area">
          <Badge size="small"></Badge>
          <div id="links">
            <div id="twitter">
              <StyledTwitter />
            </div>
            <div id="handle">
              <p>handle</p>
            </div>
          </div>
        </div>
      </div>
      <NavBarStyled datas={props.datas} />
      <ItemsArea {...props.itemsarea}>
        <Card {...props.nftpfp}></Card>
      </ItemsArea>
      {props.children}
    </div>
  );
};

export const ProfilePage_v5 = styled(ProfilePage_v5Data)`
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  grid-template-rows: 2rem 15rem auto 3rem auto;
  transition: 0.3s ease;
  ${props => {
    if (props.isShowMore)
      return css`
        grid-template-rows: 2rem 15rem auto 3rem auto;
      `;
    return "";
  }}
  grid-template-areas:
    "bg bg bg"
    ". circle ."
    ". infos ."
    "navbar navbar navbar"
    ". content .";
  width: 100%;
  height: 100%;
  #bg-upper {
    grid-area: bg;
    z-index: -1;
    width: 100%;
    height: 15rem;
    background-color: #c4c4c4;
  }
  #profile-avatar {
    z-index: 1;
    display: grid;
    overflow: hidden;
    grid-area: circle;
    place-self: center;
    background-color: red;
    border-radius: 100%;
    width: 15rem;
    height: 15rem;
    #profile-avatar-image {
      aspect-ratio: 1;
      width: 100%;
      height: 100%;
    }
  }
  #infos {
    grid-area: infos;
    display: grid;
    overflow: hidden;
    place-self: center;
    /* place-items: center; */
    grid-template-rows: 1.5rem 1.5rem 2rem 2rem 2rem 1.5rem 3.5rem;
    ${props => {
      if (props.isShowMore)
        return css`
          grid-template-rows: 1.5rem 1.5rem 2rem 2rem auto 1.5rem 3.5rem;
        `;
      else return "";
    }}
    height: 100%;
    #account {
      place-self: center;
    }
    #handle {
      place-self: center;
    }
    #details {
      display: grid;
      overflow: hidden;
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
      #text-area {
        display: inline;
        place-self: center;
        p {
          display: inline;
          &:first-child {
            margin-right: 0.2rem;
            font-weight: bolder;
          }
        }
      }
    }
    #social {
      width: 100%;
      height: 100%;
      grid-template-columns: 3fr 1fr 1fr;
      grid-template-areas: "follow . .";
      display: grid;
      #follow-btn {
        background-color: red;
        grid-area: follow;
        width: 100%;
        height: 100%;
        place-self: center;
        background-color: #e5e5e5;
        color: ${props => props.theme.palette.darkgrey};
        border-radius: 100px;
        border: 1px solid
          ${props => props.theme.primary.borderColor};
      }
    }
    #description {
      height: 100%;
      display: grid;
      place-items: center;
      overflow: hidden;
    }
    #links-area {
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "follow . .";
      display: grid;
      ${Badge} {
        place-self: center;
      }
      #links {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 3fr;
        place-items: center;
        #twitter {
          display: grid;
          width: 100%;
          height: 100%;
          place-content: center;
        }
        #handle {
          place-items: center;
          background-color: transparent;
          width: 100%;
        }
      }
    }
  }
  ${NavBarStyled} {
    width: 100%;
    display: grid;
    grid-area: navbar;
  }
`;