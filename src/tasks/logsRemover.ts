import fs from 'fs';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Clean log and error files.
 * @function logsRemover
 * @returns { void }
 * @example logsRemover();
 */
export const logsRemover = (): void => {
  const logsPath: string = './src/logs/debug.log';
  const errorPath: string = './src/logs/error.log';
  const newValue: string = '';

  fs.promises
    .readFile(logsPath)
    .then(() => {
      fs.promises.writeFile(errorPath, newValue).catch((err: Error) => {
        if (err) {
          throw err;
        }

        console.log('Done cleaning');
      });
    })
    .catch((err: Error) => {
      if (err) {
        throw err;
      }
    });
};
