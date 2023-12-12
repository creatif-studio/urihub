// import React, { useEffect, useState } from 'react'
// import { getUserUrlById } from '../../hooks/GetUserUrl'
// import { context } from '../../context/Context'
// import { account } from '../../config/appwriteConfig'
// import ItemProfileDrop from '../../elements/ItemProfileDrop'
// import ItemProfileDropdown from '../../mocks/profiledropdown.json'

// export default function ProfileDropdown() {
//   const { user } = context()
//   const [dataUser, setDataUser] = useState()
//   const [userlogin, setUserLogin] = useState(user)

//   useEffect(() => {
//     fetchData()
//   }, [])

//   async function fetchData() {
//     try {
//       const response = await getUserUrlById(user.$id)
//       setDataUser(response.username)
//     } catch (err) {
//       throw err
//     }
//   }

//   async function logoutUser() {
//     await account.deleteSession('current');
//     setUserLogin(null)
//   }

//   return (
//     <div className='bg-white w-80 rounded rounded-xl p-4'>
//       <div className='flex items-center'>
//         <div>
//           <p className='bg-gray-200 flex items-center justify-center w-10 h-10 rounded rounded-full'>{dataUser ? dataUser[0].toUpperCase() : ""}</p>
//         </div>
//         <div className='ms-2'>
//           <p className='font-bold'>@{dataUser}</p>
//           <p className='text-sm text-gray-500'>linktr.ee/{dataUser}</p>
//         </div>
//       </div>

//       <div>
//         { ItemProfileDropdown.map((data, index) => (
//           <div key={index}>
//             <ItemProfileDrop title={data.title} content={data.content}/>
//           </div>
//         ))}
//       </div>

      
//       <div className=' keep-open'>
//       <div className='flex items-center mb-2 p-2 hover:bg-gray-100 rounded cursor-pointer dropdown-item'>
//         <i className="fa-solid fa-arrow-right-from-bracket"></i>
//         {/* <p className='ms-4'>Sign out</p> */}
//         <button onClick={logoutUser} className="btn ms-4">Logout</button>
//       </div>
//       </div>
//     </div>
//   )
// }


// import React, { useEffect, useState } from 'react'
// import { getUserUrlById } from '../../hooks/GetUserUrl'
// import { context } from '../../context/Context'
// import { account } from '../../config/appwriteConfig'
// import ItemProfileDrop from '../../elements/ItemProfileDrop'
// import ItemProfileDropdown from '../../mocks/profiledropdown.json'

// export default function ProfileDropdown() {
//   const { user } = context();
//   const [dataUser, setDataUser] = useState();
//   const [userlogin, setUserLogin] = useState(user);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await getUserUrlById(user.$id);
//       setDataUser(response.username);
//     } catch (err) {
//       throw err;
//     }
//   }

//   async function logoutUser() {
//     await account.deleteSession('current');
//     setUserLogin(null);
//   }

//   return (
//     <div className='bg-white w-80 rounded rounded-xl p-4 keep-open'>
//       <div className='flex items-center'>
//         <div>
//           <p className='bg-gray-200 flex items-center justify-center w-10 h-10 rounded rounded-full'>{dataUser ? dataUser[0].toUpperCase() : ""}</p>
//         </div>
//         <div className='ms-2'>
//           <p className='font-bold'>@{dataUser}</p>
//           <p className='text-sm text-gray-500'>linktr.ee/{dataUser}</p>
//         </div>
//       </div>

//       <div>
//         {ItemProfileDropdown.map((data, index) => (
//           <div key={index}>
//             <ItemProfileDrop title={data.title} content={data.content} />
//           </div>
//         ))}
//       </div>

//       {userlogin && (
//         <div className='flex items-center mb-2 p-2 hover-bg-gray-100 rounded cursor-pointer'>
//           <i className="fa-solid fa-arrow-right-from-bracket"></i>
//           <button onClick={logoutUser} className="btn ms-4">Logout</button>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getUserUrlById } from '../../hooks/GetUserUrl'
import { context } from '../../context/Context'
import { account } from '../../config/appwriteConfig'
import ItemProfileDrop from '../../elements/ItemProfileDrop'
import ItemProfileDropdown from '../../mocks/profiledropdown.json'

export default function ProfileDropdown(props) {
  const navigate = useNavigate()
  const { user } = context()
  const [dataUser, setDataUser] = useState()

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData() {
    try {
      const response = await getUserUrlById(user.$id)
      setDataUser(response.username)
    } catch (err) {
      throw err
    }
  }

  async function logoutUser() {
    navigate('/login')
    await account.deleteSession('current');
  }

  return (
    <div className='bg-white w-80 rounded rounded-xl p-4'>
      <div className='flex items-center'>
        <div>
          <p className='bg-gray-200 flex items-center justify-center w-10 h-10 rounded rounded-full'>{dataUser ? dataUser[0].toUpperCase() : ""}</p>
        </div>
        <div className='ms-2'>
          <p className='font-bold'>@{dataUser}</p>
          <p className='text-sm text-gray-500'>linktr.ee/{dataUser}</p>
        </div>
      </div>

      <div>
        {ItemProfileDropdown.map((data, index) => (
          <div key={index}>
            <ItemProfileDrop title={data.title} content={data.content} />
          </div>
        ))}
      </div>

      <div className={(props.show ? ' keep-open' : '')}>
        <div className='flex items-center mb-2 p-2 hover-bg-gray-100 rounded cursor-pointer'>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <button onClick={logoutUser} className="btn ms-4 keep-open">Logout</button>
        </div>
      </div>
    </div>
  )
}
