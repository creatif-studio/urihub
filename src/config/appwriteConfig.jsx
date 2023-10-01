import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_API)
    .setProject(import.meta.env.VITE_PROJECT)
    
export const account = new Account(client)
export const database = new Databases(client)

  