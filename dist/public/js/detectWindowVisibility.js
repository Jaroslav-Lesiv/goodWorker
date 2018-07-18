// const onBlur = () => {
//     chrome.runtime.sendMessage({ site: sait, time: localStorage[sait] });
//     localStorage.setItem(sait, '0')
// }

window.addEventListener('focus', () => {
    const visibility = document.webkitVisibilityState == 'visible'
    console.log('focused', visibility)
})

window.addEventListener('blur', () => {
    const visibility = document.webkitVisibilityState == 'visible'
    console.log('blur', visibility)
})
