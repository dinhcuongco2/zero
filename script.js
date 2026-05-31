async function connectWallet(){

    if(!window.ethereum){
        alert("Please install MetaMask");
        return;
    }

    try{

        const accounts = await ethereum.request({
            method:"eth_requestAccounts"
        });

        const address = accounts[0];

        document.getElementById("connectWallet").innerText =
            address.slice(0,6) + "..." + address.slice(-4);

        document.getElementById("heroConnectWallet").innerText =
            "Wallet Connected";

    }catch(error){
        console.error(error);
    }
}

document.getElementById("connectWallet")
.addEventListener("click", connectWallet);

document.getElementById("heroConnectWallet")
.addEventListener("click", connectWallet);

let value = 0;

const counter = setInterval(() => {

    value += 25000000;

    document.getElementById("tvl").innerText =
        "$" + (value / 1000000000).toFixed(2) + "B";

    if(value >= 1500000000){
        clearInterval(counter);
    }

}, 50);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document
.querySelectorAll(".card,.timeline-item,.faq-item")
.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = ".6s";

    observer.observe(el);

});
