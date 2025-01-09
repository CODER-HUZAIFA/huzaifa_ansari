import React from 'react'
import './project.css'
const Project = ({ projectName, projectLink }) => {
  return (
    <>
        <a href={projectLink} target='_blank'>
            <div className="project flex items-center justify-between w-[265px] h-[42px] border-[0.3px] border-black rounded-[5px]">
                <div className="projectImg border-r-[0.5px] w-[45px] border-black h-full flex justify-center items-center">
                    <img src="images/file.svg" alt="File" />
                </div>
                <div className="projectName h-full flex items-center justify-center">
                    <p>{ projectName }</p>
                </div>
            </div>
        </a>
    </>
  )
}

export default Project
