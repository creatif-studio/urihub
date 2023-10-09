// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function CardToPhone({name, url}) {
//   const isExternalUrl = /^(https?:\/\/|mailto:|tel:)/.test(url);

//   return (
//     <div className='bg-white text-center p-1'>
//       {isExternalUrl ? (
//         <a href={url} target="_blank" rel="noopener noreferrer">
//           <p>{name}</p>
//         </a>
//       ) : (
//         <Link to={url}>
//           <p>{name}</p>
//         </Link>
//       )}
//     </div>
//   );
// }


import React from 'react';

function separateDoubleHttps(url) {
  return url.replace(/^https?:\/\/(https?:\/\/)/, 'https://');
}

export default function CardToPhone({ name, url }) {
  const handleCardClick = () => {
    console.log('Card clicked:', name, url);

    const cleanedUrl = separateDoubleHttps(url);
    if (isExternalUrl(url)) {
      window.open(url, '_blank');
    } 
  };

  const isExternalUrl = (url) => /^(https?:\/\/|mailto:|tel:)/.test(url);

  return (
    <div className='bg-white text-center p-1 cursor-pointer' onClick={handleCardClick}>
      <p>{name}</p>
    </div>
  );
}
