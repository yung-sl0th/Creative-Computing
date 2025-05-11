const state = {
    bodyPart: null,
    duration: null,
    pace: null
  };
  
  document.querySelectorAll("#body-part button").forEach(btn => {
    btn.addEventListener("click", () => {
      state.bodyPart = btn.dataset.value;
      highlightSelected(btn, "#body-part");
    });
  });
  
  document.querySelectorAll("#duration button").forEach(btn => {
    btn.addEventListener("click", () => {
      state.duration = btn.dataset.value;
      highlightSelected(btn, "#duration");
    });
  });
  
  document.querySelectorAll("#pace button").forEach(btn => {
    btn.addEventListener("click", () => {
      state.pace = btn.dataset.value;
      highlightSelected(btn, "#pace");
    });
  });
  
  document.getElementById("generate-routine").addEventListener("click", () => {
    if (Object.values(state).includes(null)) {
      alert("Please make all selections!");
      return;
    }
  
    document.getElementById("customization-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
  
    const room = document.getElementById("avatar-room");
    let bg = "#f0f0f0";
  
    if (state.bodyPart === "hips") bg = "linear-gradient(to right, #fbc2eb, #a6c1ee)";
    if (state.bodyPart === "shoulders") bg = "linear-gradient(to right, #ffecd2, #fcb69f)";
    if (state.bodyPart === "lower-back") bg = "linear-gradient(to right, #d4fc79, #96e6a1)";
  
    room.style.background = bg;
  
    const routine = document.getElementById("routine-text");
    routine.innerHTML = `
      <h3>Your Personalized Flow</h3>
      <p><strong>Focus:</strong> ${state.bodyPart.replace('-', ' ')}</p>
      <p><strong>Length:</strong> ${state.duration === "long" ? "30–40 minutes" : "10–20 minutes"}</p>
      <p><strong>Pace:</strong> ${state.pace === "fast" ? "Fast & Energizing" : "Slow & Recovery-Focused"}</p>
      <p>🎵 Click below to start your flow:</p>
      <a href="https://youtube.com/your-yoga-video-link" target="_blank">Start Now</a>
    `;
  });
  
  document.getElementById("start-over").addEventListener("click", () => {
    location.reload();
  });
  
  function highlightSelected(button, groupSelector) {
    document.querySelectorAll(`${groupSelector} button`).forEach(btn => {
      btn.style.backgroundColor = '#e0e0e0';
    });
    button.style.backgroundColor = '#9fa8da';
  }
  