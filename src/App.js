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
        <div className="lists d-flex justify-content-between px-5 py-2 bg-dark">
          <h5 class="text-white">Start Bootstrap</h5>
          <div>
            <ul className="d-flex gap-3">
              <li>
                <a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">
                  Home
                </a>
              </li>
              <li>
                <a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">
                  About
                </a>
              </li>
              <li>
                <a href="https://startbootstrap.github.io/startbootstrap-blog-home/#">
                  Contact
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#fff" }}
                  href="https://startbootstrap.github.io/startbootstrap-blog-home/#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="blogHome">
        <span style={{ fontSize: "38px", fontWeight: "bold" }}>
          Welcome to Blog Home!
        </span>
        <p className="text-dark opacity-75 fs-5">
          A Bootstrap 5 starter layout for your next blog homepage
        </p>
      </div>
      <main>
        <div className="cards">
          <div class="card w-100 mb-4">
            <span className="img" style={{ height: "260px", fontSize: "60px" }}>
              850 x 350
            </span>
            <div class="card-body">
              <span>January 1, 2022</span>
              <h2 class="card-title">Featured Post Title</h2>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                laboriosam. Dicta expedita corporis animi vero voluptate
                voluptatibus possimus, veniam magni quis!
              </p>
              <a href="#" class="btn btn-primary">
                Read more &#8594;
              </a>
            </div>
          </div>
          <div class="card mb-4 box1">
            <span className="img">700 x 350</span>
            <div class="card-body">
              <span>January 1, 2022</span>
              <h4 class="card-title"> Post Title</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla.
              </p>
              <a href="#" class="btn btn-primary">
                Read more &#8594;
              </a>
            </div>
          </div>
          <div class="card mb-4 box1">
            <span className="img">700 x 350</span>
            <div class="card-body">
              <span>January 1, 2022</span>
              <h4 class="card-title"> Post Title</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla.
              </p>
              <a href="#" class="btn btn-primary">
                Read more &#8594;
              </a>
            </div>
          </div>
          <div class="card mb-4 box1">
            <span className="img">700 x 350</span>
            <div class="card-body">
              <span>January 1, 2022</span>
              <h4 class="card-title"> Post Title</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla.
              </p>
              <a href="#" class="btn btn-primary">
                Read more &#8594;
              </a>
            </div>
          </div>
          <div class="card mb-4 box1">
            <span className="img">700 x 350</span>
            <div class="card-body">
              <span>January 1, 2022</span>
              <h4 class="card-title"> Post Title</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla.
              </p>
              <a href="#" class="btn btn-primary">
                Read more &#8594;
              </a>
            </div>
          </div>
          <div
            class="btn-group btns"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label class="btn btn-outline-secondary" for="btnradio1">
              Newer
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="btnradio2">
              1
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio7"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="btnradio7">
              2
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="btnradio3">
              3
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio4"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="btnradio4">
              ...
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio5"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="btnradio5">
              15
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio6"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="btnradio6">
              Older
            </label>
          </div>
        </div>
        <div className="forms">
          <div class="card mb-4">
            <div class="card-header">Search</div>
            <div class="card-body">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter search term..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  Go!
                </button>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Categories</div>
            <div class="card-body d-flex gap-5">
              <div>
                <a
                  className="a"
                  href="https://startbootstrap.github.io/startbootstrap-blog-home/#!"
                >
                  Web Design
                </a>
                <br></br>
                <a
                  className="a"
                  href="https://startbootstrap.github.io/startbootstrap-blog-home/#!"
                >
                  HTML
                </a>
                <br></br>
                <a
                  className="a"
                  href="https://startbootstrap.github.io/startbootstrap-blog-home/#!"
                >
                  Freebies
                </a>
              </div>
              <div class="ms-4">
                <a
                  className="a"
                  href="https://startbootstrap.github.io/startbootstrap-blog-home/#!"
                >
                  JavaScript
                </a>
                <br></br>
                <a
                  className="a"
                  href="https://startbootstrap.github.io/startbootstrap-blog-home/#!"
                >
                  CSS
                </a>
                <br></br>
                <a
                  className="a"
                  href="https://startbootstrap.github.io/startbootstrap-blog-home/#!"
                >
                  Tutorials
                </a>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Side Widget</div>
            <div class="card-body">
              <p>
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the Bootstrap 5 card component!
              </p>
            </div>
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
