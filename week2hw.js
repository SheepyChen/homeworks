//hw1 印星星
function printStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*')
    }
}
printStars(6)
//hw2 首字母大寫
function capitalize(name) {
    console.log(name[0].toUpperCase().concat(name.slice(1)))
}

capitalize('fefgrs');
//hw3 反轉
function reverse(stri) {
    let reverseword = ""
    for (var i = stri.length - 1; i >= 0; i--) {
        reverseword += stri[i];
    }
    console.log(reverseword)
}

reverse('flora');
//hw4印出因數
function printFactor(num) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i)
        }
    }
}
printFactor(124);

//hw5 join repat 函式
function join(arr, anotherStr) {
    ans = ''
    for (let i = 0; i < (arr.length - 1); i++) {
        ans += arr[i] + anotherStr
    }
    ans += arr[arr.length - 1]
    console.log(ans);
}
join(["a", 1, "b", 2, "c", 3], ',')

function repeat(a, b) {
    let rep = "";
    for (let i = 1; i <= b; i++) {
        rep += a;
    }
    console.log(rep);
}
repeat('yoyo', 2);

//HW6 假裝自己是電腦
function isValid(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) return 'invalid'
    }
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) return 'invalid'
    }
    return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])


