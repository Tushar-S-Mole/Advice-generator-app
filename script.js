async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    document.getElementById('advice-id').textContent = data.slip.id;
    document.getElementById('advice-text').textContent = data.slip.advice;
}


