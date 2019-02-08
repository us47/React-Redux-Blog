import React from 'react';
import mockBlogCardApi from '../api/mockBlogCardApi';
import { connect } from 'react-redux';
import { getBlogCards } from '../Actions/blogActions';
import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import GridLayoutComponent from "./GridLayoutComponent";

class BlogCard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.getBlogCards();
  }

  render() {
    const { classes } = this.props;
    const blogItems = this.props.blogs.map(blog => (
      <Grid item sm={6} md={4} lg={3}>
        <Paper>
          <MediaCard
            className = "MediaCard"
            title={blog.title}
            thumbnail={blog.thumbnail}
            summary={blog.summary} />
        </Paper>
      </Grid>
    ))
    return (
      /*<Grid container spacing={24}>
        {blogItems}

      </Grid> */
      <GridLayoutComponent cards={this.props.blogs} />
    )
  }
}


const mapStateToProps = (state) => ({
  blogs: state.blogCardReducer.blogs
});

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    display: "flex",
    //flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
});

export default connect(mapStateToProps, { getBlogCards })(BlogCard);
