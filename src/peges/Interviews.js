import { ImgBody, SombraImg, Parrafoh2 } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "../components/HeaderVerti";
import { Form } from "../components/Form";
function Interviews(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-2">
            <HeaderVerti />
          </div>
          <div className="col-10">
            <ImgBody>
              <Form />
            </ImgBody>
          </div>
        </div>
      </div>
    </>
  );
}

export { Interviews };
