import React from 'react'
import './Technologies.css'

const TechnolgiesHandle = () => {
    return (
        <>
            <div className="mainTechnologies flex flex-col mt-[30px] w-full px-[50px] py-[20px]">
                <div className="technologiesHeading flex gap-[10px]">
                    <img src="images/arrow.svg" alt="" />
                    <p>Technologies on I work</p>
                </div>
                <div className="allTechno flex w-full flex-wrap gap-[30px] mt-[25px] ml-[20px]">
                    <img src="images/technologies/nodejs.svg" alt="" />
                    <img src="images/technologies/react.svg" alt="" />
                    <img src="images/technologies/python.svg" alt="" />
                    <img src="images/technologies/js.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default TechnolgiesHandle
