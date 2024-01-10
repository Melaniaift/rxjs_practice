import { Observable } from 'rxjs';

const obs = new Observable((subs) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log('Emitted', counter);
    subs.next(counter++);
  }, 2000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = obs.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('unsubscribe');
  subscription.unsubscribe();
}, 7000);

// const obs = new Observable((subs) => {
//   let i = 0;
//   while (true) {
//     subs.next(i);
//     i++;
//     if (i == 7) {
//       break;
//     }
//   }
//   subs.unsubscribe();
// });
