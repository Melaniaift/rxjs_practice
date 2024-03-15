import { interval, Observable } from 'rxjs';

console.log('App started');

const interval$ = new Observable<number>((subsriber) => {
  let counter = 0;

  const intervalId = setTimeout(() => {
    console.error('timeout');
    subsriber.next(counter++);
  }, 2000);

  return () => clearTimeout(intervalId);
});

const subscription = interval(1000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

const subscription2 = interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

setTimeout(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  console.error('unsubscribing!');
}, 5000);
