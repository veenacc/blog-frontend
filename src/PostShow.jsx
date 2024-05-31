export function PostShow(props) {
  return (
    // <p>This is the prop.children part</p>
    <div>
        <p>{props.post.body}</p>
        <p>{props.post.title}</p>
    </div>
        
  );
}