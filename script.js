console.log("Welcome!")

const root = document.documentElement
const toggleBtn = document.querySelector(".toggle")
const icon = document.querySelectorAll(".mini-icon")
const label = document.querySelector(".dynamic-icon")
const bell = document.querySelector(".dynamic-icon2")
const dashboard = document.querySelector(".dashboard-icon")

// theme functions below

function themeDark(){
    root.className = "dark"
    initializeTheme()
}

function themeLight(){
    root.className = "white"
    initializeTheme()
}

function setDefaultTheme(theme){
    root.className = theme
    initializeTheme()
}


// toggle theme function below

toggleBtn.addEventListener(
    "click", () => {
        console.log("previous state was: " + root.className)
        root.className === "" || root.className === "white" ? themeDark() : themeLight()
        console.log("actual state is: " + root.className)
        initializeTheme()

        
    })



// Global scope theme engine initialization 

function initializeTheme() {
    if (root.className === "dark"){
        label.setAttribute("src", "./images/icons/magnify-white.svg")
        bell.setAttribute("src", "./images/icons/bell-white.svg")
        dashboard.setAttribute("src", "./images/icons/dashboard-dark.svg")
        toggleBtn.setAttribute("src", "./images/icons/theme/sun-fill.svg")
        const icon = document.querySelectorAll(".mini-icon")
        icon.forEach(i => i.style.cssText = `background-color: hsla(0, 0%, 95%, 1.00); border-radius: 50%;`)
        
        } else {
            label.setAttribute("src", "./images/icons/magnify.svg")
            bell.setAttribute("src", "./images/icons/bell-ring.svg")
            dashboard.setAttribute("src", "./images/icons/dashboard.svg")
            toggleBtn.setAttribute("src", "./images/icons/theme/moon-stars-fill.svg")
            const icon = document.querySelectorAll(".mini-icon")
            icon.forEach(i => i.style.cssText = `background-color: hsla(0, 0%, 95%, 1.00); border-radius: 50%;`)
              }

}

// Initialize document with default theme.
setDefaultTheme("dark")
// Initialize document with default theme.