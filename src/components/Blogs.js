// function Blogs(props) {
//     const blogs = props.blogs
//     const title = props.title
function Blogs({blogs,title,handleDelete}) {

    return ( 
        <div>
            <h1>{title}</h1>
            {blogs.map((e) => (
            <div className="arr" key={e.id}>
                <h1>{e.title}</h1>
                <h1>{e.id}</h1>
                {/* <button onClick={() => {
                    handleDelete(e.id)
                }}>Delete</button> */}
            </div>
        ))}
        </div>
     );
}

export default Blogs;