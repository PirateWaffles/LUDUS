// Логика клиентской части для игрока
const socket = io('https://strengthened-languid-gargoyleosaurus.glitch.me');
let currentEnergy = 3;

// Обновление доступности кнопок в зависимости от энергии
function updateActionButtons() {
  document.querySelectorAll('.action').forEach(btn => {
    const cost = parseInt(btn.dataset.cost);
    btn.disabled = cost > currentEnergy;
  });
}

// Выбор действия
document.querySelectorAll('.action').forEach(btn => {
  btn.addEventListener('click', () => {
    const cost = parseInt(btn.dataset.cost);
    socket.emit('selectAction', { gameId, playerId, actionCost: cost });
  });
});
