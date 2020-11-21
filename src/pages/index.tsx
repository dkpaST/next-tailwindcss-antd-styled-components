import Head from "next/head";

import { Heading } from "@chakra-ui/core";

import Footer from "~/components/Footer";
import MetaTags from "~/components/MetaTags";

const IndexPage = props => (
  <div className="">
    <MetaTags title="Home" />

    <main>
      <Heading size="2xl">Hello Word</Heading>
    </main>

    <Footer />
  </div>
);

export default IndexPage;
