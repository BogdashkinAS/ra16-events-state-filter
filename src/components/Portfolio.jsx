import React from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { projects } from './data/Projects';

export class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.list = projects;
    this.state = {
      projects: projects,
      selected: "All",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(filter) {
    let list = this.list;

    if (filter !== "All") {
      list = this.list.filter(
        (project) => project.category === filter
      );
    }

    this.setState({
      projects: list,
      selected: filter,
    });
  }

  render() {
    const { selected, projects } = this.state;

    return (
      <div>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={selected}
          onSelectFilter={this.handleClick}
        />
        <ProjectList projects={projects} />
      </div>
    );
  }
}