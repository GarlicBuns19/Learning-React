import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { arr, pending, error } = useFetch(
    " http://localhost:6969/results/" + id
  );
  const history = useHistory()
    const handleDelete = () => {
        fetch('http://localhost:6969/results/' + arr.id,{
            method : 'Delete'
        }).then(() => {
            console.log('item deleted')
            history.push('/')
        })
    }
  return (
    <div>
      BlogDets {id}
      {pending && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      <br />
      {arr && <div>
        {arr.title}
        <button onClick={handleDelete}>Delete</button>
        
        </div>
      }
    </div>
  );
}

export default BlogDetails;
