// script.js
document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById('contactBtn');
  const videoBtn = document.getElementById('videoBtn');
  const photoBtn = document.getElementById('photoBtn');
  const cvBtn = document.getElementById('cvBtn');
  const content = document.getElementById('content');
  const modal = document.getElementById('contactModal');
  const span = document.getElementsByClassName('close')[0];

  contactBtn.addEventListener('click', function(){
    setActiveButton(contactBtn);
    content.innerHTML = '';
    modal.style.display = 'block';
  });

  videoBtn.addEventListener('click', function(){
    setActiveButton(videoBtn);
    content.innerHTML = `
      <h2>Vidéo de Présentation</h2>
      <video width="100%" controls>
        <source src="path_to_your_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>`;
  });

  photoBtn.addEventListener('click', () => {
    setActiveButton(photoBtn);
    content.innerHTML = `
      <h2>Photo</h2>
      <img src="path_to_your_photo.jpg" alt="Photo de nous" style="width:100%; max-width:400px;">`;
  });

  cvBtn.addEventListener('click', () => {
    setActiveButton(cvBtn);
    content.innerHTML = `
      <h2>CV</h2>
      <iframe src="path_to_your_cv.pdf" style="width:100%; height:600px;" frameborder="0"></iframe>`;
  });

  span.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  function setActiveButton(activeButton) {
    document.querySelectorAll('.buttons button').forEach(button => {
      button.classList.remove('active');
    });
    activeButton.classList.add('active');
  }
});
