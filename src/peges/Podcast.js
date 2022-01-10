import { ImgBody, SombraImg } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "../components/HeaderVerti";
function Podcast(props) {
  return (
    <>
      <ImgBody>
        <HeaderVerti />
        <SombraImg>
          <p>Podcast</p>
        </SombraImg>
      </ImgBody>
    </>
  );
}

export { Podcast };
