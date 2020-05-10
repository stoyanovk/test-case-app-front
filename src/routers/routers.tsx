interface IRoute {
  path: string;
  component: any;
  exact?: boolean;
}

const routers: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: () => "HOME",
  },
];

export default routers;
