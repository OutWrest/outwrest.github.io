import { useState } from "react";
import { Search } from "react-feather";
import type { MDXFrontMatter } from "@/lib/types";
import { PostList } from "@/components/PostList";
import { cx } from "@/lib/utils";

interface SearchPostsProps {
  allPosts: Array<MDXFrontMatter>;
  defaultPosts: Array<MDXFrontMatter>;
  children?: React.ReactNode;
}

export const SearchPosts: React.FC<SearchPostsProps> = ({
  allPosts,
  defaultPosts,
  children,
}) => {
  const [query, setQuery] = useState("");
  const isSearching = query.trim().length > 0;

  const filteredPosts = allPosts.filter((post) => {
    const searchLower = query.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(searchLower);
    const descMatch = (post.description ?? "").toLowerCase().includes(searchLower);
    const tagMatch = (post.tags ?? []).some((tag) =>
      tag.toLowerCase().includes(searchLower)
    );
    return titleMatch || descMatch || tagMatch;
  });

  return (
    <div>
      <div className="mb-8">
        <div className="relative">
          <Search
            className={cx(
              "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
              "text-gray-400",
              "dark:text-gray-500"
            )}
          />
          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className={cx(
              "w-full pl-10 pr-4 py-2 rounded-md border text-sm",
              "bg-white border-gray-200 text-gray-900 placeholder-gray-400",
              "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-500",
              "focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            )}
          />
        </div>
      </div>

      {isSearching ? (
        filteredPosts.length > 0 ? (
          <PostList posts={filteredPosts} />
        ) : (
          <p
            className={cx(
              "text-center text-sm",
              "text-gray-500 dark:text-gray-400"
            )}
          >
            No posts found
          </p>
        )
      ) : (
        <>
          <PostList posts={defaultPosts} />
          {children}
        </>
      )}
    </div>
  );
};
