import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

//cool comment for redeploy

const selectors = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

selectors.startBtn.addEventListener('click', handleStart);

let selectedTime = 0;
let intervalId = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectors.startBtn.disabled = true;
        if(selectedDates[0] <= Date.now()) {
            window.alert('Please choose a date in the future')
        } else {
            selectors.startBtn.disabled = false;
            const today = new Date();
            selectedTime = selectedDates[0] - today;
        }
    },
};

const dateChoose = flatpickr(selectors.input, options);
selectors.startBtn.disabled = true;

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function handleStart() {

    intervalId = setInterval(() => {
        selectors.days.textContent = String(convertMs(selectedTime).days).padStart(2, "0");
        selectors.hours.textContent = String(convertMs(selectedTime).hours).padStart(2, "0");
        selectors.minutes.textContent = String(convertMs(selectedTime).minutes).padStart(2, "0");
        selectors.seconds.textContent = String(convertMs(selectedTime).seconds).padStart(2, "0");
        selectedTime = selectedTime - 1000;
        if (selectedTime <= 0) {
            clearInterval(intervalId)
        };
    }, 1000)

    

 
  }



