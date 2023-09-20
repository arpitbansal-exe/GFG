import React,{useState} from 'react'
import Navbar from './Navbar'

export default function DSA() {

    const [posts, setPosts] = useState([]);

    async function CreatePost() {

      console.log("Create Post called");
      let r;
      try {
        r=JSON.parse(localStorage.getItem('user-info')).role;
        console.log(r);
        
      } catch (error) {
        alert("Please Login as admin to create post");
        return;
      }
      if(r!=="admin"){
        alert("You are not authorized to create post");
        return;
      }
      if(r==="admin"){
        let item = { "Title": "DSA 8", "Description": "Data Structures and Algorithms","difficulty":"medium", "link":"https://www.geeksforgeeks.org/data-structures/" }
        // Currently hardcoded, if button is pressed, a panel will open and show the form to fill
        let result = await fetch("http://localhost:5000/post/create", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(item)
        });
        

        
        result = await result.json();
        if(result.title==="post created"){
          alert("Post created successfully");
        }
        else if(result.message==="Title already used"){
          alert("Title already used");
        }
      }

    }


    async function GetAll() {
        let url = "http://localhost:5000/post/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(typeof data);

        data.forEach((item, index) => {
        const title = item.Title;
        const description = item.Description;
        const lk=item.link;
        
          console.log(`Item ${index + 1}:`);
          console.log(`Title: ${title}`);
          console.log(`Description: ${description}`);
          console.log(`Link: ${lk}`);
          console.log('---');
        });
        alert("Check console for data");

        }

    



  return (
    
    <>
        <Navbar/>

      
        <h1>DSA</h1>
        <button onClick={GetAll}>Get All</button>
        <p>{posts}</p>
        <button onClick={CreatePost}>Create Post</button>
    </>
  )
}
