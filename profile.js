const RULES = [
  {
    name: "min-8",
    validator: (password) => password.length >= 8,
  },
  {
    name: "uppercase",
    validator: (password) => password !== password.toLowerCase(),
  },
  {
    name: "lowercase",
    validator: (password) => password !== password.toUpperCase(),
  },
  {
    name: "numerical",
    validator: (password) => /\d/g.test(password),
  },
];

window.onload = () => {
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("password").addEventListener("change", () => {
    let password = document.getElementById("password").value;

    validate(password);
  });
};
let validate = (password) => {
  for (let rule of RULES) {
    if (rule.validator(password)) {
      document.getElementById(rule.name).style.color = "green";
    } else {
      document.getElementById(rule.name).style.color = "red";
    }
  }
};
