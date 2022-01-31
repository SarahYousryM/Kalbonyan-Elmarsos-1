let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('qwer'))
console.log(isValidPassword('jdkljls'))
console.log(isValidPassword('qwerty'))
