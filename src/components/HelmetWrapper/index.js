import { Helmet } from "react-helmet-async";

function HelmetWrapper({ title, canonical, keywords, description, children }) {
  return (
    <Helmet titleTemplate="%s | BB Docs">
      <title>{title}</title>
      <meta name="keywords" content={`bb docs, bbdocs, contratação bb, contratação banco do brasil, ${keywords}`} />
      {description && (
        <meta name="description" content={description} />
      )}
      {canonical && (
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/${canonical}`} />
      )}
      {children}
    </Helmet>
  );
}

export default HelmetWrapper;
