

const Scramble = (link) => {
  if (link.dataset.scrambling) return;
  link.dataset.scrambling = "true"

  const main= link.dataset.text.split("")

  const walking = [...main].sort(() => Math.random() - 0.4)

  link.innerText = walking.join("")

  setTimeout(() => {
    link.innerText = main.join("")
    delete link.dataset.scrambling
  }, 200)

};

export default Scramble;
