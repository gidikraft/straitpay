const createCreditCardNumber = (numberInStringformat) => {
    if (numberInStringformat.length !== 10) return "card length must be 10"
    let result = ""
    let finalResult = 0
    let bucket1 = []
    let bucket2 = []
    for (let i = numberInStringformat.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) continue
        let t = numberInStringformat[i]
        if ((Number(t) * 2).toString().length > 1) {
            const val = Number((Number(t) * 2).toString()[0]) + Number((Number(t) * 2).toString()[1])
            bucket1.unshift(val.toString())
        } else {
            bucket1.unshift((Number(t) * 2).toString())
        }
    }
    for (let i = 0; i <= numberInStringformat.length - 1; i++) {
        if (i % 2 !== 0)
            bucket2.push(numberInStringformat[i])
    }

    for (let i = 0; i <= 4; i++) {
        result = result + bucket1[i]
        result = result + bucket2[i]
    }
    for (let i = 0; i < result.length; i++) {
        finalResult = finalResult + Number(result[i])
    }

    if (finalResult % 10 == 0) {
        return "valid card number";
    } else {
        return "invalid card number"
    }
    console.log(finalResult)
}