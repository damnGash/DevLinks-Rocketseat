function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  
  const desc = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    desc.setAttribute("alt", "gato loucura")
  } else {
    desc.setAttribute("alt", "gato sleepando")
  }

  const icon = document.querySelector("#icon")

  if (html.classList.contains("light")) {
    icon.setAttribute("href", "./assets/avatar-light.png")
  } else {
    icon.setAttribute("href", "./assets/avatar.png")
  }
}
