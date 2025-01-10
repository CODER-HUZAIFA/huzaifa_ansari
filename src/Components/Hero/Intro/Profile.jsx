import React from 'react'

const Profile = () => {
  return (
    <>
        <div className="main border-[0.5px] border-black w-fit h-[235px]">
            <div className="w-full">
                <img src="images/profile_image.svg" alt="Huzaifa Ansari" />
            </div>
            <div className="profileList w-full h-[25px] flex justify-around items-center">
                <img src="images/instagram.svg" alt="" className='w-[15px] h-[15px]'/>
                <img src="images/linkedin.svg" alt="" className='w-[15px] h-[15px]'/>
                <img src="images/github.svg" alt="" className='w-[15px] h-[15px]'/>
            </div>
        </div>
    </>
  )
}

export default Profile
