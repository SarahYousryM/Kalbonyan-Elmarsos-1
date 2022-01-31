let gettep = function (total, Percentage = .2) {
    let percent = Percentage * 100
    let tep = total * Percentage
    return `A ${percent}% tep on $${total} would be $${tep}`
}

let tep = gettep(60)
console.log(tep)
