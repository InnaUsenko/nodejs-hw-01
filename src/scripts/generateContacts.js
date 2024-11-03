import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  const fakeContacts = await readContacts();
  for (let index = 0; index < number; index++) {
    const fakeContact = createFakeContact();
    await fakeContacts.push(fakeContact);
  }
  writeContacts(fakeContacts);
};

generateContacts(5);
