import { Schema } from "./models.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { Low } from "lowdb";
import { JSONFile } from 'lowdb'

import { data as defaultData } from "./defaultData.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "data.json");
const adapter = new JSONFile('db.json')
const db = new Low(adapter);

await db.read(); //väntar på att filen är inläst
if (!db.data) {
  db.data = defaultData; //defaultData används om det inte finns något i db
  db.write();
} else {
  console.log(db.data);
}

export default db;
