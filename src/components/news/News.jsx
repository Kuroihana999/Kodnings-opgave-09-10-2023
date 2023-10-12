import image1 from "../../img/techwizard.avif"

const news = () =>{
    return(
        <div className="container news-container">
        <section className="row ">
          <div className="col-md-6 ">
            <h2 className="text-center">Section 1</h2>
            <figure><img className="img-fluid justify-content-center" src={image1} alt="" /></figure>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">Section 2</h2>
            <figure><img className="img-fluid justify-content-center" src={image1} alt="" /></figure>
          </div>
        </section>
      </div>
    );
}


export default news;