import { fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
  (event) => {
    console.error(event.type, event.x, event.y);
  }
);

setTimeout(() => {
  console.error('unsubscribe');
  subscription.unsubscribe();
}, 5000);

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
  const clickhandlerFn = (event: MouseEvent) => {
    console.log('event callback executed');
    subscriber.next(event);
  };

  triggerButton.addEventListener('click', clickhandlerFn);

  return () => {
    triggerButton.removeEventListener('click', clickhandlerFn);
  };
});

const subscription1 = triggerClick$.subscribe((event) =>
  console.error(event.type, event.x, event.y)
);

setTimeout(() => {
  console.error('unsubscribe');
  subscription1.unsubscribe();
}, 2000);
