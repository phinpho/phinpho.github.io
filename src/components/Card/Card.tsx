import { PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<{
  title?: string;
}>;

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="flex flex-col b-1 rounded-xl b-solid p-4 text-center dark:b-light light:b-dark dark:bg-white:10 light:bg-black:10">
      {title && <h2 className="m-b-2 m-t-0 p-0 font-semibold">{title}</h2>}
      {children}
    </div>
  );
};
