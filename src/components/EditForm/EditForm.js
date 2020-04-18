import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import './EditForm.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, that) {
    return {
      fontWeight:
        that.state.genre.indexOf(name) === -1
          ? that.props.theme.typography.fontWeightRegular
          : that.props.theme.typography.fontWeightMedium,
    };
}

class EditForm extends React.Component {

  state = {
    genre: [],
    title: this.props.details[0].title,
    poster: this.props.details[0].poster,
    description: this.props.details[0].description,
    multiline: 'Controlled',
  };

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value,
    });
    this.props.grabState(input, event);
  };

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      genre: value,
    });
  };

  render() {

    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          label="Title"
          onChange={this.handleChange('title')}
          style={{ margin: 8 }}
          fullWidth
          value={this.state.title}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl id="form-control" className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Genre(s)</InputLabel>
          <Select
            multiple
            value={this.state.genre}
            onChange={this.handleChange('genre')}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {names.map(name => 
              <MenuItem key={name} value={name} style={getStyles(name, this)}>
                {name}
              </MenuItem>
            )}
          </Select>
        </FormControl>
        
        <TextField
          id="outlined-full-width"
          label="Poster URL"
          onChange={this.handleChange('poster')}
          style={{ margin: 8 }}
          fullWidth
          value={this.state.poster}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Description"
          onChange={this.handleChange('description')}
          multiline
          fullWidth
          value={this.state.description}
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

EditForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const putStateOnProps = (reduxStore) => ({
  details: reduxStore.details
})

export default connect(putStateOnProps)(withStyles(styles, { withTheme: true })(EditForm));
