import { BasicLayoutProps } from ".";

// TODO add footer and navbar dimensions
export type NavBarProps = BasicLayoutProps & {
  gridTemplateColumns?: string;
  gridTemplateAreas?: string;
};
