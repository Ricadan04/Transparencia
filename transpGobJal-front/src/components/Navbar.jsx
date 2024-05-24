// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logoPlai_blanco.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//       <a href="https://plai.mx/" target="_blank" rel="noopener noreferrer">
//           <img src={logo} alt="Logo" className="h-8" />
//         </a>
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//         <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
//           <Link to="/login" className="text-white px-4 py-2">Administrador</Link>
//           <Link to="/" className="text-white px-4 py-2">Transparencia</Link>
//           {/* Agrega más enlaces aquí */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoPlai_blanco.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <a href="https://plai.mx/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Logo" className="h-8" />
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/login" className="text-white px-4 py-2 md:py-0 md:px-0 md:mr-4">Administrador</Link>
          <Link to="/" className="text-white px-4 py-2 md:py-0 md:px-0 md:mr-4">Transparencia</Link>
          {/* Agrega más enlaces aquí */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
