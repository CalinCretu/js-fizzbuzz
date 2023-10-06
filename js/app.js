const gridDOMElement = document.querySelector('.grid')



for (let i = 1; i <= 100; i++) {
    const n = i
    const boxDOMElement = document.createElement('div')
    boxDOMElement.classList.add('box')

    if (n % 3 === 0 && n % 5 === 0) {
        boxDOMElement.classList.add('bkpink')
        boxDOMElement.innerHTML = 'FizzBuzz'
        console.log('FizzBuzz')
    }
    else if (n % 3 === 0) {
        boxDOMElement.classList.add('bkgreen')
        boxDOMElement.innerHTML = 'Fizz'
        console.log('Fizz')
    }
    else if (n % 5 === 0) {
        boxDOMElement.classList.add('bkyellow')
        boxDOMElement.innerHTML = 'Buzz'
        console.log('Buzz')
    }
    else {
        boxDOMElement.classList.add('bkblue')
        boxDOMElement.innerHTML = n
        console.log(n)
    }
    gridDOMElement.append(boxDOMElement)
}


