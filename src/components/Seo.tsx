import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export const Seo = ({ title, description, path, image, type = "website", jsonLd }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={path} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={path} />
    <meta property="og:type" content={type} />
    {image && <meta property="og:image" content={image} />}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
  </Helmet>
);

export default Seo;
