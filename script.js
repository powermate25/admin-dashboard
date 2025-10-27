console.log("Hello World")

const root = document.documentElement
const toggleBtn = document.querySelector(".toggle")
root.className = "white"

const icon = document.querySelectorAll(".mini-icon")
const label = document.querySelector(`.dynamic-icon`)
const bell = document.querySelector(`.dynamic-icon2`)



function themeDark(){
    root.className = "dark"
}


function themeLight(){
    root.className = "white"
}

toggleBtn.addEventListener(
    "click", () => {
        console.log("previous state was: " + root.className)
        root.className === "" || root.className === "white" ? themeDark() : themeLight()
        console.log("actual state is: " + root.className)
        /* console.log(bell)
        console.log(label) */

        if (root.className === "dark"){
        label.setAttribute("src", "./images/icons/magnify-white.svg")
        bell.setAttribute("src", "./images/icons/bell-white.svg")
        const icon = document.querySelectorAll(".mini-icon")
        icon.forEach(i => i.style.cssText = `background-color: hsla(0, 0%, 95%, 1.00); border-radius: 50%;`)
        /* console.log(bell)
        console.log(root.className) */

        } else {
            label.setAttribute("src", "./images/icons/magnify.svg")
            bell.setAttribute("src", "./images/icons/bell-ring.svg")
            const icon = document.querySelectorAll(".mini-icon")
            icon.forEach(i => i.style.cssText = `background-color: hsla(0, 0%, 95%, 1.00); border-radius: 50%;`)
            /* console.log(bell)
            console.log(root.className) */

        }

    })