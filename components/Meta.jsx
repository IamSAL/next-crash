import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev News",
  description: "WebDev Newz is a news portal for web developers",
  keywords: "web development, news, blog, tuts",
};

export default Meta;
