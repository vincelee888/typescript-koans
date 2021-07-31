import fs from 'fs'
import { start } from "./runKoans";

const koans = fs.readdirSync('./koans').sort()

start(koans, false)