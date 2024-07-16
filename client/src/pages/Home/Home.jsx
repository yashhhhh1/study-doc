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
                    Book a Ride, Visitor Management
                  </h1>
                  <div className="horizontalBar my-4"></div>
                  <p className="maintextColor fw-medium">
                    A new unique way to book a ride using QR codes including
                    guest management, order management and QR user verification.
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
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-2">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-3">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">Ut enim ad minim veniam.</h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-4">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">
              Quis nostrud exercitation ullamco laboris nisi.
            </h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-5">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">
              Ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Guide to Help user */}

      <div className="step-container">
        <h1>Step To Guide</h1>
        <ol>
          <li>
            <div className="icon">
              <i className="fa-solid fa-bicycle"></i>
            </div>
            <div className="title">Step 1</div>
            <div className="descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              porro.
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fa-solid fa-car"></i>
            </div>
            <div className="title">Step 2</div>
            <div className="descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              porro.
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fa-solid fa-helicopter"></i>
            </div>
            <div className="title">Step 3</div>
            <div className="descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              porro.
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fa-solid fa-plane"></i>
            </div>
            <div className="title">Step 4</div>
            <div className="descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              porro.
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <div className="title">Step 5</div>
            <div className="descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              porro.
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fa-solid fa-bus"></i>
            </div>
            <div className="title">Step 6</div>
            <div className="descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              porro.
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};
