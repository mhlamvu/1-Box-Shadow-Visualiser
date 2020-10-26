const updateShadow = e => {
    document.documentElement.style.setProperty(
        `--${e.target.name}`, e.target.value
    )
}


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', updateShadow)
})
