const button = document.querySelector(".order-submit-btn");

const prevent = (e) => {
    e.preventDefault();
}

button.addEventListener("click", prevent);
