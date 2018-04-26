import Header from '../components/Header';

const Post = props => (
  <div style={{ display: 'block'}}>
    <Header />
    <div>This is a title </div>
    {JSON.stringify(props.url.query)}
  </div>
);

export default Post;
