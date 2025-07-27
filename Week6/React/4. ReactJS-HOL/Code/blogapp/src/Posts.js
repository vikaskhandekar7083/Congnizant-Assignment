import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        const posts = data.map(item => new Post(item));
        this.setState({ posts });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`Error in Posts component: ${error.message}`);
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>All Posts</h1>
        {posts.map(p => (
          <div key={p.id} style={{ marginBottom: '1.5rem' }}>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
