import {Link} from 'react-router-dom' 

function Navbar(){
    const dateInNumbers = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = dateInNumbers.toLocaleDateString("en-US", options)
    return (
        <div>
            <h1>Navbar is here</h1>
            <h2>Date today {date}</h2>
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/create">Create Blog</Link></h3>
        </div>
    )
}

export default Navbar