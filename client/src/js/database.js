import { openDB } from 'idb';

// Initialization function for setting up the 'jate' database.
// Checks if the object store exists, creates it if not, and logs the status.
const initdb = async () => {
  // Opens the 'jate' database with version 1
  openDB('jate', 1, {
    upgrade(db) {
      // If 'jate' object store exists, log message, else create it
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create 'jate' object store with auto-incrementing key 'id'
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
};

// Function for adding content to the 'jate' database
export const putDb = async (content) => {
  console.log('PUT to the database');
  // Open 'jate' database
  const jateDb = await openDB('jate', 1);
  // Begin read-write transaction
  const tx = jateDb.transaction('jate', 'readwrite');
  // Get object store
  const store = tx.objectStore('jate');
  // Put content into the store with predefined key '1'
  const request = store.put({ content, id: 1 });
  // Wait for operation to complete and log result
  const result = await request;
  console.log('Data saved to the database', result);
};

// Function for retrieving content from the 'jate' database
export const getDb = async () => {
  console.log('GET from the database');
  // Open 'jate' database
  const jateDb = await openDB('jate', 1);
  // Begin read-only transaction
  const tx = jateDb.transaction('jate', 'readonly');
  // Get object store
  const store = tx.objectStore('jate');
  // Get content associated with key '1'
  const request = store.get(1);
  // Wait for operation to complete and log result
  const result = await request;
  console.log('result.value', result);
  // Return retrieved data
  return result?.value;
};

// Initialize the 'jate' database
initdb();
