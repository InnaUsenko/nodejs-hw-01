import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts && Array.isArray(contacts) && contacts.length > 0) {
    await writeContacts(contacts.slice(0, -1));
  } else {
    console.log('db is empty');
  }
};

removeLastContact();
