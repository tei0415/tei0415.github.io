// --- Language Switcher Logic ---
let isEnglish = false;
const langBtn = document.getElementById('lang-btn');
const elementsToTranslate = document.querySelectorAll('[data-ja]');
const nameInput = document.getElementById('sender-name');
const messageInput = document.getElementById('sender-message');

langBtn.addEventListener('click', () => {
    isEnglish = !isEnglish;
    
    // Toggle Button Text
    langBtn.textContent = isEnglish ? 'JP' : 'EN';
    
    // Change HTML lang attribute
    document.documentElement.lang = isEnglish ? 'en' : 'ja';

    // Swap text content based on data attributes
    elementsToTranslate.forEach(el => {
        if (isEnglish) {
            el.textContent = el.getAttribute('data-en');
        } else {
            el.textContent = el.getAttribute('data-ja');
        }
    });
    
    // Swap form placeholders
    nameInput.placeholder = isEnglish ? 'Name' : '名前';
    messageInput.placeholder = isEnglish ? 'Message' : 'メッセージ';
});

// --- Fan Letter Form Logic ---
const form = document.getElementById('fan-letter-form');
const thankYouMsg = document.getElementById('thank-you-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the page from reloading
    
    // Hide the form and show the thank you message
    form.style.display = 'none';
    thankYouMsg.classList.remove('hidden');
});
