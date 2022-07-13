let θ = 0
let r = 1.471e11
let v = 30290

let µ = 1.98847e30 * 6.6743e-11

draw = () => {
    document.querySelector('.planet').style.transform = `rotate(${θ}rad) translate(${r}px)`
    θ += 0.01
}