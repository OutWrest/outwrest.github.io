import React from "react";
import { cx } from "@/lib/utils";

interface CenteredTableProps {
    title?: string;
    footer?: string;
    hideHeader?: boolean;
    children: React.ReactNode;
}

export const CenteredTable = ({
    title,
    footer,
    hideHeader = false,
    children,
}: CenteredTableProps) => {
    return (
        <div className="my-8 mx-auto w-fit max-w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
            {title && (
                <div className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-center font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
                    {title}
                </div>
            )}
            <div
                className={cx(
                    "overflow-x-auto p-0 [&_table]:m-0 [&_table]:w-full [&_table]:border-none",
                    hideHeader && "[&_thead]:hidden",
                    "[&_tbody>tr:first-child>td]:pt-3",
                    "[&_thead>tr>th]:pb-3 [&_thead>tr>th]:pt-3"
                )}
            >
                <div className="prose-table:my-0 prose-td:px-4 prose-th:px-4">
                    {children}
                </div>
            </div>
            {footer && (
                <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
                    {footer}
                </div>
            )}
        </div>
    );
};
