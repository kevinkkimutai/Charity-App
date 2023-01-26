import React from "react";

function HomePage(search, setSearch) {
  return (
    <nav class="navbar  navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
        <h3>CHARITY APP</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="form">
                Form
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            
            <button class="btn btn-outline-primary" type="">
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );

}
export default HomePage;
