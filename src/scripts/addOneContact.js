import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const fakeContacts = await readContacts();
  const fakeContact = createFakeContact();
  fakeContacts.push(fakeContact);
  await writeContacts(fakeContacts);
};

addOneContact();
