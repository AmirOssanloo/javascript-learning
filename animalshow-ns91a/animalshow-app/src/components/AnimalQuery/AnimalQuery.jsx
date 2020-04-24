import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'
import Button from '#shared/CoreUI/Button';
import TextField from '#shared/TextField';
import FormGroup from '#shared/FormGroup';
import FormControl from '#shared/FormControl';
import FormControlLabel from '#shared/FormControlLabel';
import Switch from '#shared/Switch';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f1f1f1',
    maxWidth: '30rem',
    padding: '4rem 3rem',
    borderRadius: '0.4rem'
  }
});

const AnimalQuery = ({ onChangeToAnimalDisplay: pushChangeToAnimalDisplay }) => {
  const classes = useStyles();
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = ({ name, title, cats, foxes, dogs }) => {
    console.log(name, title, cats, foxes, dogs);
    pushChangeToAnimalDisplay();
    reset();
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="name"
          type="text"
          placeholder="Balrog Kaelwaar"
          variant="filled"
          autoComplete="off"
          inputRef={register({ requirerd: 'Required' })} />
        <TextField
          name="title"
          type="text"
          placeholder="Animal Trainer"
          variant="filled"
          autoComplete="off"
          inputRef={register({ requirerd: 'Required' })} />
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              name="cats"
              label="Cats"
              control={<Switch color="primary" />}
              inputRef={register} />
            <FormControlLabel
              name="foxes"
              label="Foxes"
              control={<Switch color="primary" />}
              inputRef={register} />
            <FormControlLabel
              name="dogs"
              label="Dogs"
              control={<Switch color="primary" />}
              inputRef={register} />
          </FormGroup>
        </FormControl>
        <Button type="submit">Hello</Button>
      </form>
    </div>
  );
};

export default AnimalQuery;
