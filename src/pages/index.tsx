import Head from "next/head";

import MetaTags from "~/components/MetaTags";

const IndexPage = props => (
  <div className="">
    <MetaTags title="Home" />

    <main>
      <h1 className="text-center text-6xl">Hello Word</h1>
    </main>
  </div>
);

export default IndexPage;
