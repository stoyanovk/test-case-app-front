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
    path: "/auth",
    exact: true,
    component: Auth,
  },
  {
    path: "/auth/:token/confirm-register",
    exact: false,
    component: () => "confirm",
  },
];

export default routers;
