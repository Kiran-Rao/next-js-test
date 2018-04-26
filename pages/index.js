import Link from 'next/link';
import Header from '../components/Header';

const PostLink = ({ title, id }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)


const Index = () =>
  <div>
    <Header />
    Welcome to next.js!

    <PostLink id='hw' title="Hello World" />
    <PostLink id='b' title="Boeun" />
    <PostLink id='c' title="asnoteuh" />
  </div>
;

export default Index;
