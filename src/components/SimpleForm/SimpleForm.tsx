import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useCallback,
  memo,
} from "react";
import { Button, Container, Paper, Box, Typography } from "@material-ui/core";
import Editor from "components/Editor";
import TextField from "@material-ui/core/TextField";

type stateType = {
  [key: string]: string;
};
type simpleFormPropsType = {
  state: stateType;
  title: string;
  onSubmit: (value: stateType) => void;
};
function SimpleForm({ state, onSubmit, title }: simpleFormPropsType) {
  const [formState, setFormState] = useState<stateType>(state);

  const setEditorValue = (name: string) => (value: string) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };
  const setInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormState((state) => ({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };
  const fieldNames: string[] = Object.keys(formState);

  return (
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Box p={3}>
          <Box mb={2}>
            <Typography variant="h4">{title}</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                fullWidth
                variant="outlined"
                required
                label="Name"
                value={formState[fieldNames[0]]}
                name={fieldNames[0]}
                onChange={setInputValue}
              />
            </Box>
            <Box mb={2}>
              <Editor
                value={formState[fieldNames[1]]}
                onChange={setEditorValue(fieldNames[1])}
              />
            </Box>
            <Button variant="contained" color="primary" type="submit">
              add
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}
export default memo(SimpleForm);
