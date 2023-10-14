export interface IBreadCrumbs {
  url: string;
  title: string;
  active: boolean;
}

export interface IBreadCrumbsProps {
  data: IBreadCrumbs[];
}
