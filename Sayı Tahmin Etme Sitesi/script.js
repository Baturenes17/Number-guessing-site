let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (newmessage) {
    document.querySelector("#message").textContent = newmessage;
}


$(document).ready(function () {
    $("#kontrol").click(function () {
        const guess = Number(document.querySelector("#input").value);

        if (!guess) {
            displayMessage("Bir Sayı Giriniz")
        }

        //Tahmin

        if (guess < secretNumber) {
            displayMessage("Daha Yukarıda")
            score = score - 5;
            document.querySelector("#score").textContent = " Yeni Skorunuz: " + score;
            $(document).ready(function () {
                $("body").removeClass("correctbody")
            })
                        $(document).ready(function () {
                $("body").removeClass("correctbody")
            })


        } else {
            displayMessage("Daha Aşağıda")
            score = score - 5;
            document.querySelector("#score").textContent = " Yeni Skorunuz: " + score;
            $(document).ready(function () {
                $("body").removeClass("correctbody")
            })

        }

        //Doğru Sonuç
        if (guess === secretNumber) {
            displayMessage("Doğru Tahmin")

            $(document).ready(function () {
                $("body").addClass("correctbody")
            })

            score = score + 15;
            document.querySelector("#score").textContent = " Yeni Skorunuz: " + score;

            function addItem() {
                localStorage.setItem("highest", score);
            }

            addItem()

            document.querySelector("#soru").textContent = secretNumber;

            document.querySelector("#highest").textContent = "En Yüksek Skorunuz: "+ localStorage.getItem("highest");
        }

    })
})


$(document).ready(function () {
    $("#again").click(function () {
        $("body").removeClass("correctbody")
        displayMessage("Bir Sayı Giriniz")
        score = 20;
        document.querySelector("#score").textContent = "Skor: "+score
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector("#soru").textContent = "?";
        document.querySelector("#input").value = ""
        console.log(secretNumber)
    })
})

console.log(secretNumber)
