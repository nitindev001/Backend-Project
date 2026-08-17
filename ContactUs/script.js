
  const chips = document.querySelectorAll('.chip');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.classList.remove('active'));
    c.classList.add('active');
  }));

  const form = document.getElementById('contactForm');
  const status = document.getElementById('status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const topic = document.querySelector('.chip.active').dataset.val;
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      topic,
      message: document.getElementById('message').value
    };

    console.log('Contact form submitted:', data);
    status.classList.add('show');
    form.reset();
    chips.forEach(x => x.classList.remove('active'));
    chips[0].classList.add('active');
    setTimeout(() => status.classList.remove('show'), 4000);
  });