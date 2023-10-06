console.log('numeri da 1 a 100')
for (let i = 0; i < 100; i++) {
    const n = i + 1
    console.log(n)
}

console.log('numeri da 1 a 100 multipli di 3')
for (let i = 0; i < 100; i++) {
    const n = i + 1
    const resto = n % 3

    if (resto === 0) {
        console.log(n)
    }
}

console.log('numeri da 1 a 100 multipli di 5')
for (let i = 0; i < 100; i++) {
    const n = i + 1
    const resto = n % 5

    if (resto === 0) {
        console.log(n)
    }
}
