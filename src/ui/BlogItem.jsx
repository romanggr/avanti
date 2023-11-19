import React from 'react'

const BlogItem = ({ title, author, content }) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>{content}</p>
            <h4>{author}</h4>
        </li>
    )
}

export default BlogItem