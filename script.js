const pressed = [];
const secretCOde = "nikola";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCOde.length - 1, pressed.length - secretCOde.length);

  if (pressed.join("").includes(secretCOde)) {
    console.log("Bravo Uspeo si!");
    cornify_add();
  }

  console.log(pressed);
});
