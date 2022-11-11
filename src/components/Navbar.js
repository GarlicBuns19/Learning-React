function Navbar(){
    const dateInNumbers = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = dateInNumbers.toLocaleDateString("en-US", options)
    return (
        <div>
            <h1>Navbar is here</h1>
            <h2>Date today {date}</h2>
        </div>
    )
}

export default Navbar