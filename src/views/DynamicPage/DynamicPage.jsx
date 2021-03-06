import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { UnorderedListCard } from "components/UnorderedListCard/UnorderedListCard.jsx";
import { GitHubRepos } from "components/HomepageIcons/GitHubRepos/GitHubRepos.jsx";
import { DigitalOcean } from "components/HomepageIcons/DigitalOcean/DigitalOcean.jsx";
import { LinkedIn } from "components/HomepageIcons/LinkedIn/LinkedIn.jsx";
import { DockerPulls } from "components/HomepageIcons/DockerPulls/DockerPulls.jsx";
import { Npm } from "components/HomepageIcons/Npm/Npm.jsx";
import { FullGallery } from "components/FullGallery/FullGallery.jsx";
import { GoogleMaps } from "components/Maps/Maps.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import { UserCardButtons } from "components/UserCard/UserCardButtons.jsx";
import Links from "components/Links/Links";
import WorkExperience from "components/WorkExperience/WorkExperience";
import EducationInfo from "components/EducationInfo/EducationInfo";
import SkillsCard from "components/SkillsCard/SkillsCard";
import HighCharts from "components/HighCharts/HighCharts";
import Projects from "components/Projects/Projects";
import ProjectsHomepage from "components/ProjectsHomepage/ProjectsHomepage";
import mdEditor from "components/mdEditor/mdEditor";
import JSONFormatter from "components/JSONFormatter/JSONFormatter";
import { GitDockerNpm } from "components/HomepageIcons/GitDockerNpm/GitDockerNpm.jsx";

var Components = {
    'Links': Links,
    'Github': GitHubRepos,
    'Docker': DockerPulls,
    'LinkedIn': LinkedIn,
    'DigitalOcean': DigitalOcean,
    'Npm': Npm,
    'FullGallery': FullGallery,
    'UnorderedListCard': UnorderedListCard,
    'GoogleMaps': GoogleMaps,
    'UserCard': UserCard,
    'UserCardButtons': UserCardButtons,
    'SkillsCard': SkillsCard,
    'WorkExperience': WorkExperience,
    'EducationInfo': EducationInfo,
    'HighCharts': HighCharts,
    'Projects': Projects,
    'ProjectsHomepage': ProjectsHomepage,
    'mdEditor': mdEditor,
    'JSONFormatter': JSONFormatter,
    'GitDockerNpm': GitDockerNpm,
};

class DynamicPage extends Component{
    componentDidMount(){
      document.title = this.props.page.name + ' | ' + this.props.siteTitle;
    }

    renderElements(elements){
      var rtrnElements = elements.map(function(elementData, i){
        // Check if group
        if (Array.isArray(elementData.group)){

          // Process sub elements
          var subElements = elementData.group.map(function(elementData, i){

            // Build the component based on element defined inside the group
            var Component = Components[elementData['component']] || elementData['component'];

            // Return Component wrapped in Col and md value defined in the element.
            return <Col md={elementData.col.md} key={i}><Component {...elementData.props} {...elementData} /></Col>
          });

          // Return all child Components wrapped in a Col that is the 'Group'
          return (<Col md={elementData.col.md} style={{'padding':'0px'}} key={i}> {subElements} </Col>);

        } else {

          // Component is not a group, return it without further processing.
          var Component = Components[elementData['component']] || elementData['component'];
          return <Col md={elementData.col.md} key={i}><Component {...elementData.props} {...elementData} /></Col>
        }
      });
      return rtrnElements;
    }

    render() {

        // Process all the elements passed to this page
        var elements = this.renderElements(this.props.page["elements"]);
        return (
          <div className="content">
            <Grid fluid>
              <Row>
                {elements.map(function(element, i){
                  return element;
                })}
              </Row>
            </Grid>
          </div>
        );
    }
}

export default DynamicPage;
