import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsData } from "store/projects/selectors";
import Modal from "components/Modal";
import DeleteModalLayout from "components/DeleteModalLayout";
import ResponseModalLayout from "components/ResponseModalLayout";
import ProjectForm from "scenes/ProjectForm";
import {
  fetchUpdateProjects,
  fetchDeleteProjects,
  setMessage,
} from "store/projects/actions";
import Project from "scenes/Home/components/Project";

const initialState = {
  updateModal: false,
  deleteModal: false,
  responseModal: false,
};

const Home = () => {
  const { currentProject, projects, error, message } = useSelector((state) =>
    getProjectsData(state)
  );
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

  const updateProject = (id: string | number) => (data: any) =>
    dispatch(fetchUpdateProjects(data, id));

  const deleteProject = (id: string | number) => () =>
    dispatch(fetchDeleteProjects(id));

  const projectFormInitialState = {
    project_name: currentProject ? currentProject.project_name : "",
    description: currentProject ? currentProject.description : "",
  };

  useEffect(() => {
    // это необходимо чтобы закрыть модальное окно после обновления проектов
    !error && setOpen(initialState);
    message && setOpen((state) => ({ ...state, responseModal: true }));
  }, [error, projects, currentProject, message]);

  return (
    <>
      <h1> My app </h1>

      {currentProject && (
        <>
          <Box height="80%" mt={3}>
            <Project
              currentProject={currentProject}
              handleUpdateModalToggle={handleModalToggle("updateModal")}
              handleDeleteModalToggle={handleModalToggle("deleteModal")}
            />
          </Box>
          <Modal
            handleClose={handleModalToggle("updateModal")}
            open={open.updateModal}
          >
            <div>
              <ProjectForm
                title="Update project"
                state={projectFormInitialState}
                actionCreator={updateProject(currentProject.id)}
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
export default Home;
