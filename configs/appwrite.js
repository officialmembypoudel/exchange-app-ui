import { Client, Account, Databases } from "appwrite";

const client = new Client();
client.setEndpoint("https://nepalinfo.itsoch.com/v1").setProject("madhyayuga");

export const account = new Account(client);

export const databases = new Databases(client);