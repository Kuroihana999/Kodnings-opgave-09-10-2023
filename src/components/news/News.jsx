import image1 from "../../img/Wizard spells international-smol.png"

const news = () =>{
    return(
        <div className="container news-container">
        <section className="row ">
          <div className="col-md-6 ">
            <h2 className="text-center">Section 1</h2>
            <p>This is the content of section 1.</p>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">Section 2</h2>
            <figure><img src={image1} alt="" /></figure>
          </div>
        </section>
      </div>
    );
}


export default news;