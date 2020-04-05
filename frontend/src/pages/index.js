import Link from 'next/link';
import Layout from "../components/Layout";
import Image from "../static/Image";

export default () => <div>
  <Layout header="Next" title="Top page." >
    <p>Welcome to next.js!</p>
    <Image fname="" size="250" />
    <hr />
    <div>
      <Link href="./other">
        <button>Go to Ohter page &gt;&gt;</button>
      </Link>
    </div>
  </Layout>
</div>
