import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 16,
    display: "flex",
    justifyContent: "space-between"
  },
  totalAmount: {
    display: "flex",
    justifyContent: "space-between"
  },
  content: {
    flexGrow: 1
  }
});

export default props => {
  const { code, rate, description, amount, onRemove } = props;

  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.content}>
        <div className={classes.totalAmount}>
          <Typography variant="h5">{code}</Typography>
          <Typography variant="h5">
            {(rate * amount).toLocaleString()}
          </Typography>
        </div>
        <Typography variant="body2" component="p">
          {code} - {description}
        </Typography>
        <Typography
          variant="body2"
          className={classes.pos}
          color="textSecondary"
        >
          1 USD = {code} {rate.toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
