import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const dataContacts = await fs.readFile(PATH_DB);
    return JSON.parse(dataContacts);
  } catch (error) {
    console.error(error);
    return [];
  }
};
