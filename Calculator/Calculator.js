class Calculator {
    constructor() {
        this.result = 0
        this.prevEntry = 0
        this.operation = null
        this.currentEntry = '0'
    }
    start() {
        this.updateScreen(this.result)

        $('.button').on('click', (event) => {
            let target = $(event.target).html()

            if (target === 'C') {
                this.result = 0
                this.currentEntry = '0'
            }
            if (target === 'CE') {
                this.currentEntry = '0'
            }
            if (target === 'DEL') {
                this.currentEntry = this.currentEntry.substring(0, this.currentEntry.length - 1)
            }
            if (target === '+/-') {
                this.currentEntry *= -1
            }
            if (target === '.') {
                this.currentEntry += '.'
            }
            if (this.isNumber(target)) {
                if (this.currentEntry === '0') {
                    this.currentEntry = target
                } else {
                    this.currentEntry = this.currentEntry + target
                }
            }
            if (this.isOperator(target)) {
                this.prevEntry = parseFloat(this.currentEntry)
                this.operation = target
                this.currentEntry = ''
            }
            if (target === '%') {
                this.currentEntry = this.currentEntry / 100
            }
            if (target === 'sqrt') {
                this.currentEntry = Math.sqrt(this.currentEntry)
            }
            if (target === '1/x') {
                this.currentEntry = 1 / this.currentEntry
            }
            if (target === 'PI') {
                this.currentEntry = Math.PI
            }
            if (target === '=') {
                this.currentEntry = this.operate(this.prevEntry, this.currentEntry, this.operation)
                this.operation = null
            }
            this.updateScreen(this.currentEntry)
        })
    }
    updateScreen(displayValue) {
        displayValue = displayValue.toString()
        $('.screen').html(displayValue.substring(0, 10))
    }
    isNumber(value) {
        return !isNaN(value)
    }
    isOperator(value) {
        return value === '/' || value === '*' || value === '+' || value === '-'
    }
    operate(first, second, operation) {
        first = parseFloat(first)
        second = parseFloat(second)
        if (operation === '+') {
            return first + second
        }
        if (operation === '-') {
            return first - second
        }
        if (operation === '*') {
            return first * second
        }
        if (operation === '/') {
            return first / second
        }
    }
}

$('document').ready(() => {
    const calc = new Calculator()
    calc.start()
})

