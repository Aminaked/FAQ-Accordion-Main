document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.classList.toggle('visible');
      
     
      const plusIcon = button.querySelector('img[src*="icon-plus"]');
      const minusIcon = button.querySelector('img[src*="icon-minus"]');
      
     
      plusIcon.classList.toggle('hidden');
      plusIcon.classList.toggle('visible');
      minusIcon.classList.toggle('hidden');
      minusIcon.classList.toggle('visible');
    });
});
