import { writable, readable, get } from "svelte/store";
import { AppDatabase } from "./database/appDatabase";
import FileStoreService from "./services/fileStoreService";
import RegistrarService from "./services/registrarService";

export const screenLocked = writable(false);
export const fileStoreService = readable<FileStoreService>(null, (set) =>
  set(new FileStoreService())
);
export const appDatabase = readable<AppDatabase>(null, (set) => {
  set(new AppDatabase());
});
export const registrarService = readable<RegistrarService>(null, (set) =>
  set(new RegistrarService(get(appDatabase)))
);
