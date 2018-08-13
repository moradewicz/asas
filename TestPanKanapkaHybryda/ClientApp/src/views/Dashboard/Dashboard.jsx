import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Info from "components/Typography/Info.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import logo1 from "assets/img/faces/psc.png";
import logo2 from "assets/img/faces/tran.png";
import logo3 from "assets/img/faces/ttms.png";
import CardAvatar from "components/Card/CardAvatar.jsx";
import { bugs, website, server } from "variables/general";
import Button from "components/CustomButtons/Button.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon>
                  <CardAvatar profile>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={logo1} alt="..." />
                    </a>
                  </CardAvatar>
                </CardIcon>
              </CardHeader>

              <CardBody>
                <h3 className={classes.cardTitle}>TT PSC</h3>
                <p className={classes.cardTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                </p>
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Icon>exit_to_app</Icon>
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Leave group
                  </a>
                </div>
                <div className={classes.stats}>
                  <Info>
                    <Icon>group</Icon>
                  </Info>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    12
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon>
                  <CardAvatar profile>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={logo2} alt="..." />
                    </a>
                  </CardAvatar>
                </CardIcon>
              </CardHeader>

              <CardBody>
                <h3 className={classes.cardTitle}>Transition Technologies</h3>
                <p className={classes.cardTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                </p>
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Icon>exit_to_app</Icon>
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Leave group
                  </a>
                </div>
                <div className={classes.stats}>
                  <Info>
                    <Icon>group</Icon>
                  </Info>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    24
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon>
                  <CardAvatar profile>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={logo3} alt="..." />
                    </a>
                  </CardAvatar>
                </CardIcon>
              </CardHeader>

              <CardBody>
                <h3 className={classes.cardTitle}>TT Managed Services</h3>
                <p className={classes.cardTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                </p>
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Icon>exit_to_app</Icon>
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Leave group
                  </a>
                </div>
                <div className={classes.stats}>
                  <Info>
                    <Icon>group</Icon>
                  </Info>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    27
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <Button color="primary">Create new group</Button>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
