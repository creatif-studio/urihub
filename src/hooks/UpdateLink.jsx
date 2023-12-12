import { database } from "../config/appwriteConfig"

export async function updateLink(id, datas) {
  const jsonData = JSON.stringify(datas)
  return await database.updateDocument(
    import.meta.env.VITE_DATABASE, 
    import.meta.env.VITE_TABLE_URL, 
    id,
    jsonData
  )
}