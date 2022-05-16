import { ReactNode } from "react";

export type WithLayout = {
  getLayout?: (page: ReactNode) => ReactNode;
};
