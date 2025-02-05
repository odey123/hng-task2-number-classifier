const express = require ('express')
const cors = require ('cors')
const axios = require ('axios')

const app = express ()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0 ) return false
    }
    return true;
}

function isPerfect(num) {
    if (num < 2) return false;
    let sum = 1
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i
        }
    }  
    return sum === num      
}

function isArmstrong(num) {
    const digits = String(num).split('');
    const len = digits.length
    const sum = digits.reduce((acc, digits) =>
    acc + Math.pow(parseInt(digits, 10), len), 0)
        return sum === num;
}

function getParity(num) {
    return num % 2 === 0 ? 'even' : 'odd' ;
}

function getDigitSum(num) {
    return String(num).split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0)
}

async function getFunFact(num) {
   try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`)
      return response.data.text;
   } catch (error) {
    console.error('Error fetching fun fact:', error)
       return null
   }
}

app.get('/api/classify-number', async (req, res) => {
    const number = req.query.number;
    if (number === undefined || number === '' || isNaN(number)) {
        return res.status(400).json({
            number: number,
            error: true
        })
    }
    const num = parseInt(number, 10)

    const isPrimeNum = isPrime(num);
    const isPerfectNum = isPerfect(num);
    const isArmstrongNum = isArmstrong(num);
    const parity = getParity(num);
    const digitSum = getDigitSum(num);
    const funFact = await Promise.all ([getFunFact(num)]);

    const properties = [];
    if (isArmstrongNum) properties.push('armstrong');
    properties.push(parity);

    res.status(200).json({
        number: num,
        is_prime: isPrimeNum,
        is_perfect: isPerfectNum,
        properties: properties,
        digit_sum: digitSum,
        fun_fact: funFact
    });
})


app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

