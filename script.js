// Chat батырмасы
const chat = document.querySelector('.chat');
const menu = document.querySelector('.chat-menu');

chat.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('show');
});

// Chat-тан тыс жерді басқанда жабу
document.addEventListener('click', (e) => {
  if (!chat.contains(e.target)) {
    menu.classList.remove('show');
  }
});
