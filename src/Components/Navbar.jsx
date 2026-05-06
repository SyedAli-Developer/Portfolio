import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#0d1427] py-4 px-16  flex justify-between items-center fixed w-full">
        <div>
<img src="../assets/SyedALi-Image.png"  alt="" />
      <h1 className="text-[#818cf8] text-2xl font-bold">Syed Ali</h1>
        </div>
      
      <ul className="flex gap-6">
        <li className="text-[#e7e8e9] hover:text-white cursor-pointer">Home</li>
        <li className="text-[#9a9c9e] hover:text-white cursor-pointer">Projects</li>
        <li className="text-[#9a9c9e] hover:text-white cursor-pointer">About</li>
        <li className="text-[#9a9c9e] hover:text-white cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
