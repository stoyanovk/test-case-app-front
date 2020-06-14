import Home from "scenes/Home";

interface IRoute {
  path: string;
  component: any;
  exact?: boolean;
}

const routers: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
];

export default routers;
