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

  useEffect(() => {
    checkUserStatus()
    getLink()
  }, [])

  const loginUser = async (userInfo) => {
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

  const logoutUser = async () => {
    await account.deleteSession('current');
    setUser(null)
  }

  const registerUser = async (userInfo) => {
    try{
      setLoading(true)
      await account.create(ID.unique(), userInfo.email, userInfo.username, userInfo.name, userInfo.password);
      await account.createEmailSession(userInfo.email, userInfo.password)

      let accountDetails = await account.get();
      setUser(accountDetails)
      navigate('/admin')
    }catch(error){
      console.error(error)
    }
    setLoading(false)
  }

  const checkUserStatus = async () => {
    try{
      let accountDetails = await account.get();
      setUser(accountDetails)
    }catch(error){
      console.log(error)
    }
    setLoading(false)
  }

  const getLink = async() => {
    setLoading(true)
    try {
      const response = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE)
      console.log(response)
      setLink(response)
    } catch (error) {
      console.error(error)
    }
  }

  const postLink = async (name, url) => {
    setLoading(true)
    try{
      await database.createDocument(
        import.meta.env.VITE_DATABASE, 
        import.meta.env.VITE_TABLE, 
        ID.unique(), 
        { name, url }
      )

      let data = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE)
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
      const response = await database.updateDocument(
        import.meta.env.VITE_DATABASE, 
        import.meta.env.VITE_TABLE, 
        id,
        jsonData
      )
      console.log(response)

      let data = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE)
      setLink(data)
    }catch(error){
      console.error(error)
    }
    setLoading(false) 
  }

  async function deleteLink(id) {
    setLoading(true)
    try{
      const response = await database.deleteDocument(
        import.meta.env.VITE_DATABASE, 
        import.meta.env.VITE_TABLE, 
        id
      )
      console.log(response)

      let data = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE)
      setLink(data)
    }catch(error){
      console.error(error)
    }
    setLoading(false) 
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
    deleteLink
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