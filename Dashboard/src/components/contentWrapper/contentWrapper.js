import React from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop/ContentRowTop";
import ContentCard from "./ContentCard/contentCard";
import OLA from "../../assets/img/banner 1-01.jpg";

const categories = [
  "Plomería",
  "Albañilería",
  "Pintura",
  "Limpieza",
  "Electricidad",
  "Gas",
  "Legales",
  "Pisos",
];

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
          <ContentCard title="Último usuario registrado">
            <div class="text-center">
              <img
                class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "40 rem" }}
                src={OLA}
                alt=" Banner OLA "
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              consequatur explicabo officia inventore libero veritatis iure
              voluptate reiciendis a magnam, vitae, aperiam voluptatum non
              corporis quae dolorem culpa citationem ratione aperiam voluptatum
              non corporis ratione aperiam voluptatum quae dolorem culpa ratione
              aperiam voluptatum?
            </p>
            <a class="btn btn-danger" target="_blank" rel="nofollow" href="/">
              View movie detail
            </a>
          </ContentCard>
          <ContentCard title="Listado de profesiones">
            <div class="row">
              {categories.map((category) => {
                return (
                  <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                      <div class="card-body">{category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ContentCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}
