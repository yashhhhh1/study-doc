import "./Home.css";


export const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <div id="bodyContent" className="d-flex align-items-center">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8">
                <div className="p-2">
                  <p className="fw-medium fs-3 maintextColor">Best Platform</p>
                  <h1 className="fw-bolder display-3 maintextColor">
                  Free To Access, The Resource
                  </h1>
                  <div className="horizontalBar my-4"></div>
                  <p className="maintextColor fw-medium">
                  Unlock Free Study Materials by Sharing Your Own: 24-Hour Access Upon Contribution
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4 text-lg-center">
                <div className="p-2 text-center">
                  <lottie-player
                    src="https://lottie.host/e723405f-94c3-46bc-bcc3-942a2beb1474/ApFQ1q3m3W.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* feacture cards  */}

      <div className="showcase-container">
        <div className="heading">
          <h1 className="heading__title">Service Provide</h1>
        </div>
        <div className="cards">
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h2 className="card__title">
            Unlock Free Study Resources by Sharing Your Own – Access for 24 Hours
            </h2>
          </div>
          <div className="card card-2">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h2 className="card__title">
            Share to Access: Free Educational Materials for a Limited Time
            </h2>
          </div>
          <div className="card card-3">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h2 className="card__title">Contribute and Learn: Free Study Resources Available for 24 Hours</h2>
          </div>
          <div className="card card-4">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h2 className="card__title">
            Upload and Gain: Access Free Study Materials for One Day
            </h2>
          </div>
          <div className="card card-5">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h2 className="card__title">
            Collaborate and Access: Free Educational Content for 24 Hours
            </h2>
          </div>
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h2 className="card__title">
                ccess Free Study Resources by Contributing
            </h2>
          </div>
        </div>
      </div>

      {/* Guide to Help user */}

        <div className="step-container">
        <h1>Easy Three Step To Guide</h1>
        <ol>
          <li>
            <div className="title">Step 1</div>
            <div className="descr">
              Go to the homepage of the website and sign up the page.
            </div>
          </li>
          <li>
            <div className="title">Step 2</div>
            <div className="descr">
            Go to the Upload or Contribute section of the website.
            </div>
          </li>
          <li>
            <div className="title">Step 3</div>
            <div className="descr">
            Go to course the Nav bar or browse through categories to find the resource you want to view.
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};
