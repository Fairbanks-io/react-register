import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export class CardNoFooter extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {500: '#234323'},
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <div className={"card" + (this.props.plain ? " card-plain" : "")}>
          <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
            <h4 className="title">{this.props.title}</h4>
            <p className="category">{this.props.category}</p>
          </div>
          <div
            className={
              "content" +
              (this.props.ctAllIcons ? " all-icons" : "") +
              (this.props.ctTableFullWidth ? " table-full-width" : "") +
              (this.props.ctTableResponsive ? " table-responsive" : "") +
              (this.props.ctTableUpgrade ? " table-upgrade" : "")
            }
          >
            {this.props.content}
          </div>
          {this.props.moreLink ?
            <div className="text-center">
              <hr style={{'margin':'5px 15px'}}/>
              <a href={this.props.moreLink}>
                <Button size="large" color="primary" style={{'margin':'5px 15px 10px 10px', 'borderWidth':'1px', 'color':'#234323', 'borderColor':'#234323', 'width':'50%'}}>
                  <span style={{'paddingLeft':'10px', 'fontSize':'1.1rem'}}>View More</span>
                </Button>
              </a>
            </div>
          :null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CardNoFooter;
