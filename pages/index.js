import Link from 'next/link';
import Header from '../components/Header';

const Post = ({ title, }) => (
  <li>
    <Link href={`/page?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)


const Index = () =>
  <div>
    <Header />
    Welcome to next.js!

    <Post title="Hello World" />
    <Post title="Boeun" />
    <Post title="asnoteuh" />
  </div>
;

export default Index;
