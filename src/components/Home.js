import { useEffect, useState } from "react";
import '../Home.css'
import Blogs from './Blogs';

function Home() {
  const [newName, setName] = useState(``);
  const [test, setTest] = useState("");
  const [arr,setArr] = useState([
    {title : 'Lolo',id: 1},
    {title : 'Yes',id: 2},
    {title : 'Yo',id: 3}
  ])
  const title = 'Lets get that title'

  const name = () => {
    let desk = document.getElementById("inputName").value;
    if (desk.length) {
      document.getElementById("inputName").value = "";
      return desk;
    }
    if (desk === "") {
      document.getElementById("inputName").value = "";
      console.log("Plz enter something");
    }
  };

  const time = () => {
    let tester = document.getElementById('test')
    setInterval(() => {
        tester.innerHTML = Math.random() * 1000
    }, 1000);
  };

  const handleClick = () => {
    const para = document.getElementById("para");
    setName(name());
    setTest(time());
    console.log(name());
    para.innerHTML = newName;
    // name = ''
  };

  const handleDelete = (id) => {
    let newArr = arr.filter(e => e.id !== id)
    setArr(newArr)
  }

  useEffect(() => {
    console.log('useEffect ran damn')
  })

  return (
    <div>
      <input type="text" placeholder="Enter your Name" id="inputName" />
      <button onClick={() => handleClick(name)}>Click Me</button>
      <p id="para">{newName}</p>
      <p id="test">{test}</p>

      <div>
        <Blogs blogs={arr} title={title} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Home;
