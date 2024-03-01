import allPosts from './allPosts';
import PostPreview from './postPreview';

function PostList() {
    return (
      <div id = "post-list">
      {allPosts.map(post => <PostPreview id = {post.id}></PostPreview>)}
      </div>
    );
  }
  
  export default PostList;