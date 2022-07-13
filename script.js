let th = 0
let r = 100

draw = () => {
    document.querySelector('.planet').style.transform = `rotate(${th}rad) translate(${r}px)`
    th += 0.01
}