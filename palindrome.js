

function checkResult() {
    const text = document.getElementById("text-input").value;
    const result = document.getElementById("result");

    if (text.length === 0) {
        window.alert("Please input a value.")
    } else {
        const testSample = Array.from(text).filter((char) => /[0-9]|[A-Za-z]/.test(char));
        if (isPalindrome(testSample)) {
            result.innerText = text + " is a palindrome."
            console.log(text)
        } else {
            result.innerText = text + " is not a palindrome.";
        }
    }
}

function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        if (arr[left].toLowerCase() !== arr[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}