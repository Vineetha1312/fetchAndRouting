import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateBlogItemDetails = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updateBlogItemDetails})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogData

    return (
      <div className="blog-items-container">
        <h1 className="blog-title">{title}</h1>
        <div className="blog-author-details">
          <img src={avatarUrl} alt={title} className="avatar-image" />
          <p className="blog-author">{author}</p>
        </div>
        <img src={imageUrl} className="blog-image" alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-detials">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
