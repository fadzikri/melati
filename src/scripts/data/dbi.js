import { openDB } from "idb";
import { dbName, store } from "../global/database";

const dbPromise = openDB(dbName, 1, {
  upgrade(database) {
    database.createObjectStore(store, { keyPath: "id" });
  },
});

const operationDb = {
  async getRestaurant(id) {
    return (await dbPromise).get(store, id);
  },
  async getAllRestaurants() {
    return (await dbPromise).getAll(store);
  },
  async putRestaurant(datas) {
    return (await dbPromise).put(store, datas);
  },
  async delRestaurant(id) {
    return (await dbPromise).delete(store, id);
  },
};

export default operationDb;
