import { Observable } from 'rxjs';

const obs = new Observable<string>((subscriber) => {
  console.log('created an empty observable');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
    // subscriber.complete();
  }, 2000);

  setTimeout(() => {
    subscriber.error(new Error('Failure'));
  }, 4000);

  return () => {
    console.log('Teardown');
  };
});

console.log('before');
obs.subscribe();
obs.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
  error: (err) => console.error(err),
});
console.log('after');
