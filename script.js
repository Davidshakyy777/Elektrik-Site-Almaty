const chat = document.querySelector('.chat');
const menu = document.querySelector('.chat-menu');

// Чатты басқанда ашу / жабу
chat.addEventListener('click', (e) => {
  e.stopPropagation(); // click жоғарыға өтпесін
  menu.classList.toggle('show');
});

// Чат менюін басқанда жабылмасын
menu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Беттiң басқа жерiн басқанда жабу
document.addEventListener('click', () => {
  menu.classList.remove('show');
});
