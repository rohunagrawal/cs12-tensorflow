import Post from '../Post'
import Tags from '../Tags'

const postData = {
    id: "test-post",
    title: "Test Post",
    tag: Tags.Testing,
    body: <h1>WOWOWOW</h1>
}

const testpost = new Post(postData.id, postData.title, postData.tag, postData.body)

export default testpost;