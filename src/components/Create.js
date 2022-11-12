import { useState } from "react";

function Create() {
    const [title,setTitle] = useState('')
    const [pending,setPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setPending(true)
        let blog = {title}
        console.log(blog)
        setTitle('')

        fetch('http://localhost:6969/results',{
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setPending(false)
            console.log('new blog added')
        })
    }

    return ( 
        <div className="create">
            <h1>Add a blog plz</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                {!pending && <button>Post</button>}
                {pending && <button disabled>Adding....</button>}
                <p>{title}</p>
            </form>
        </div>
     );
}

export default Create;