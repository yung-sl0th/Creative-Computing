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

  const yogaFlows = {
    shoulders: {
      short: {
        slow: [
          "Neck Rolls – 1 min",
          "Shoulder Rolls – 1 min",
          "Thread the Needle – 2 min each side",
          "Puppy Pose – 2 min",
          "Savasana – 2 min"
        ],
        fast: [
          "Sun Salutation A – 2 rounds",
          "Chaturanga to Upward Dog – 3x",
          "Dolphin Pose – 1 min",
          "Plank to Down Dog – 5 reps",
          "Child’s Pose – 1 min"
        ]
      },
      long: {
        slow: [
          "Neck Rolls – 2 min",
          "Eagle Arms – 3 min",
          "Cow Face Arms – 3 min",
          "Thread the Needle – 3 min each side",
          "Supported Fish Pose – 5 min",
          "Savasana – 5 min"
        ],
        fast: [
          "Sun Salutation B – 4 rounds",
          "Chaturanga to Up Dog to Down Dog – 3x",
          "Dolphin Dips – 10 reps",
          "Forearm Plank – 1 min",
          "Reverse Tabletop – 1 min",
          "Reclining Twist – 2 min each side"
        ]
      }
    },
    hips: {
      short: {
        slow: [
          "Butterfly Stretch – 2 min",
          "Seated Forward Fold – 2 min",
          "Low Lunge – 2 min each side",
          "Pigeon Pose – 2 min each side",
          "Savasana – 2 min"
        ],
        fast: [
          "Jumping Jacks – 30 sec",
          "Low Lunge to Crescent Lunge – 1 min each side",
          "Goddess Pose Pulses – 1 min",
          "Warrior II – 1 min each side",
          "Lizard Lunge – 1 min each side"
        ]
      },
      long: {
        slow: [
          "Butterfly Stretch – 3 min",
          "Happy Baby – 3 min",
          "Pigeon Pose – 3 min each side",
          "Lizard Lunge – 3 min each side",
          "Reclined Bound Angle – 5 min",
          "Savasana – 5 min"
        ],
        fast: [
          "Jump Squats – 45 sec",
          "Crescent Lunge – 2 min each side",
          "Goddess Pose Flow – 2 min",
          "Frog Pose – 3 min",
          "Bridge Pose – 2 min",
          "Supine Twist – 2 min"
        ]
      }
    },
    "lower-back": {
      short: {
        slow: [
          "Cat-Cow – 2 min",
          "Child’s Pose – 2 min",
          "Supine Twist – 2 min each side",
          "Knees to Chest – 1 min",
          "Savasana – 2 min"
        ],
        fast: [
          "Bridge Pose – 1 min",
          "Chair Pose – 1 min",
          "Standing Forward Fold – 1 min",
          "Plank to Down Dog – 5 reps",
          "Supine Twist – 1 min each side"
        ]
      },
      long: {
        slow: [
          "Cat-Cow – 3 min",
          "Child’s Pose – 3 min",
          "Sphinx Pose – 3 min",
          "Thread the Needle – 3 min",
          "Reclined Twist – 3 min each side",
          "Savasana – 5 min"
        ],
        fast: [
          "Sun Salutation A – 3 rounds",
          "Bridge Pulses – 2 min",
          "Chair Pose – 2 min",
          "Warrior I – 2 min each side",
          "Down Dog to Plank – 10 reps",
          "Happy Baby – 2 min"
        ]
      }
    }
  };

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
    const poses = yogaFlows[state.bodyPart][state.duration][state.pace];

routine.innerHTML = `
  <h3>Your Personalized Flow</h3>
  <p><strong>Focus:</strong> ${state.bodyPart.replace('-', ' ')}</p>
  <p><strong>Length:</strong> ${state.duration === "long" ? "30–40 minutes" : "10–20 minutes"}</p>
  <p><strong>Pace:</strong> ${state.pace === "fast" ? "Fast & Energizing" : "Slow & Recovery-Focused"}</p>
  <h4>Suggested Routine:</h4>
  <ol>${poses.map(pose => `<li>${pose}</li>`).join('')}</ol>
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
  