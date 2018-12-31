import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

class QuantityField extends Component {
    startPressAndHold = (func) => {
      this.timer = setInterval(() => {
        func();
        if (this.props.amount <= 1 && func === this.props.remove) {
          clearInterval(this.timer);
        } 
      }, 150);
    }

    endPressAndHold = () => {
      clearInterval(this.timer);
    }

    render() {
      const { classes, amount, handleChange, add, remove, toDefault } = this.props;

      return (
        <FormControl className={classes.search}>
        
          <InputLabel 
            shrink 
            className={classes.formLabel}
            htmlFor="quantity-input"
          >
            Số lượng
          </InputLabel>

          <IconButton 
            onClick={remove} 
            disabled={amount <= 1} 
            aria-label="Remove" 
            onMouseDown={() => this.startPressAndHold(remove)} 
            onMouseUp={this.endPressAndHold}
            onMouseLeave={this.endPressAndHold}

            onTouchStart={() => this.startPressAndHold(remove)}
            onTouchCancel={this.endPressAndHold}
            onTouchMove={this.endPressAndHold}
            onTouchEnd={this.endPressAndHold}
            className={`${classes.inputButton} ${classes.leftButton}`} 
          >
            <RemoveIcon />
          </IconButton>

          <IconButton 
            onClick={add}
            aria-label="Add" 
            onMouseDown={() => this.startPressAndHold(add)} 
            onMouseUp={this.endPressAndHold}
            onMouseLeave={this.endPressAndHold}
            onTouchStart={() => this.startPressAndHold(add)}
            onTouchCancel={this.endPressAndHold}
            onTouchMove={this.endPressAndHold}
            onTouchEnd={this.endPressAndHold}
            className={`${classes.inputButton} ${classes.rightButton}`}
          >
            <AddIcon />
          </IconButton>

          <InputBase
            id="quantity-input"
            value={amount}
            onChange={handleChange}
            onBlur={toDefault}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              focused: classes.focused,
            }}
          />
        </FormControl>
      );
    }
}

const styles = theme => ({
    
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('border-color'),
    border: '1px solid rgba(0, 0, 0, 0.23)',
    '&:hover': {
      borderColor: '#4a90e2',
    },
    '&:focus-within': {
      borderColor: '#4a90e2',
    },
  }, 
  inputButton: {
    width: 48,
    height: 48,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButton: {
    left: 0,
  },
  rightButton: {
    right: 0,
  },

  inputRoot: {
    color: '#000',
    fontWeight: 300,
  },
  inputInput: {
    paddingRight: 58,
    paddingLeft: 58,
    width: 48,
    height: 35,
  },
  focused: {
    transition: theme.transitions.create('box-shadow'),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 0 0 0.15rem #4a90e2',
  },
  formLabel: {
    marginLeft: 48,
    marginTop: -10,
    padding: 5,
    backgroundColor: 'white',
  },
    
});

export default withStyles(styles)(QuantityField);
