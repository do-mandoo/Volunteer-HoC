import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields({
  placeholder,
  label,
  name,
  type,
  onChange,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        label={label}
        name={name}
        type={type}
        style={{ margin: '8', width: 450 }}
        // helperText="Full width!"
        fullWidth
        // margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
        variant="outlined"
      />
      {/* <TextField
        required
        // id="standard-required"
        // placeholder={placeholder}
        label={label}
        name={name}
        type={type}
      /> */}
    </div>
  );
}
