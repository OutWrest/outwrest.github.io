import { GitHub } from "react-feather";
import siteConfig from "@/data/siteConfig";
import { cx } from "@/lib/utils";
import { GoogleAnalytics } from '@next/third-parties/google'

const iconProps = { className: "w-4 h-4" };

const SOCIAL_ICONS: { [key: string]: React.ReactNode } = {
  github: <GitHub {...iconProps} />,
};

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8">
      {siteConfig.social ? (
        <ul className="flex justify-center space-x-4">
          {Object.entries(siteConfig.social).map(([key, href]) => {
            return (
              <li key={key}>
                <a
                  href={href}
                  className={cx(
                    "w-8 h-8 grid place-items-center rounded-md transition-colors",
                    "bg-gray-100 text-gray-600 hover:bg-gray-200",
                    "dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  )}
                  title={key}
                  aria-label={`Link to ${key}`}
                >
                  {SOCIAL_ICONS[key]}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
      <div className="mt-8 flex justify-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} {siteConfig.siteName}
      </div>
      <GoogleAnalytics gaId="G-XHCSFRQE7R" />
    </footer>
  );
};
