import { createContext, useState, useEffect, useContext } from "react";
import { account, database } from "../config/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from 'appwrite';

const Context = createContext()

export const ContextProvider = ({children}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [link, setLink] = useState(null)
  const [userLink, setUserLink] = useState(null)

  useEffect(() => {
    checkUserStatus()
    getLink()
    getUserUrl()
  }, [])

  async function loginUser(userInfo) {
    setLoading(true)
    try{
      await account.createEmailSession(userInfo.email, userInfo.password)
      let accountDetails = await account.get();
      setUser(accountDetails)
      navigate('/admin')
    }catch(error){
      console.error(error)
    }
    setLoading(false)
  }

  async function logoutUser() {
    await account.deleteSession('current');
    setUser(null)
  }
  

  async function registerUser(userInfo) {
    try{
      await account.create(ID.unique(), userInfo.email, userInfo.username, userInfo.name, userInfo.password);
      await account.createEmailSession(userInfo.email, userInfo.password)
      
      let accountDetails = await account.get();
      setUser(accountDetails)
      
      setLoading(true)
      await database.createDocument(
        import.meta.env.VITE_DATABASE, 
        import.meta.env.VITE_TABLE_USER, 
        accountDetails.$id, 
        { 
          username: userInfo.username,
          name: userInfo.name,
          idSessionLogin: accountDetails.$id
        }
      )

      navigate('/admin')
    }catch(error){
      console.error(error)
    }
    setLoading(false)
  }
  
  async function checkUserStatus() {
    try{
      let accountDetails = await account.get();
      setUser(accountDetails)
    }catch(error){
      console.log(error)
    }
    setLoading(false)
  }

  async function getLink() {
    setLoading(true)
    try {
      const response = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE_URL)
      setLink(response)
    } catch (error) {
      console.error(error)
    }
  }

  async function postLink({name, url, users}) {
    console.log(users);
    setLoading(true)
    try{
      await database.createDocument(
        import.meta.env.VITE_DATABASE, 
        import.meta.env.VITE_TABLE_URL, 
        ID.unique(), 
        { 
          name, 
          url,
          isShow: true,
          users: users
        }
      )

      let data = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE_URL)
      setLink(data)
    }catch(error){
      console.error(error)
    }
    setLoading(false)
  }

  async function updateLink(id, datas) {
    setLoading(true)
    try{
      const jsonData = JSON.stringify(datas)
      await database.updateDocument(
        import.meta.env.VITE_DATABASE, 
        import.meta.env.VITE_TABLE_URL, 
        id,
        jsonData
      )

      let data = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE_URL)
      setLink(data)
    }catch(error){
      console.error(error)
    }
    setLoading(false) 
  }

  async function deleteLink(id) {
    setLoading(true)
    try{
      await database.deleteDocument(
        import.meta.env.VITE_DATABASE, 
        import.meta.env.VITE_TABLE_URL, 
        id
      )

      let data = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE_URL)
      setLink(data)
    }catch(error){
      console.error(error)
    }
    setLoading(false) 
  }

  async function getUserUrl() {
    try {
      const response = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE_USER)
      setUserLink(response)
    } catch (error) {
      console.error(error)
    }
  }

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    link,
    getLink,
    postLink,
    updateLink,
    deleteLink,
    userLink,
    getUserUrl
  }

  return(
    <Context.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </Context.Provider>
  )
}

//Custom Hook
export const context = ()=> {return useContext(Context)}

export default ContextProvider;

// 6516f072bbce20960140