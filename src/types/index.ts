/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

type Routes = '/users' | '/users/add' | '/users/:id';

interface User {
  id?: number;
  name: string;
  age: number;
  work: string;
}

export { Routes, User };
