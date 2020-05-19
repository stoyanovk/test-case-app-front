import Auth from "scenes/Auth";
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
  {
    path: "/auth/:subRoute",
    exact: true,
    component: Auth,
  },
];

export default routers;
