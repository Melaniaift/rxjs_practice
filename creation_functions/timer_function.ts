import { Observable, timer } from 'rxjs';

console.log('App started');

const timer$ = new Observable<number>((subsriber) => {
  const timeoutId = setTimeout(() => {
    console.error('timeout');
    subsriber.next(0);
    subsriber.complete();
  }, 2000);

  return () => clearTimeout(timeoutId);
});

const subscription = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

const subscription2 = timer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

setTimeout(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  console.error('unsubscribing!');
}, 1000);
