const state = {
  bodyPart: null,
  duration: null,
  pace: null
};

document.getElementById("body-part-selector").addEventListener("change", (e) => {
  state.bodyPart = e.target.value;
});

document.getElementById("duration-selector").addEventListener("change", (e) => {
  state.duration = e.target.value;
});

document.getElementById("pace-selector").addEventListener("change", (e) => {
  state.pace = e.target.value;
});

// ✅ Updated yogaFlows to match new body parts
const yogaFlows = {
  arms: {
    short: {
      slow: ["Eagle Arms – 2 min", "Cow Face Arms – 2 min", "Thread the Needle – 2 min", "Puppy Pose – 2 min", "Savasana – 2 min"],
      fast: ["Sun Salutation A – 2 rounds", "Chaturanga – 1 min", "Forearm Plank – 1 min", "Reverse Tabletop – 1 min", "Child’s Pose – 1 min"]
    },
    long: {
      slow: ["Eagle Arms – 3 min", "Cow Face Arms – 3 min", "Thread the Needle – 3 min", "Supported Fish Pose – 5 min", "Savasana – 5 min"],
      fast: ["Sun Salutation B – 3 rounds", "Chaturanga to Up Dog – 2 min", "Forearm Plank – 1 min", "Dolphin Dips – 2 min", "Bridge Pose – 2 min"]
    }
  },
  legs: {
    short: {
      slow: ["Seated Forward Fold – 2 min", "Butterfly Stretch – 2 min", "Low Lunge – 2 min", "Lizard Lunge – 2 min", "Savasana – 2 min"],
      fast: ["Jumping Jacks – 30 sec", "Goddess Pose Pulses – 1 min", "Crescent Lunge – 1 min", "Warrior II – 1 min", "Lizard Lunge – 1 min"]
    },
    long: {
      slow: ["Happy Baby – 3 min", "Pigeon Pose – 3 min", "Frog Pose – 3 min", "Reclined Bound Angle – 5 min", "Savasana – 5 min"],
      fast: ["Jump Squats – 45 sec", "Goddess Pose Flow – 2 min", "Warrior I – 2 min", "Bridge Pose – 2 min", "Supine Twist – 2 min"]
    }
  },
  back: {
    short: {
      slow: ["Cat-Cow – 2 min", "Child’s Pose – 2 min", "Supine Twist – 2 min", "Knees to Chest – 1 min", "Savasana – 2 min"],
      fast: ["Bridge Pose – 1 min", "Chair Pose – 1 min", "Standing Forward Fold – 1 min", "Plank to Down Dog – 5 reps", "Supine Twist – 1 min"]
    },
    long: {
      slow: ["Cat-Cow – 3 min", "Child’s Pose – 3 min", "Sphinx Pose – 3 min", "Thread the Needle – 3 min", "Reclined Twist – 3 min", "Savasana – 5 min"],
      fast: ["Sun Salutation A – 3 rounds", "Bridge Pulses – 2 min", "Chair Pose – 2 min", "Warrior I – 2 min", "Down Dog to Plank – 10 reps", "Happy Baby – 2 min"]
    }
  },
  core: {
    short: {
      slow: ["Forearm Plank – 1 min", "Boat Pose – 1 min", "Supine Twist – 2 min", "Bridge Pose – 2 min", "Savasana – 2 min"],
      fast: ["Jumping Jacks – 1 min", "Forearm Plank – 1 min", "Glute Pulses – 2 min", "Chair Pose – 2 min", "Supine Twist – 1 min"]
    },
    long: {
      slow: ["Forearm Plank – 2 min", "Boat Pose – 2 min", "Bridge Pose – 2 min", "Supported Fish Pose – 3 min", "Supine Twist – 3 min", "Savasana – 5 min"],
      fast: ["Jump Squats – 1 min", "Plank to Down Dog – 1 min", "Warrior I – 2 min", "Bridge Pulses – 2 min", "Reclining Twist – 2 min", "Savasana – 5 min"]
    }
  }
};

document.getElementById("generate-button").addEventListener("click", () => {
  if (Object.values(state).includes(null) || Object.values(state).includes("")) {
    alert("Please select all options before generating your flow.");
    return;
  }

  const poses = yogaFlows[state.bodyPart][state.duration][state.pace];
  localStorage.setItem("yogaState", JSON.stringify(state));
  localStorage.setItem("yogaPoses", JSON.stringify(poses));

  window.location.href = "result.html";
});
