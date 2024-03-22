export default function PostItem(post) {
  // post = {id:1, title}
  return (
    <div>
      <div>
        <span>No. {post.id}</span>
        <span>- {post.title}</span>
      </div>
      <p>{post.body}</p>
    </div>
  );
}
