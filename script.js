const progressBars = document.querySelectorAll(".circular-progress");

progressBars.forEach((bar) => {
  let progressValue = bar.querySelector(".progress-value");
  let startValue = 0;
  let endValue = parseInt(bar.getAttribute("data-percentage"));
  let speed = 20; // ms per frame
  let animating = false;

  function animate() {
    if (startValue <= endValue) {
      bar.style.background = `conic-gradient(
                #e65c00 ${startValue * 3.6}deg,
                #222 ${startValue * 3.6}deg
            )`;
      progressValue.textContent = `${startValue}%`;
      startValue++;
      setTimeout(animate, speed);
    } else {
      progressValue.textContent = `${endValue}%`;
      animating = false;
    }
  }

  bar.addEventListener("mouseenter", () => {
    if (!animating) {
      animating = true;
      startValue = 0;
      animate();
    }
  });

  bar.addEventListener("mouseleave", () => {
    // Reset on mouse leave (optional)
    bar.style.background = `conic-gradient(#e65c00 0deg, #222 0deg)`;
    progressValue.textContent = `0%`;
    startValue = 0;
    animating = false;
  });
});
function checkResume() {
    alert("Redirecting to Resume...");
    // window.location.href = 'resume.pdf'; // Uncomment to redirect
  }

  function viewCertificate(imageSrc) {
    // Open the certificate image in a new tab
    window.open(imageSrc, '_blank');
  }