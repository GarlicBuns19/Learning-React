import { useState } from "react";

function Create() {
    const [title,setTitle] = useState('')
    return ( 
        <div className="create">
            <h1>Add a blog plz</h1>
            <form>
                <label>Title</label>
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <p>{title}</p>
            </form>
        </div>
     );
}

export default Create;