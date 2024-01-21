import React from 'react'

export default function ProjectList(props) {
  const { projects } = props;
  
  return (
    <ul className='projectlist'>
      {projects.map((project, index) => {
        return <li className='projectlist__item' key={index}>
          <img src={project.img} alt={project.category} />
        </li>
      })}
    </ul>
  )
}
