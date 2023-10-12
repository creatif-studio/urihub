import React from 'react';

function separateDoubleHttps(url) {
  return url.replace(/^https?:\/\/(https?:\/\/)/, 'https://');
}

export default function CardToPhone({ url, name, isShow}) {
  const handleCardClick = () => {

    const cleanedUrl = separateDoubleHttps(url);
    if (isExternalUrl(url)) {
      window.open(url, '_blank');
    } 
  };

  const isExternalUrl = (url) => /^(https?:\/\/|mailto:|tel:)/.test(url);

  return (
    <>
      <div className='bg-white text-center p-1 cursor-pointer' onClick={handleCardClick}>
        <p>{name}</p>
      </div>
    </>
  );
}
// { isShow ? (

//   ) : (
//     ""
//   )
// }