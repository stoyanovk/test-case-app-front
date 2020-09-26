import React, { MouseEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Divider, List } from "@material-ui/core/";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IProjects, IUser } from "interfaces/entities";
import Modal from "components/Modal";
import SimpleForm from "components/SimpleForm";
import Avatar from "../Avatar";
import Navbar from "../Navbar";
import { createProjectStateType } from "scenes/Menu/Menu";
import useStyles from "./styles";

type SidebarProps = {
  createProjectState: createProjectStateType;
  projects: IProjects;
  user: IUser | null;
  mobileOpen: boolean;
  error: boolean | null;
  onSubmit: (data: { [key: string]: string }) => void;
  handleClick: (e: MouseEvent) => void;
  handleDrawerToggle: () => void;
};

const Sidebar = ({
  user,
  mobileOpen,
  handleClick,
  handleDrawerToggle,
  projects,
  error,
  createProjectState,
  onSubmit,
}: SidebarProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { push } = useHistory();
  const handleModalToggle = () => setOpen(!open);
  const onClick = (e: MouseEvent) => {
    handleClick(e);
    push(`/projects/${e.currentTarget.id}`);
  };
  React.useEffect(() => {
    !error && setOpen(false);
  }, [error, projects]);
  if (!user) {
    return <div>oops!</div>;
  }
  return (
    <>
      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}>
        <div className={classes.toolbar} />
        <Divider />
        <Avatar name={user?.user_name} email={user?.email} />
        <Divider />
        <List className={classes.list}>
          {!!projects.length &&
            projects.map(({ id, project_name }) => {
              return (
                <li
                  id={id}
                  className={classes.listItem}
                  key={id}
                  onClick={onClick}
                >
                  {project_name}
                </li>
              );
            })}
        </List>
        <Divider />
        <Button
          onClick={handleModalToggle}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddCircleIcon />}
        >
          add project
        </Button>
      </Navbar>
      <Modal handleClose={handleModalToggle} open={open}>
        <div>
          <SimpleForm
            title="Add project"
            state={createProjectState}
            onSubmit={onSubmit}
          />
        </div>
      </Modal>
    </>
  );
};
export default Sidebar;
