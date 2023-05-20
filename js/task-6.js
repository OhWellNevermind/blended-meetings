function isPalidrom() {
    const user = prompt("Your string:");
    if (!user) {
        alert('Please enter string: ');
        const message = "Reload page";
        return message;
    } else {
        const normalStr = user.toLowerCase().split(' ').join('');
        const revStr = normalStr.split('').reverse().join('');
        return normalStr === revStr;
    }


}

console.log(isPalidrom());