import type React from "react";

import s from "./ContentLayout.module.scss";

type ContentLayoutProps = {
  children: React.ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div className={s.block}>{children}</div>;
};
