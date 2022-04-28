import * as fs from 'fs'

/**
 * Clase que suma el contenido de un fichero
 */
export default class AddFromFile {
  /**
   * Inicia
   * @param path Ruta del fichero
   * @returns Suma de los numeros del fichero
   */
  start = (path: string) => {
    if (fs.existsSync(path)) {
      const content = fs.readFileSync(path).toString();
      const result = content.split(" ").map((number: string) => {
        if(!isNaN(parseInt(number))) {
          return parseInt(number)
        } else {
          return 0
        }
      }).reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)

      console.log(result);
      return result
      
    } else {
      console.log("El fichero no existe");
      return undefined
    }
  }
}


console.log(process.argv[2]);

new AddFromFile().start(process.argv[2])