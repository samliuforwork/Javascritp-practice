// TO DO
// window.addEventListener('DOMContentLoaded', function() {
//     document.getElementByid('button').addEventListener('click',
//     function() {
//         const div = document.createElement('circle')
//         document.querySelector('.box').appendChild(div)
//     })
// })


window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click',
    function() {
        const div = document.createElement('div')
        div.classList.add('')
        div.className = 'time'
        div.textContent = (new Date()).toString()

        document.querySelector('.right').appendChild(div)
    })
})
