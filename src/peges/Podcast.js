import { ImgBody, SombraImg } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "../components/HeaderVerti";
function Podcast(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-2">
            <HeaderVerti />
          </div>
          <div className="col-10">
            <ImgBody>
              <h1>Pocd</h1>
            </ImgBody>
          </div>
        </div>
      </div>
    </>
  );
}

export { Podcast };
