import OLA from "../../../assets/img/banner 1-01.jpg";
export default function ContentCard(props) {
  return (
    <div class="col-lg-6 mb-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h5 class="m-0 font-weight-bold text-gray-800">
            Last movie in Data Base
          </h5>
        </div>
        <div class="card-body">
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
        </div>
      </div>
    </div>
  );
}
