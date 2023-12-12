import { database } from "../config/appwriteConfig"

export async function getLink() {
  try {
    return await database.listDocuments(import.meta.env.VITE_DATABASE, import.meta.env.VITE_TABLE_URL)
  } catch (error) {
    throw error
  }
}

