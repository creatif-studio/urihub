import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../../context/Context'
import { getUserUrl, getUserUrlById, updateUserUrl } from '../../hooks/GetUserUrl'

export default function AlertLive() {
  const { user } = context()
  const [isLoading, setIsLoading] = useState(false)
  const [userLinks, setUserLinks] = useState([])
  const [userLink, setUserLink] = useState()
  const [userLinkFilter, setUserLinkFilter] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUserUrl();
        setUserLinks(response?.documents);
        setIsLoading(true);
      } catch (error) {
        throw error
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
      const findUserLink = userLinks?.find(data => data.$id == user.$id)
      setUserLinkFilter(findUserLink)
  }, [userLinks])

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await getUserUrlById(userLinkFilter?.$id);

        if(response?.userUrl === null) {
          updateUserUrl(response?.$id, response?.username)
        }

        setIsLoading(true);
        setUserLink(response);
      } catch (error) {
        throw error
      }
    }
    fetchData()
  }, [userLinkFilter])

  return (
    <>
      { userLink ? (
        <div className='flex items-center justify-between bg-red-200 p-4 rounded rounded-xl'>
          <p>
            <span className='border border-black px-2 rounded rounded-full me-2'>
            <i className="text-sm fa-solid fa-exclamation"></i>
            </span>
            
            <span className='font-semibold'>Your Linktree :{" "} 
              <Link 
                to={`/linktr.ee/${userLink?.username}`}
                className='cursor-pointer underline'
              >
                linktr.ee/{userLink?.username}
              </Link>
            </span> 
            {" "}Share your Linktree to your socials.
          </p>
          <div>
            <button className='bg-white font-semibold px-6 py-2 hover:bg-gray-200 rounded rounded-xl'>Copy URL</button>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-between bg-red-200 p-4 rounded rounded-xl'>
          <p>
            <span className='border border-black px-2 rounded rounded-full me-2'>
            <i className="text-sm fa-solid fa-exclamation"></i>
            </span>
            
            <span className='font-semibold'>Your Linktree is not active.</span> 
            To publish, click on the verification link we sent you.
          </p>
          <div>
            <button className='bg-white font-semibold px-6 py-2 hover:bg-gray-200 rounded rounded-xl'>Resend link</button>
          </div>
        </div>
      )}
    </>
  )
}
