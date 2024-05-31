import axios from 'axios';

export function PostShow(props) {
  
  const updatePost =(event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(params) ;  
    
    // props.onCreatePost(params); //creating an event that has to be listened by the create recipe in content
    // axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then(
    //   response =>{
    //     console.log(response.data);
     
    //   });
      
    // event.target.reset();    //clears the form on submit 
    
    // console.log(props.post.id);
  }

  return (
    // <p>This is the prop.children part</p>
    <div>
        <p>{props.post.body}</p>
        <p>{props.post.title}</p>

    {/* create a update form with default values */}
        <form onSubmit={updatePost} >
        <div>
          Title:<input type="text" name="title" defaultValue={props.post.title} />
        
        </div>
        <div>
          Body:<input type="text" name="body" defaultValue={props.post.body}/>
        
        </div>
        <div>
          Image:<input type="url" name="image" defaultValue={props.post.image}/>
        
        </div>
        <div>
          <button type="submit">Update Post</button>
        </div>
        
        {/*Can add id and name */}
      </form>
    </div>
      
        
  );
}