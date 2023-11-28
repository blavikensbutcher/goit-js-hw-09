import Notiflix from "notiflix";

const selectors = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}

let delay = 0;
let step = 0;

selectors.form.addEventListener('submit', handleSubmit)



function handleSubmit(e) {
  e.preventDefault();
  delay = Number(selectors.delay.value);
  step = Number(selectors.step.value);
  for (let i = 1; i <= selectors.amount.value; i++) {
    
    createPromise(i, delay)
    .then(({position, delay}) => Notiflix.Notify.success(`✅ Fullfiles promise ${position} in ${delay}ms`))
    .catch(({position, delay}) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
    
    delay += step;
  }
}





function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

   let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})

      } else {
        // Reject
        reject({position, delay})
      }
    }, delay);
  } )

  return promise

}




