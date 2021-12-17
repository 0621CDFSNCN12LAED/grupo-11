import ValueCard from "./valueCard/valueCard";

export default function ContentRowTop() {
  return (
    <div class="row">
      <ValueCard
        title="Movies in Data Base"
        icon="fa-film"
        color="primary"
        value="21"
      />
      <ValueCard
        title="Total awards"
        icon="fa-award"
        color="success"
        value="79"
      />
      <ValueCard
        title="Actors quantity"
        icon="fa-user"
        color="warning"
        value="49"
      />
    </div>
  );
}
