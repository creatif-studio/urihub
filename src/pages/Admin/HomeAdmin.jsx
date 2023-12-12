import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Admin/NavbarAdmin'
import PhoneSimulator from '../../components/Admin/PhoneSimulator'
import AlertLive from '../../components/Admin/AlertLive'
import Logo from '../../assets/logos-sm.png'
import ListLink from '../../components/Admin/ListLink'
import Button from '../../elements/Button'
import { getLink } from '../../hooks/GetLink'
import { getUserUrl } from '../../hooks/GetUserUrl'
import { context } from '../../context/Context'

export default function HomeAdmin() {
  const linkForm = useRef()
  const { user, postLink } = context()
  const [show, setShow] = useState(false);
  const [cekUser, setCekUser] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        await getLink()
      } catch (error) {
        throw error
      }
    }

    fetchData()
  }, [])
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUserUrl()
        const findUserLink = response.documents.find(data => data.$id == user.$id)
        setCekUser(findUserLink)
        setData(findUserLink.links)
      } catch (error) {
        throw error
      }
    }

    fetchData()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const name = linkForm.current.name.value
    const url = linkForm.current.url.value
    const obj ={
      name,
      url,
      users: cekUser.$id
    }
    postLink(obj)
  }

  return (
    <div className='bg-gray-100'>
      <div className='fixed w-full px-4 mt-4 z-40'>
        <Navbar />
      </div>

      <div className='flex pt-4'>
        <div className='w-4/6 border-r border-gray-500 pe-4'>
          <div className='pt-24 ms-4'>
            <AlertLive />
          </div>
          <div className='flex justify-center flex-cols mt-12 w-full'>
            <div className='w-full px-4'>
              <div>
                <Button
                  isSecondary
                  className="px-18 font-semibold w-full"
                  onClick={() => setShow(true)}
                >
                  Add link
                </Button>

                {show && (
                  <div className='mt-8'>
                    <form className="w-full" ref={linkForm} onSubmit={handleSubmit}>
                      <div className='mt-1'>
                        <input 
                          className='w-full rounded rounded-xl'
                          type="text" 
                          name="name"
                          placeholder="Enter link name" 
                        />
                      </div>
                      <div className='mt-1'>
                        <input 
                          className='w-full rounded rounded-xl'
                          type="text" 
                          name="url" 
                          placeholder="Enter URL" 
                        />
                      </div>

                      <div className='mt-4'>
                        <button className='me-2 border border-gray-300 px-8 py-2 rounded-full hover:bg-gray-200' onClick={() => setShow(false)}>Cancel</button>
                        <button className='bg-gray-200 px-8 py-2 rounded-full hover:bg-gray-300'>Save</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className='mt-8'>
                <button className='border border-gray-300 px-6 py-2 hover:bg-white rounded rounded-full'>
                  <i className="text-sm me-2 fa-regular fa-rectangle-list"></i>
                  <span className='font-semibold'>Add header</span>
                </button>
              </div>

              <div className='flex flex-col justify-center items-center mt-4 mb-24'>
                {data?.length > 0 ? (
                  data.map((data, index) => (
                    <div className='w-full mt-2' key={index}>
                      <ListLink 
                        id={data.$id}
                        name={data.name} 
                        url={data.url} 
                        isShow={data.isShow}
                      />
                    </div>
                  ))
                ) : (
                  <div className='flex flex-col justify-center'>
                    <div className='w-10 items-center mx-auto'>
                      <img className='w-full h-full opacity-20' src={Logo} alt="logo" />
                    </div>
                    <div className='mt-6'>
                      <p className='text-center font-bold text-gray-700'>Show the world who you are.</p>
                      <p className='text-center font-bold text-gray-700'>Add a link to get started.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='w-2/6 flex justify-center mt-24'>
          <div className='fixed'>
            <PhoneSimulator />
          </div>
        </div>
      </div>
    </div>
  )
}
