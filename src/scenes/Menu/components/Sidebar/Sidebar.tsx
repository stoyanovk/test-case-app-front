import React, { MouseEvent, useState } from "react";
import { Button, Divider, List, ListItem } from "@material-ui/core/";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Modal from "components/Modal";
import AddProjectForm from "scenes/Menu/scenes/AddProjectForm";
import Avatar from "../Avatar";
import Navbar from "../Navbar";
import useStyles from "./styles";

type userType = {
  user_name: string;
  email: string;
};

type SidebarProps = {
  projects: any[];
  user: userType;
  mobileOpen: boolean;
  error: boolean | null;
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
}: SidebarProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleModalToggle = () => setOpen(!open);

  React.useEffect(() => {
    !error && setOpen(false);
  }, [error, projects]);
  
  return (
    <>
      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}>
        <div className={classes.toolbar} />
        <Divider />
        <Avatar name={user.user_name} email={user.email} />
        <Divider />
        <List className={classes.list}>
          {!!projects.length &&
            projects.map(({ id, project_name }) => {
              return (
                <ListItem
                  id={id}
                  className={classes.listItem}
                  key={id}
                  onClick={handleClick}
                >
                  {project_name}
                </ListItem>
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
          <AddProjectForm />
        </div>
      </Modal>
    </>
  );
};
export default Sidebar;
