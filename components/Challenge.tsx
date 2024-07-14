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
  link?: string;
  children: React.ReactNode;
}

export const Challenge: React.FC<ChallengeProps> = ({ competition, competitionLink, challenge, author, category, solves, points, children }) => {
  const metaPointScore = solves && points ? `${solves} solves / ${points} points` : solves ? `${solves} solves` : points ? `${points} points` : null;

  return (
    <div className="flex items-center justify-center">
      <div className={cx(
        "rounded-md p-4 border w-11/12",
        "bg-gray-100",
        "dark:bg-gray-800 dark:border-gray-700"
      )}>
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-xl mb-2 mt-0">{category ? category + " / " : null}{challenge}</h2>
            <p className="text-gray-700 text-base mt-0">{author}</p>
          </div>

          <div className="text-right">
            <p className="font-semibold mb-2 mt-0">{metaPointScore}</p>
            <a className="text-gray-700 text-base mt-0" target="_blank" rel="noopener noreferrer" href={competitionLink}>{competition}</a>
          </div>
        </div>

        <div className="mt-0">
          <Prose>{children}</Prose>
        </div>
      </div>
    </div>
    
  );
};
