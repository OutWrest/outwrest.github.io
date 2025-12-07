import { useRouter } from "next/router";
import Image from "next/image";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { cx } from "@/lib/utils";
import { ThemeSelect } from "@/components/ThemeSelect";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <header className="py-8 flex justify-between items-center">
      <Link href="/" className="font-bold">
        {siteConfig.avatar ? (
          <span className="flex">
            <Image
              className="rounded-md"
              src={siteConfig.avatar}
              width={48}
              height={48}
              alt={siteConfig.siteName}
              priority
            />
          </span>
        ) : (
          siteConfig.siteName
        )}
      </Link>

      <nav className="flex items-center gap-6">
        <ul className="flex space-x-6">
          {siteConfig.nav.map((item, index) => {
            const isActive = item.href === pathname;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cx(
                    "text-sm font-medium transition-colors hover:text-pink-600",
                    isActive
                      ? "text-pink-600 dark:text-pink-400"
                      : "text-gray-600 dark:text-gray-400 dark:hover:text-pink-400"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="pl-6 border-l border-gray-200 dark:border-gray-800">
          <ThemeSelect />
        </div>
      </nav>
    </header>
  );
};
