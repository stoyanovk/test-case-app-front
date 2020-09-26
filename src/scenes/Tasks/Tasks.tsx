import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@material-ui/core";
import Container from "./components/Container";
import { getUserTasks } from "store/tasks/selectors";
import {
  fetchCurrentTask,
  fetchTasks,
  setMessage,
  fetchDeleteTasks,
  fetchUpdateTasks,
} from "store/tasks/actions";
import SimpleForm from "components/SimpleForm";
import DeleteModalLayout from "components/DeleteModalLayout";
import Modal from "components/Modal";
import ResponseModalLayout from "components/ResponseModalLayout";

const initialState = {
  updateModal: false,
  deleteModal: false,
  responseModal: false,
};

function Tasks() {
  const {
    project_id,
    task_id,
  }: { project_id: string; task_id: string } = useParams();
  const { tasks, error, currentTask, message } = useSelector(getUserTasks);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(initialState);
  //modal methods
  const handleModalToggle = (
    name: "updateModal" | "deleteModal" | "responseModal"
  ) => () => {
    setOpen((state) => ({ ...state, [name]: !state[name] }));
  };

  const handleCloseResponseModal = () => {
    dispatch(setMessage(""));
    setOpen((state) => ({ ...state, responseModal: false }));
  };

  // change tasks methods
  const updateTask = (id: string) => (data: any) => {
    dispatch(fetchUpdateTasks(data, id));
  };

  const deleteTasks = (id: string) => () => dispatch(fetchDeleteTasks(id));

  React.useEffect(() => {
    dispatch(fetchTasks(project_id));

    //I need only Component did mounte effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project_id]);

  React.useEffect(() => {
    //I don't  need strict equality in string 63
    // eslint-disable-next-line eqeqeq
    if (currentTask?.id != task_id) {
      dispatch(fetchCurrentTask(task_id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task_id, tasks]);

  React.useEffect(() => {
    //close update modal after update task
    setOpen(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask,tasks]);
  
  const tasksFormInitialState = {
    task_name: currentTask?.task_name || "",
    description: currentTask?.description || "",
  };

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <h1>Tasks</h1>
      {!currentTask ? (
        <CircularProgress size={200} />
      ) : (
        <>
          <Box height="80%" mt={3}>
            <Container
              tasks={tasks}
              updateTaskModalToggle={handleModalToggle("updateModal")}
              deleteTaskModalToggle={handleModalToggle("deleteModal")}
            />
          </Box>
          <Modal
            handleClose={handleModalToggle("updateModal")}
            open={open.updateModal}
          >
            <div>
              <SimpleForm
                title="Update task"
                state={tasksFormInitialState}
                onSubmit={updateTask(currentTask.id)}
              />
            </div>
          </Modal>
          <Modal
            handleClose={handleModalToggle("deleteModal")}
            open={open.deleteModal}
          >
            <div>
              <DeleteModalLayout
                label={currentTask?.task_name || ""}
                onClose={handleModalToggle("deleteModal")}
                actionCreator={deleteTasks(currentTask.id)}
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
}
export default React.memo(Tasks);
