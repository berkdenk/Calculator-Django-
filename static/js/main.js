const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Bu fonksiyon, ekrandaki değeri negatif veya pozitif olarak değiştirir.
function toggleSign() {
    if (display.value !== '' && display.value !== 'Error') {
        display.value = -parseFloat(display.value);
    }
}

// Bu fonksiyon, ekrandaki değerin yüzde birini hesaplar.
function calculatePercentage() {
    if (display.value !== '' && display.value !== 'Error') {
        display.value = parseFloat(display.value) / 100;
    }
}

// CSS tarafında belirlenen buton hover efektini ekler.
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#e0e0e0';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#f0f0f0';
    });
});
