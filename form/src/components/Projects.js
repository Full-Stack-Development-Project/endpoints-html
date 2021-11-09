
import React from 'react'
import "./Projects.css"
import moment from 'moment'
function Projects({ project}) {
    return (
        <div className="projects">

            <div className="projects__first">
                <h3>projects</h3>
                <hr className="hr" />
            </div>
            <div className="projects__second">
                <div className="hr-line">
                    <hr className="hr-line-first" />
                    <hr className="hr-line-second" />
                </div>
                <table> 
                    <tbody>
                        {project?.map((value, index) => (
                            <tr className="projects__row" key={index}>
                                <td className="projects__row__year">
                                    
                                    <span>  {moment(value.project_start_date).format("MMM Do YY")}   -   {moment(value.project_finish_date).format("MMM Do YY")} </span> </td>

                                <td className="projects__row__details">
                                    <p> <span className="projects__course"> {value.project_name} </span></p>
                                    <p className="projects__courseLink">
                                        <a href={value.project_url} target="_blank">{value.project_url}</a>
                                    </p>
                                    <p>{value.project_description}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Projects
