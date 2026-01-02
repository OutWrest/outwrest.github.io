import Head from "next/head";
import { useRouter } from "next/router";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/data/siteConfig";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";

interface PageProps {
  date?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  date,
  title,
  description,
  thumbnail,
  children,
}) => {
  const router = useRouter();
  const metaTitle = onlyText(title);
  const metaDescription = description
    ? onlyText(description)
    : siteConfig.siteDescription;
  const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
  const customTitle = `${metaTitle} - ${siteConfig.siteName}`;
  const currentPath = router.asPath.split("?")[0];
  const currentUrl = `${siteConfig.siteUrl}${currentPath === "/" ? "" : currentPath
    }`;
  const imageUrl = `${siteConfig.siteUrl}${metaThumbnail}`;

  const jsonLd = date
    ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: metaTitle,
      description: metaDescription,
      image: [imageUrl],
      datePublished: date,
      author: {
        "@type": "Person",
        name: siteConfig.siteName,
      },
      url: currentUrl,
    }
    : {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metaTitle,
      description: metaDescription,
      url: currentUrl,
    };

  return (
    <>
      <Head>
        <title>{customTitle}</title>
        <link rel="canonical" href={currentUrl} />

        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteConfig.siteName} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content={date ? "article" : "website"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl} />

        <meta name="description" content={metaDescription} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <header
        className={cx(
          "mb-8 pb-8 border-b",
          "border-gray-200",
          "dark:border-gray-700"
        )}
      >
        {date ? (
          <time
            className={cx("block mb-2", "text-gray-500", "dark:text-gray-400")}
          >
            {formatDate(date)}
          </time>
        ) : null}
        <h1 className="font-bold text-3xl">{title}</h1>
        {description ? (
          <div className="mt-4">
            <Prose>
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </Prose>
          </div>
        ) : null}
      </header>
      {children}
    </>
  );
};
