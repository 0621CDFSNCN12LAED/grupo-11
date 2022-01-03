import { useHistory } from "react-router";

export default function Error404() {
  const history = useHistory();
  setTimeout(() => {
    history.push("/dashboard");
  }, 5000);
  return (
    <div>
      <h1>These are not the droids you're looking for</h1>
      404
    </div>
  );
}
