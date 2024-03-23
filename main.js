// optional chainig ? 
// опціоналний ланцюжок ?

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
}

const dogName = adventurer?.dog?.name
console.log(dogName)

console.log(adventurer.someNonExistentMethod?.())

const switchEl = document.querySelector(".form-check-input")

let theme = localStorage.getItem('theme')
if(!theme) localStorage.setItem("theme", "light")
if(theme === 'light') {
    document.body.classList.remove("dark")
} else {
    if(theme === 'dark') {
        document.body.classList.add("dark")
    }
}
if(switchEl) {
    switchEl.addEventListener('input', ()=> {
        document.body.classList.toggle('dark')
          localStorage.getItem("theme") === "light"
            ? localStorage.setItem("theme", "dark")
            : localStorage.setItem("theme", "light")
    })
}
const userParams = {
    nickname: 'Mykola',
    avatar: 'https://google.com'
}

localStorage.setItem('object', JSON.stringify(userParams))
console.log(JSON.parse(localStorage.getItem("object")))
