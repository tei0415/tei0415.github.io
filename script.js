// --- 言語切り替えロジック ---
let isEnglish = false;
const langBtn = document.getElementById('lang-btn');
const elementsToTranslate = document.querySelectorAll('[data-ja]');
const nameInput = document.getElementById('sender-name');
const messageInput = document.getElementById('sender-message');

langBtn.addEventListener('click', () => {
    isEnglish = !isEnglish;
    langBtn.textContent = isEnglish ? 'JP' : 'EN';
    document.documentElement.lang = isEnglish ? 'en' : 'ja';

    elementsToTranslate.forEach(el => {
        // textContent ではなく innerHTML を使うことで改行タグを有効にします
        if (isEnglish) {
            el.innerHTML = el.getAttribute('data-en');
        } else {
            el.innerHTML = el.getAttribute('data-ja');
        }
    });
    
    nameInput.placeholder = isEnglish ? 'Name' : '名前';
    messageInput.placeholder = isEnglish ? 'Message' : 'メッセージ';
});

// --- ファンレター送信ロジック ---
const form = document.getElementById('fan-letter-form');
const thankYouMsg = document.getElementById('thank-you-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    thankYouMsg.classList.remove('hidden');
});
