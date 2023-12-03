import { Grid, Paper, Container } from "@material-ui/core";
import { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid item key={note.id} md={3} xs={12} sm={6}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
