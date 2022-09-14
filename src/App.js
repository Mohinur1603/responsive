import logo from "./tablet.png";
import logo1 from "./smartphone.png";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <header>
        <div className="py-2 px-2 d-flex justify-content-between align-items-center">
          <div>
            <button type="button" class="btn btn-outline-none px-1 opacity-50">
              &#x2190; Overview Page
            </button>
          </div>
          <div className="d-flex">
            <img
              className="logo"
              src="https://cdn-icons-png.flaticon.com/512/4372/4372927.png"
              alt="desktop"
            />
            <img className="logo" src={logo} alt="tablet" />
            <img className="logo" src={logo1} alt="mobile" />
          </div>
          <div className="d-flex align-items-center gap-1">
            <a href="https://github.com/StartBootstrap/startbootstrap-shop-homepage">
              <img
                className="logo"
                src="https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png"
                alt="github"
              />
            </a>
            <button className="downloadBtn">
              <img
                className="download"
                src="https://cdn4.vectorstock.com/i/1000x1000/28/43/download-icon-with-a-long-shadow-vector-20142843.jpg"
                alt="22"
              />{" "}
              Free download
            </button>
            <button
              type="button"
              class="btn-close close"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="line"></div>
      </header>
      <section>
        <div className="container-fluid top pt-4 pb-2 px-5 d-flex justify-content-between align-items-center bg-light">
          <div class="d-flex ps-5 gap-5">
            <h5>Start Bootstrap</h5>
            <ul className="ul d-flex gap-4">
              <li>
                <a
                  style={{ color: "#333", fontWeight: "500" }}
                  href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#!"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#!">
                  About
                </a>
              </li>
              <li>
                <a href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#!">
                  Shop{" "}
                  <span className="ps-1" style={{ fontSize: "11px" }}>
                    &#x25BC;
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn1 me-5">
              <img
                style={{ width: "17px" }}
                src="https://cdn-icons-png.flaticon.com/512/665/665865.png"
                alt="cart"
              />
              <span>Cart</span>{" "}
              <img
                style={{ width: "17px" }}
                src="https://cdn-icons-png.flaticon.com/512/3840/3840570.png"
                alt="2"
              />
            </button>
          </div>
        </div>
        <div className="landing">
          <h1 style={{ fontSize: "62px", fontWeight: "700" }}>Shop in style</h1>
          <p style={{ color: "#888", fontSize: "22px", fontWeight: "400" }}>
            With this shop hompeage template
          </p>
        </div>
      </section>
      <main>
        <div class="card">
          <span
            className="boxCard"
            style={{
              width: "15rem",
              height: "150px",
              backgroundColor: "lightgrey",
            }}
          >
            450 x 300
          </span>
          <div class="card-body p-4 text-center">
            <h5 class="card-title">Funcy Product</h5>
            <p class="card-text mb-5">$40.00-$80.00</p>
            <a
              href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#"
              class="btn btn-outline-dark mt-4"
            >
              View options
            </a>
          </div>
        </div>
        <div class="card">
          <span
            className="boxCard"
            style={{
              width: "15rem",
              position: "relative",
              height: "150px",
              backgroundColor: "lightgrey",
            }}
          >
            450 x 300
          </span>
          <div className="abs">Sale</div>
          <div class="card-body p-4 text-center">
            <h5 class="card-title">Special Item</h5>
            <span style={{ color: "yellow", fontSize: "22px" }}>
              &#128970;&#128970;&#128970;&#128970;&#128970;
            </span>
            <p class="card-text">
              <del>$20.00</del> $18.00
            </p>

            <a
              href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#"
              class="btn btn-outline-dark mt-4"
            >
              Add to cart
            </a>
          </div>
        </div>
        <div class="card">
          <span
            className="boxCard"
            style={{
              width: "15rem",
              height: "150px",
              position: "relative",
              backgroundColor: "lightgrey",
            }}
          >
            450 x 300
          </span>
          <div className="abs">Sale</div>
          <div class="card-body p-4 text-center">
            <h5 class="card-title">Sale Item</h5>
            <p class="card-text mb-5">
              <del>$50.00</del> $25.00
            </p>
            <a
              href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#"
              class="btn btn-outline-dark mt-4"
            >
              Add to card
            </a>
          </div>
        </div>
        <div class="card">
          <span
            className="boxCard"
            style={{
              width: "15rem",
              height: "150px",
              backgroundColor: "lightgrey",
            }}
          >
            450 x 300
          </span>
          <div class="card-body p-4 text-center">
            <h5 class="card-title">Popular Item</h5>
            <span style={{ color: "yellow", fontSize: "22px" }}>
              &#128970;&#128970;&#128970;&#128970;&#128970;
            </span>
            <p class="card-text">$40.00</p>

            <a
              href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#"
              class="btn btn-outline-dark mt-4"
            >
              Add to cart
            </a>
          </div>
        </div>
        <div class="card">
          <span
            className="boxCard"
            style={{
              width: "15rem",
              height: "150px",
              position: "relative",
              backgroundColor: "lightgrey",
            }}
          >
            450 x 300
          </span>
          <div className="abs">Sale</div>
          <div class="card-body p-4 text-center">
            <h5 class="card-title">Sale Item</h5>
            <p class="card-text mb-5">
              <del>$50.00</del> $25.00
            </p>
            <a
              href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#"
              class="btn btn-outline-dark mt-4"
            >
              Add to card
            </a>
          </div>
        </div>
        <div class="card">
          <span
            className="boxCard"
            style={{
              width: "15rem",
              height: "150px",
              backgroundColor: "lightgrey",
            }}
          >
            450 x 300
          </span>
          <div class="card-body p-4 text-center">
            <h5 class="card-title">Funcy Product</h5>
            <p class="card-text mb-5">$40.00-$80.00</p>
            <a
              href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#"
              class="btn btn-outline-dark mt-4"
            >
              View options
            </a>
          </div>
        </div>
        <div class="card">
          <span
            className="boxCard"
            style={{
              width: "15rem",
              height: "150px",
              position: "relative",
              backgroundColor: "lightgrey",
            }}
          >
            450 x 300
          </span>
          <div className="abs">Sale</div>
          <div class="card-body p-4 text-center">
            <h5 class="card-title">Special Item</h5>
            <span style={{ color: "yellow", fontSize: "22px" }}>
              &#128970;&#128970;&#128970;&#128970;&#128970;
            </span>
            <p class="card-text">
              <del>$20.00</del> $18.00
            </p>

            <a
              href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#"
              class="btn btn-outline-dark mt-4"
            >
              Add to cart
            </a>
          </div>
        </div>
        <div class="card">
          <span
            className="boxCard"
            style={{
              width: "15rem",
              height: "150px",
              backgroundColor: "lightgrey",
            }}
          >
            450 x 300
          </span>
          <div class="card-body p-4 text-center">
            <h5 class="card-title">Popular Item</h5>
            <span style={{ color: "yellow", fontSize: "22px" }}>
              &#128970;&#128970;&#128970;&#128970;&#128970;
            </span>
            <p class="card-text">$40.00</p>

            <a
              href="https://startbootstrap.github.io/startbootstrap-shop-homepage/#"
              class="btn btn-outline-dark mt-4"
            >
              Add to cart
            </a>
          </div>
        </div>
      </main>
      <footer>
        <p>Copyright © Your Website 2022</p>
      </footer>
    </div>
  );
}

export default App;
