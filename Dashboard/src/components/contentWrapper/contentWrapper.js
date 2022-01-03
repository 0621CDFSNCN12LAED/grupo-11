import React from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop/ContentRowTop";
import ContentCard from "./ContentCard/contentCard";

export default function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
        </div>
        <ContentRowTop />
        <div class="row">
          <ContentCard />
          <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h5 class="m-0 font-weight-bold text-gray-800">
                  Genres in Data Base
                </h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Acción</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Animación</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Aventura</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Ciencia Ficción</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Comedia</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Documental</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Drama</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Fantasia</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Infantiles</div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">Musical</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
