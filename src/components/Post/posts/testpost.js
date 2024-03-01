import Post from '../post'
import Tags from '../../Tags/tags'

const postData = {
    id: "test-post",
    title: "Test Post",
    tag: Tags.Testing,
    body: "hi"
    
}

const testpost = new Post(postData.id, postData.title, postData.tag, postData.body)

export default testpost;