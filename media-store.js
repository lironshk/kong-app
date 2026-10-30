const open =() => new Promise((resolve, reject) => {
  const r = indexedDB.open('ember-local-media', 1);
  r.onupgradeneeded =() => r.result.createObjectStore('images');
  r.onsuccess =() => resolve(r.result);
  r.onerror =() => reject(r.error)
});
export async function putImage(key, file) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readwrite');
    tx.objectStore('images').put(file, key);
    tx.oncomplete =() => {
      db.close();
      resolve()
    };
    tx.onerror =() => {
      db.close();
      reject(tx.error)
    }
  })
}
export async function getImage(key) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images'), r = tx.objectStore('images').get(key);
    r.onsuccess =() => {
      db.close();
      resolve(r.result)
    };
    r.onerror =() => {
      db.close();
      reject(r.error)
    }
  })
}
export async function deleteImage(key) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readwrite');
    tx.objectStore('images').delete(key);
    tx.oncomplete =() => {
      db.close();
      resolve()
    };
    tx.onerror =() => reject(tx.error)
  })
}
