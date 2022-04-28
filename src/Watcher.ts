import * as fs from "fs";
import { spawn } from "child_process";
import { exit } from "process";


/**
 * Clase que representa un watcher
 */
export default class Watcher {

  /**
   * @param path Ruta a vigilar
   */
  watch = (path: string) => {
    fs.access(path, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`${path} no existe`);
      } else {
        console.log(`Vigilando la ruta ${path}: `);

      // Hace un seguimiento de la ruta
        const watcher = fs.watch(path);

        watcher.on("change", () => {
          const addFile = spawn("node", ["dist/AddFromFile.js", path])
          addFile.stdout.pipe(process.stdout)
        })

        watcher.on("error", () => {
          console.log("Se elimino el fichero");
          exit
        })
      }
    });
  };
}

new Watcher().watch(process.argv[2])