import React from 'react'
import Project from './Project'

const ProjectHandle = () => {
  return (
    <>
        <div className="mainProject w-full mt-[30px] px-[150px] py-[20px] flex flex-col ">
            <div className="projectHeading flex gap-[10px]">
                <img src="images/arrow.svg" alt="" />
                <p>Projects</p>
            </div>
            <div className="flex ml-[20px] mt-[16px]">
                <div className="flex flex-col gap-[16px]">
                    <Project projectLink={'https://github.com/CODER-HUZAIFA/hotel_management_software.git'} projectName='Hotel Management Software'/>
                    <Project projectLink={'https://github.com/CODER-HUZAIFA/blogging_website.git'} projectName='Blogging Website'/>
                    <Project projectLink={'https://habibirestaurantkheda.com'} projectName='Habibi Restaurant Website'/>
                </div>
                <div className="projectTxt mt-[20px] mx-[150px]">
                    <p className='A'>I am not a</p>
                    <p className='B'>Project Factory</p>
                    <p className='C'>I work on projects that they can shape the <span className='future'>Future</span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectHandle
