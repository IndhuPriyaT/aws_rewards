const giftTrigger = document.querySelector('#gift-trigger');
const unlockedPanel = document.querySelector('#unlocked-panel');
const unlockCopy = document.querySelector('#unlock-copy');
const resetButton = document.querySelector('#reset-button');

function openGift() {
  giftTrigger.classList.add('is-open');
  giftTrigger.setAttribute('aria-expanded', 'true');
  giftTrigger.setAttribute('aria-label', 'Reward gift opened');
  unlockCopy.textContent = 'Your learning journey just got a little brighter.';
  unlockedPanel.hidden = false;
  window.setTimeout(() => unlockedPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 160);
}

giftTrigger.addEventListener('click', () => {
  if (!giftTrigger.classList.contains('is-open')) openGift();
});

resetButton.addEventListener('click', () => {
  giftTrigger.classList.remove('is-open');
  giftTrigger.setAttribute('aria-expanded', 'false');
  giftTrigger.setAttribute('aria-label', 'Open reward gift');
  unlockCopy.textContent = 'Your reward is wrapped and ready.';
  unlockedPanel.hidden = true;
  giftTrigger.focus();
});
