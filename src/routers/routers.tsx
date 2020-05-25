import Auth from "scenes/Auth";
import ConfirmRegister from "scenes/ConfirmRegister";

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
    path: "/auth/:subpage",
    exact: true,
    component: Auth,
  },
  {
    path: "/auth/:token/confirm-register",
    exact: false,
    component: ConfirmRegister,
  },
];

export default routers;
