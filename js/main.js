const item = document.querySelectorAll("#item")

const triggerAnimation = (entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: .5
}

const observer = new IntersectionObserver(triggerAnimation, options)

item.forEach((item) => {
    observer.observe(item)
})