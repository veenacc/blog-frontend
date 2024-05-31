export function Allposts(props) {
  return (
    <div>
      <h1>All Posts</h1>
      <div className="cards">
        {props.posts.map(post => (
          <div key={post.id} className="posts card">
            <h2>{post.title}</h2>
            {/* <h4>{post.body}</h4> */}
            <img src={post.image} />
            <button onClick={() => props.onShowPost(post)}>more info</button>
          </div>

        ))}
        
      </div>
    </div>
  );
}
