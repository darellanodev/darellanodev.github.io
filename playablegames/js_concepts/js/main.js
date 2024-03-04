const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault()

        navLinks.forEach(link => {
            link.classList.remove('current')
        })

        this.classList.add('current')

        const example = `${this.id}.js`

        fetch(`./js/examples/${example}`)
            .then(response => response.text())
            .then(data => {
            
                const codeBlock = document.querySelector('pre code')
            
                codeBlock.removeAttribute('data-highlighted')
                codeBlock.textContent = data
                hljs.highlightAll()
            })
            .catch(error => {
                console.error('Error loading file:', error)    
            })

    })
})
