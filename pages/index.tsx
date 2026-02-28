import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { SearchPosts } from "@/components/SearchPosts";
import { ArrowRight } from "react-feather";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
  allPosts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts, allPosts }) => {
  return (
    <>
      <Page
        title="Blog"
        description={
          <>
            <p>
              Exploring cool ideas and sharing interesting experiences.
            </p>
          </>
        }
      >
        <SearchPosts allPosts={allPosts} defaultPosts={posts}>
          <div className="mt-8">
            <Link
              passHref
              href="/posts"
              className="group inline-flex items-center gap-2 text-pink-600"
            >
              View more posts{" "}
              <ArrowRight
                className="group-hover:translate-x-0.5 transition-transform"
                width={".9em"}
              />
            </Link>
          </div>
        </SearchPosts>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, 5),
      allPosts: mdxFiles,
    },
  };
};

export default Home;
