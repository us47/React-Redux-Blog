import React from 'react';
import { connect } from 'react-redux';
import { addBlogCard } from '../Actions/blogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop:theme.spacing.unit *1,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }

});

class PostBlogUrl extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      url: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log("onchange")
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    console.log("onsubmit");
    e.preventDefault();
    this.props.addBlogCard(this.state.url);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Paper>
        <form onSubmit={this.onSubmit}>
        <Paper>
          <Paper elevation={12}>
          <Typography variant="display1" color="inherit" align="center">AntFant</Typography>
          </Paper>
          </Paper>
          <TextField 
            id="outlined-full-width"
            label="Enter Blog Url"
            style={{ marginTop:20,width:"100%"}}
            placeholder="https://antfant.in/top10-react-questions"
            margin="normal"
            variant="outlined"
            onChange={this.onChange}
            InputLabelProps={{
            shrink: true,
            
            }}
          />
        </form>
      </Paper>
      </div>
    );
  }
}

export default connect(null, { addBlogCard })(withStyles(styles)(PostBlogUrl));