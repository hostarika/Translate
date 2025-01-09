import { langs } from './langJson.js';


const fromSelect = document.getElementById('fromselect');
const toSelect = document.getElementById('toselect');
const translateButton = document.getElementById('btn');
const fromText = document.getElementById('from');
const resultText = document.getElementById('result');



langs.forEach(lang => {
    const optionFrom = document.createElement('option');
    optionFrom.value = lang.code;
    optionFrom.textContent = lang.name;
    fromSelect.appendChild(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = lang.code;
    optionTo.textContent = lang.name;
    toSelect.appendChild(optionTo);
});



translateButton.addEventListener('click', () => {
    const fromLang = fromSelect.value;
    const toLang = toSelect.value;
    const textToTranslate = fromText.value;



    if (!textToTranslate) {
        alert('Iltimos, tarjima qilish uchun matn kiriting.');
        return;
    }




    fetch(`https://api.mymemory.translated.net/get?q=${textToTranslate}&langpair=${fromLang}|${toLang}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resultText.innerHTML = `Natija: ${data.responseData.translatedText}`;
        })
});
