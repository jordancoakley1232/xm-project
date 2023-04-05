export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  let currentCount = 0;
  const incrementCount = () => {
    counter = counter + 1;
    element.innerHTML = `Count is ${counter}`;
  };
  element.addEventListener("click", () => incrementCount());
}
