import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsData } from "store/projects/selectors";
import Modal from "components/Modal";
import DeleteModalLayout from "components/DeleteModalLayout";
import ResponseModalLayout from "components/ResponseModalLayout";
import SimpleForm from "components/SimpleForm";
import Container from "scenes/Projects/components/Container";

import {
  fetchCurrentProject,
  fetchUpdateProjects,
  fetchDeleteProjects,
  setMessage,
} from "store/projects/actions";

const initialState = {
  updateModal: false,
  deleteModal: false,
  responseModal: false,
};

const Projects = () => {
  const { currentProject, projects, error, message } = useSelector(
    getProjectsData
  );
  const { project_id } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(initialState);

  const handleModalToggle = (
    name: "updateModal" | "deleteModal" | "responseModal"
  ) => () => {
    setOpen((state) => ({ ...state, [name]: !state[name] }));
  };

  const handleCloseResponseModal = () => {
    dispatch(setMessage(""));
    setOpen((state) => ({ ...state, responseModal: false }));
  };

  const updateProject = (id: string) => (data: any) =>
    dispatch(fetchUpdateProjects(data, id));

  const deleteProject = (id: string) => () => dispatch(fetchDeleteProjects(id));

  const projectFormInitialState = {
    project_name: currentProject ? currentProject.project_name : "",
    description: currentProject ? currentProject.description : "",
  };

  useEffect(() => {
    //this is necessary to close the modal mode after updating projects
    if (!error) {
      setOpen(initialState);
    }
    if (message) {
      setOpen((state) => ({ ...state, responseModal: true }));
    }
    if (!currentProject) {
      dispatch(fetchCurrentProject(project_id));
    }
  }, [error, projects, currentProject, message, dispatch, project_id]);

  return (
    <>
      <h1> Projects </h1>

      {currentProject && (
        <>
          <Box height="80%" mt={3}>
            <Container
              currentProject={currentProject}
              handleUpdateProjectModalToggle={handleModalToggle("updateModal")}
              handleDeleteProjectModalToggle={handleModalToggle("deleteModal")}
            />
          </Box>

          <Modal
            handleClose={handleModalToggle("updateModal")}
            open={open.updateModal}
          >
            <div>
              <SimpleForm
                title="Update project"
                state={projectFormInitialState}
                onSubmit={updateProject(currentProject.id)}
              />
            </div>
          </Modal>
          <Modal
            handleClose={handleModalToggle("deleteModal")}
            open={open.deleteModal}
          >
            <div>
              <DeleteModalLayout
                label={currentProject.project_name}
                onClose={handleModalToggle("deleteModal")}
                actionCreator={deleteProject(currentProject.id)}
              />
            </div>
          </Modal>
          <Modal
            handleClose={handleModalToggle("responseModal")}
            open={open.responseModal}
          >
            <div>
              <ResponseModalLayout
                message={message}
                onClose={handleCloseResponseModal}
              />
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default Projects;
