import { cx } from "@/lib/utils";
import { Prose } from "./Prose";
import 'katex/dist/katex.min.css'

interface MathProps {
  children: React.ReactNode;
}

export const Math: React.FC<MathProps> = ({ children }) => {
  // return (
  //   <div className={cx(
  //     "flex items-center justify-center rounded-md p-4 border w-11/12 not-prose border-0",
  //     "bg-gray-100",
  //     "dark:bg-gray-800"
  //   )}>
  //     {children}
  //   </div>
  // );
  return (
    <div className={cx(
      "flex items-center justify-center"
    )}>
      <div className={cx(
        "flex items-center justify-center rounded-md p-4 border w-11/12 not-prose border-0",
      )}>
        {children}
      </div>
    </div>
  );
};