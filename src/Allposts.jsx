export function Allposts(props) {
  return (
    <div>
      <h1>All Posts</h1>
      {props.posts.map(post => (
        <div key={post.id} className="posts" cards>
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
          <img src={post.image} />
        </div>

      ))}
    </div>
  );
}
