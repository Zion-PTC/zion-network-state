import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { HTML } from "@zionstate/ui";
import { Data, NftData } from "../nft/[id]";
import { BasePropsFromApp } from "../_app";
import { InfoSub } from "../../components/InfoSub";
import { InfoSubDetails } from "../../components/InfoSubDetails";
import { Avatar } from "../../components/Avatar";
import { Circle } from "../../components/Circle";
import { ProfileId } from "../../components/ProfileId";
import { P } from "../../components/Elements/P";
import { TextArea } from "../../components/TextArea";

const components = HTML.React.components;
const ContentArea = components.Layout.ContentArea;
const Area = components.Layout.sections.Area;
const Cards = components.Items.Cards;
const getStatic = HTML.Next.staticProps.getStatic;

export type CollectionPropsFromApp = BasePropsFromApp & {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  columns: number;
};

export type CollectionProps = Data<NftData> & CollectionPropsFromApp;

export const { getStaticProps: gsp } = getStatic<NftData>(
  "fetch",
  "http://localhost:3000/api/nfts",
  "data"
);

export const getStaticProps = gsp;

const ProfileArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 0.5fr;
  height: 100%;
  position: relative;
  background-color: red;
  #background {
    display: grid;
    grid-template-rows: 1rem 20rem auto;
    #title {
      position: relative;
      z-index: 2;
    }
    position: relative;
    height: 100%;
    background-color: blue;
    #upper {
      position: absolute;
      background-color: #c4c4c4;
      height: 50%;
      width: 100%;
      z-index: 1;
    }
    #bottom {
      position: absolute;
      top: 50%;
      background-color: white;
      height: 50%;
      width: 100%;
      z-index: 1;
    }
    #image {
      position: relative;
      width: 20rem;
      height: 100%;
      border: 1px solid black;
      z-index: 2;
      place-self: center;
      background-color: #fcdde3;
    }
    #bottom-space {
      text-align: center;
      z-index: 2;
      display: grid;
      grid-template-rows: 2rem 2.8rem 4rem 3rem 5rem;
      place-items: center;
      margin: 0;
      h1 {
        margin: 0;
      }
      #info-section {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;

export default function Collection(props: CollectionProps) {
  // THIS COMMENT SHALL BE left as we need it to use the
  // infinite scroll hook.
  // const {
  //   isLoading,
  //   loadMoreCallback,
  //   hasDynamicPosts,
  //   dynamicPosts,
  //   isLastPage,
  // } = useInfiniteScroll(props.data);
  let data = props.data;

  type User = {
    name: string;
  };

  type propsObj = {
    bottomSpace: {
      social: { likes: User[]; more: any[] };
      title: string;
      description: string;
      bid: {
        highest: number;
      };
      avatar: {
        image: string;
        id: string;
      };
    };
  };

  const testProps: propsObj = {
    bottomSpace: {
      avatar: { id: "collection_id", image: "" },
      bid: { highest: 100 },
      description: "",
      social: { likes: [{ name: "cia" }], more: [] },
      title: "",
    },
  };

  return (
    <Layout {...props.layout}>
      <ProfileArea>
        <div id="background">
          <div id="upper"></div>
          <div id="bottom"></div>
          {/* <h1 id="title">Collection</h1> */}
          <div id="upper-space"></div>
          <div id="image"></div>
          <div id="bottom-space" {...testProps.bottomSpace}>
            <div id="social1">
              <a>like</a> <a>more</a>
            </div>
            <h1 id="title">CYBERDOG #010 - THE RIPPER</h1>
            <p id="description">
              WARNING! This cyberdog is out of control! He is very dangerous, he
              takes apart cyberdogs that enter his territory. He came here to
              find a partner in the gang.
            </p>
            <p id="bid">highest bid</p>
            <div id="info-section">
              <InfoSub>
                <TextArea>
                  <P bold>Creator</P>
                  <P dimmed>10% Royalties</P>
                </TextArea>
                <InfoSubDetails id="link">
                  <Avatar>
                    <Circle />
                  </Avatar>
                  <ProfileId></ProfileId>
                </InfoSubDetails>
              </InfoSub>
              <InfoSub>
                <P bold>Collection</P>
                <InfoSubDetails>
                  <Avatar>
                    <Circle></Circle>
                  </Avatar>
                  <ProfileId></ProfileId>
                </InfoSubDetails>
              </InfoSub>
            </div>
          </div>
        </div>
        <ContentArea id="collection-area">
          <Area
            width={props.width}
            height={props.height}
            blockSize={props.blockSize}
            columns={props.columns}
          >
            <Cards type="nft-pfp">{data}</Cards>
          </Area>
          {/*this here under is the infinte scroll loader, we need to create a pagination method and send it a paginated result of the nfts */}
          {/* <Loader
            isLoading={isLoading}
            isLastPage={isLastPage}
            loadMoreCallback={loadMoreCallback}
          /> */}
        </ContentArea>
      </ProfileArea>
    </Layout>
  );
}