import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link className="link-class" to={`/blogs/${id}`}>
      <div className="blog-item">
        <img src={imageUrl} className="image" alt={title} />
        <div className="blog-item-details">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-details">
            <img src={avatarUrl} className="avatar" alt={title} />
            <p className="topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
