import { useHistory } from "react-router-dom";

function NotFound() {
    const history = useHistory()
    const home = () => {
        history.push('/')
    }
    return ( 
        <div>
            <h1>Plz get out of here</h1>
            <button onClick={home}>Back to Home</button>
        </div>
     );
}

export default NotFound;