import React, { useState, useEffect, useRef } from 'react'
import { context } from '../../context/Context'
import ItemsListLink from './ItemsListLink';

export default function AddLink({ name, url, id }) {
  const { updateLink, deleteLink } = context();
  const inputNameRef = useRef(null);
  const inputUrlRef = useRef(null);

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingUrl, setIsEditingUrl] = useState(false);

  const [editedName, setEditedName] = useState(name);
  const [editedUrl, setEditedUrl] = useState(url);

  const handleUpdateName = () => setIsEditingName(true);
  const handleUpdateUrl = () => setIsEditingUrl(true);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setEditedUrl(e.target.value);
  };

  const handleNameSave = () => {
    updateLink(id, { name: editedName, url });
    setIsEditingName(false);
  };

  const handleUrlSave = () => {
    updateLink(id, { name, url: editedUrl });
    setIsEditingUrl(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (isEditingName && inputNameRef.current && !inputNameRef.current.contains(e.target)) ||
        (isEditingUrl && inputUrlRef.current && !inputUrlRef.current.contains(e.target))
      ) {
        if (isEditingName) {
          handleNameSave();
        }
        if (isEditingUrl) {
          handleUrlSave();
        }
      }
    };

    if (isEditingName || isEditingUrl) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isEditingName, isEditingUrl]);

  return (
    <div className='bg-white p-6 rounded rounded-xl drop-shadow-md'>
      <div className="flex justify-between">
        <div>
          <div className='flex items-center' ref={inputNameRef}>
            {isEditingName ? (
              <input
                type="text"
                value={editedName}
                name='name'
                onChange={handleNameChange}
                onBlur={handleNameSave}
              />
            ) : (
              <p className='me-2 tracking-widest font-semibold'>{editedName}</p>
            )}
            <i
              className={`text-xs fa-solid fa-pencil cursor-pointer ${isEditingName ? 'hidden' : ''}`}
              onClick={handleUpdateName}
            ></i>
          </div>

          <div className='flex items-center' ref={inputUrlRef}>
            {isEditingUrl ? (
              <input
                type="text"
                value={editedUrl}
                name='url'
                onChange={handleUrlChange}
                onBlur={handleUrlSave}
              />
            ) : (
              <p className='me-2 tracking-widest font-semibold'>{editedUrl}</p>
            )}
            <i
              className={`text-xs fa-solid fa-pencil cursor-pointer ${isEditingUrl ? 'hidden' : ''}`}
              onClick={handleUpdateUrl}
            ></i>
          </div>
        </div>
        
        <div>
          <i className="fa-solid fa-arrow-up-from-bracket me-3"></i>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <div className='mt-2'>
        <ItemsListLink />
      </div>
    </div>
  );
}

