import image1 from "../../img/techwizard.avif";
import image2 from "../../img/mudwizard.jpg";

const news = () => {
  return (
    <div className="container news-container">
      <section className="row ">
        <div className="col-md-6 ">
          <figure>
            <img
              className="img-fluid justify-content-center section_container"
              src={image1}
              alt=""
            />
          </figure>
          <h2 className="text-center">New in the world of wizarding</h2>
        </div>
        <div className="col-md-6">
          <figure>
            <img
              className="img-fluid justify-content-center section_container"
              src={image2}
              alt=""
            />
          </figure>
          <h2 className="text-center justify-content-center">Scandalous wizard buisness</h2>
        </div>
      </section>
    </div>
  );
};

export default news;
