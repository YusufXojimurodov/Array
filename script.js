const mevalar = ["banan", "olma", "shaftoli", "Gilos",]


alert ("Arrayning uzunligi: " +  mevalar.length)

let tasdiqlash = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz")

if (tasdiqlash) {
    mevalar.shift()
    alert("Arrayning uzunligi: " +  mevalar.length)
} else {
    alert("Arrayning uzunligi: " +  mevalar.length)
}

console.log(mevalar);
