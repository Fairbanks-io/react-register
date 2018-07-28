import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 250,
    minHeight: 250,
    marginBottom: 20
  },
  appBar: {
    width: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class Projects extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount(){
    //console.log(JSON.stringify(this.props, null, ' '));
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {this.props.tabs.map(function(tab, i){
              return <Tab label={tab.tabname} key={i} />;
            })}
          </Tabs>
        </AppBar>

        {this.props.tabs.map(function(tab, i){
          return (
            value === i && <TabContainer key={i}>
            <Grid fluid>
              <Row>
                {tab.items.map(function(item, i){
                  return (
                    <Col xs={12} sm={12} md={2} lg={2} key={i}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image={item.img}
                          title={item.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="headline" component="h2">
                            {item.name}
                          </Typography>
                          <Typography component="p">
                            {item.desc}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {item.buttonText1
                            ? <Button size="small" color="primary">
                              <span>{item.buttonText1}</span>
                            </Button>
                            : null
                          }
                          {item.buttonText2
                            ? <Button size="small" color="primary">
                              <span>{item.buttonText2}</span>
                            </Button>
                            : null
                          }
                        </CardActions>
                      </Card>
                    </Col>
                  );
                })}
                </Row>
              </Grid>
            </TabContainer>
          );
        })}
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);