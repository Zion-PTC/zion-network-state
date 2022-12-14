import styled from "styled-components";
import { Head } from "../sections/Head";
import { Image } from "../sections/Image";
import { Infos } from "../sections/Infos";
import { Social } from "../sections/Social";
import { Portrait } from "../Shapes/Portrait";
import { NftPfp as NftPfpTypes } from "../types";

const Area = styled(Portrait)`
  height: 100%;
  display: grid;
`;

const CardArea = styled.div`
  background-color: #fafafa;
  height: 90%;
  width: 90%;
  display: grid;
  place-self: center;
  grid-template-rows: 1.4fr 9fr 1.5fr 1.3fr;
`;

export function NftPfp(props: NftPfpTypes.NftPfpProps) {
  let { backgroundColor } = props;
  return (
    <Area backgroundColor={backgroundColor}>
      <CardArea>
        <Head />
        <Image src={props.src ? props.src : ""} />
        <Infos />
        <Social />
      </CardArea>
    </Area>
  );
}
