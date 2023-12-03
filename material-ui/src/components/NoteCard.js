import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "work") {
        return "1px solid red";
      }
    },
  },
  style: {
    margin: 20,
  },
});

function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.tile}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
