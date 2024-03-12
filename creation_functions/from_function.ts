import { from } from 'rxjs';

from(['Melania', 'Ciprian', 'Cristina']).subscribe({
  next: (value) => console.error(value),
  complete: () => console.log('Completed'),
});

const somePromise = new Promise((resolve, reject) => {
  // resolve('Resolved!');
  reject('Rejected');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error: ', err),
  complete: () => console.log('completed'),
});
