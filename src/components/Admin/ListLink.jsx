import React, { useState, useEffect, useRef } from 'react';
import { updateLink } from '../../hooks/UpdateLink';
import ItemsListLink from './ItemsListLink';

export default function AddLink({ id, name, url, isShow }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingUrl, setIsEditingUrl] = useState(false);

  const inputNameRef = useRef(null);
  const inputUrlRef = useRef(null);

  const [link, setLink] = useState({
    name,
    url,
    isShow,
  });

  const handleOnChange = (e) => {
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateName = () => {
    setIsEditingName(true);
  };

  const handleUpdateUrl = () => {
    setIsEditingUrl(true);
  };

  const handleSubmit = async () => {
    const newIsShow = !link.isShow;

    try {
      await updateLink(id, { ...link, isShow: newIsShow });
      setLink({ ...link, isShow: newIsShow });
      setIsEditingUrl(false);
      setIsEditingName(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        (isEditingName && inputNameRef.current && !inputNameRef.current.contains(e.target)) ||
        (isEditingUrl && inputUrlRef.current && !inputUrlRef.current.contains(e.target))
      ) {
        if (isEditingName || isEditingUrl) {
          handleSubmit();
        }
      }
    }

    if (isEditingName || isEditingUrl) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isEditingName, isEditingUrl]);

  console.log(link.isShow);

  return (
    <div className="bg-white p-6 rounded rounded-xl drop-shadow-md">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center" ref={inputNameRef}>
            {isEditingName ? (
              <input
                type="text"
                value={link.name}
                name="name"
                onChange={handleOnChange}
                onBlur={handleSubmit}
              />
            ) : (
              <p className="me-2 tracking-widest font-semibold">{link.name}</p>
            )}
            <i
              className={`text-xs fa-solid fa-pencil cursor-pointer ${
                isEditingName ? 'hidden' : ''
              }`}
              onClick={handleUpdateName}
            ></i>
          </div>

          <div className="flex items-center" ref={inputUrlRef}>
            {isEditingUrl ? (
              <input
                type="text"
                value={link.url}
                name="url"
                onChange={handleOnChange}
                onBlur={handleSubmit}
              />
            ) : (
              <p className="me-2 tracking-widest font-semibold">{link.url}</p>
            )}

            <i
              className={`text-xs fa-solid fa-pencil cursor-pointer ${
                isEditingUrl ? 'hidden' : ''
              }`}
              onClick={handleUpdateUrl}
            ></i>
          </div>
        </div>

        <div>
          <i className="fa-solid fa-arrow-up-from-bracket me-3"></i>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              defaultChecked={link.isShow} 
              className="sr-only peer" 
              name="isShow"
              onChange={handleSubmit}
              // onClick={async () => await updateLink(id, {...link, isShow: !isShow})}
            />

            <div 
              className={
                `w-11 h-6 bg-gray-200 
                peer-focus:outline-none 
                peer-focus:ring-4 
                peer-focus:ring-blue-300 
                dark:peer-focus:ring-blue-800 
                rounded-full peer 
                dark:bg-gray-700 
                ${ link.isShow ? 
                    'peer-checked:after:translate-x-full peer-checked:after:border-white' 
                  : 
                    ''
                } 
                after:content-[''] 
                after:absolute 
                after:top-[2px] 
                after:left-[2px] 
                after:bg-white 
                after:border-gray-300 
                after:border 
                after:rounded-full 
                after:h-5 
                after:w-5 
                after:transition-all 
                dark:border-gray-600
                ${ link.isShow ? 
                    'peer-checked:bg-blue-600' 
                  : 
                    ''
                }`
              }
            ></div>
          </label>
        </div>
      </div>

      <div className="mt-2">
        <ItemsListLink id={id} />
      </div>
    </div>
  );
}