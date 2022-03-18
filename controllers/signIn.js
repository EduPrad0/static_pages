const root = document.getElementById("root");
const btn_toggleTheme = document.getElementById("btn_toggleTheme");
const image_footer = document.getElementById("footer_signIn");
const title = document.getElementById("signIn-title");
const paragraph = document.getElementsByClassName("paragraph_signIn")[0];
const remember = document.querySelectorAll("label")[0]
const forgot = document.getElementById("forgot_pass");
let controllerState = true;

btn_toggleTheme.addEventListener("click", () => {
  const colorsText = controllerState ? 'var(--title-signIn-default)' : 'var(--title-signIn-light)'

  root.style.background = controllerState ? 'var(--bg-default)' : 'var(--bg-light)';
  image_footer.setAttribute("src", `../assets/sign/${controllerState ? 'signInDefault' : 'siginInLight'}.svg`);
  forgot.style.color = controllerState ? '#20DF7F' : 'black';

  title.style.color = colorsText;
  paragraph.style.color = colorsText;
  remember.style.color = colorsText;

  controllerState = !controllerState;
})