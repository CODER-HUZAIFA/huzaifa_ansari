import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="main border-[0.5px] border-black w-fit h-[235px]">
        <div className="w-full">
          <img src="images/profile_image.svg" alt="Huzaifa Ansari" />
        </div>
        <div className="profileList w-full h-[25px] flex justify-around items-center">
          <a href="https://www.instagram.com/huzaifa_ansari_982/"> <img src="images/instagram.svg" alt="" className='w-[15px] h-[15px]' /></a>
          <a href="https://www.linkedin.com/in/ansari-huzaifa-7642b52b0/"><img src="images/linkedin.svg" alt="" className='w-[15px] h-[15px]' /></a>
          <a href="https://github.com/CODER-HUZAIFA"><img src="images/github.svg" alt="" className='w-[15px] h-[15px]' /></a>
        </div>
      </div>
    </>
  )
}

export default Profile
