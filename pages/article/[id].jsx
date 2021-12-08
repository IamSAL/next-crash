import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";

const SingleArticle = ({ article }) => {
  const router = useRouter();
  //   const { id } = router.query;
  if (router.isFallback) {
    return <div>Loading article...</div>;
  }

  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const articles = await res.json();

  return {
    paths: articles.map((article) => {
      return { params: { id: article.id.toString() } };
    }),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default SingleArticle;
