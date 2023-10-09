import { database } from "../config/appwriteConfig"

export async function getUserUrl() {
  try {
    const response = await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE_USER)
    return response
  } catch (error) {
    console.error(error)
  }
}

export async function getUserUrlById(id) {
  try {
    return await database
      .getDocument(
        import.meta.env.VITE_DATABASE, 
        import.meta.env.VITE_TABLE_USER,
        id
      )
  } catch (error) {
    throw error
  }
}

export async function updateUserUrl(id, datas) {
  try{
    const jsonData = JSON.stringify(datas)
    return await database.updateDocument(
      import.meta.env.VITE_DATABASE, 
      import.meta.env.VITE_TABLE_URL, 
      id,
      jsonData
    )
  } catch (error){
    throw error
  }
}