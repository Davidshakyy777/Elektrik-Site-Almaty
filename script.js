const chat = document.querySelector('.chat');
const menu = document.querySelector('.chat-menu');

chat.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
