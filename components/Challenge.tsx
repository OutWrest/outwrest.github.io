import { cx } from "@/lib/utils";
import { Prose } from "./Prose";

interface ChallengeProps {
  competition?: string;
  competitionLink?: string;
  challenge?: string;
  author?: string;
  category?: string;
  solves?: string;
  points?: string;
  children: React.ReactNode;
}

export const Challenge = ({
  competition,
  competitionLink,
  challenge,
  author,
  category,
  solves,
  points,
  children,
}: ChallengeProps) => {
  const meta = solves && points
    ? `${solves} solves / ${points} points`
    : solves
    ? `${solves} solves`
    : points
    ? `${points} points`
    : null;

  return (
    <div className="flex justify-center">
      <div
        className={cx(
          "w-full max-w-3xl rounded-md border p-4",
          "bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
        )}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <div className="min-w-0">
            <h2 className="mb-0 mt-0 break-words text-xl font-bold">
              {category && `${category} / `}{challenge}
            </h2>
            {author && (
              <p className="mt-0 text-base text-gray-700 dark:text-gray-300">
                {author}
              </p>
            )}
          </div>

          <div className="shrink-0 text-sm sm:text-right">
            {meta && <p className="mb-1 mt-0 font-semibold">{meta}</p>}
            {competition && (
              <a
                href={competitionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline dark:text-pink-400"
              >
                {competition}
              </a>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Prose>{children}</Prose>
        </div>
      </div>
    </div>
  );
};
