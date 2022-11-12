import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { arr, pending, error } = useFetch(
    " http://localhost:6969/results/" + id
  );

  return (
    <div>
      BlogDets {id}
      {pending && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      <br />
      {arr && <div>{arr.title}</div>}
    </div>
  );
}

export default BlogDetails;
