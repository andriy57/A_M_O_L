document.querySelector('#callMe').addEventListener('submit', e => {
    e.preventDefault();
    fetch('callMe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#userName').value,
            number: document.querySelector('#userNumber').value
        })
    });
});