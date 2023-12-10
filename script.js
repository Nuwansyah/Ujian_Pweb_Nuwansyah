let playerName = "";
let health = 100;
let defense = 0;
let xp = 0;
let inventory = [];
let money = 300;
let attack = 2
let keskabur = 1;
let helmet = 0;
let armor = 0;
let boots = 0;


let monstertype = 0;
let mhealth = 0;
let mattack = 0;
let mdefense = 0;
let xpreward = 0;
let mkeskabur = 0;

//fungsi yang jalan tanpa interaksi
setInterval(updatelayar, 5);
updateProfile();


function startGame() {
    sword1.disabled = false;
    sword2.disabled = true;
    sword3.disabled = true;

    helm1.disabled = false;
    helm2.disabled = true;
    helm3.disabled = true;

    armor1.disabled = false;
    armor2.disabled = true;
    armor3.disabled = true;

    boots1.disabled = false;
    boots2.disabled = true;
    boots3.disabled = true;

    const playerName = document.getElementById('playerName').value.trim();
    
    if (playerName !== "") {
        document.getElementById('preGameMenu').style.display = 'none';
        document.getElementById('profile').style.display = 'block';
        document.getElementById('judul1').style.display = 'none';
        document.getElementById('profilePlayerName').textContent = playerName;
        updateProfile();
    } else {
        alert("Tolong isi nama!");
    }
}


//function highscore

function displayHighScores() {
    var highScoresList = document.getElementById('highScoresList');
    highScoresList.innerHTML = ''; // Kosongkan konten sebelum menambahkan yang baru

    // Ambil high scores dari localStorage
    var highScores = localStorage.getItem('highScores');
    if (highScores) {
        // Jika ada high scores, parse string JSON menjadi array
        highScores = JSON.parse(highScores);

        // Tampilkan high scores dalam elemen list
        highScores.forEach(function (score) {
            var listItem = document.createElement('li');
            listItem.textContent = score.playerName + ': ' + score.score + ' Point';
            highScoresList.appendChild(listItem);
        });
    }
}
function clearHighScores() {
    localStorage.removeItem('highScores');

    // Panggil fungsi displayHighScores untuk menampilkan high scores (yang sekarang kosong)
    displayHighScores();
}

function updateProfile() {
    document.getElementById('health').textContent = health;
    document.getElementById('defense').textContent = defense;
    document.getElementById('xp').textContent = xp;
}



// Function inventory

function openInventory() {
    document.getElementById('inventory').style.display = 'block';
    updateInventoryList();
    document.getElementById('profile').style.display = 'none';
}

function closeInventory() {
    document.getElementById('inventory').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
}


function updateInventoryList() {
    let list = document.getElementById('inventoryList');
    list.innerHTML = '';

    if (inventory.length === 0) {
        list.innerHTML = '<li>No items in inventory</li>';
    } else {
        for (let item of inventory) {
            let listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        }
    }
}

//function shop

function openShop() {
    document.getElementById('shop').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('shopMoney').textContent = money;
}

function closeShop() {
    document.getElementById('shop').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
}


function buySword(price, damage, nosword) {
    
    if (money >= price) {
        money -= price;

        switch(nosword) {
            case 1:
                inventory.push(`Wooden Sword (Damage: ${damage})`);
                alert(`Kamu membeli Wooden Sword dengan Damage: ${damage} !`);
                var sword1 = document.getElementById('sword1');
                var sword2 = document.getElementById('sword2');
                sword1.innerHTML = 'Pedang telah dibeli.';
                sword1.disabled = true;
                updateInventoryList();
                sword2.disabled = false;
                attack = damage;
                swordtype = 'Wooden Sword';
                document.getElementById('Etangan').textContent = swordtype;
                updateProfile()
              break;

            case 2:
                inventory.push(`Iron Sword (Damage: ${damage})`);
                alert(`Kamu membeli Iron Sword dengan Damage: ${damage} !`);
                var sword2 = document.getElementById('sword2');
                var sword3 = document.getElementById('sword3');
                sword2.innerHTML = 'Pedang telah dibeli.';
                sword2.disabled = true;
                updateInventoryList();
                sword3.disabled = false;
                attack = damage;
                swordtype = 'Iron Sword';
                document.getElementById('Etangan').textContent = swordtype;
                updateProfile()
              break;

            case 3:
                inventory.push(`Legendary Sword (Damage: ${damage})`);
                alert(`Kamu membeli Legendary Sword dengan Damage: ${damage} !`);
                var sword3 = document.getElementById('sword3');
                sword3.innerHTML = 'Pedang telah dibeli.';
                sword3.disabled = true;
                updateInventoryList();
                attack = damage;
                swordtype = 'Legendary Sword';
                document.getElementById('Etangan').textContent = swordtype;
                updateProfile()
              break;
            default:

            document.getElementById('money').textContent = money;
            document.getElementById('shopMoney').textContent = money;
          }
    } else {
        alert("Gak punya duit cukup.");
    }
    
}
function buyhelm(price, defense2, nohelm) {
    
    if (money >= price) {
        money -= price;

        switch(nohelm) {
            case 1:
                inventory.push(`Leather Helmet (defense: ${defense2})`);
                alert(`Kamu membeli Leather helm dengan defense: ${defense2} !`);
                var helm1 = document.getElementById('helm1');
                var helm2 = document.getElementById('helm2');
                helm1.innerHTML = 'helm telah dibeli.';
                helm1.disabled = true;
                updateInventoryList();
                helm2.disabled = false;
                helmet = defense2
                defense = (helmet + armor + boots);
                defensetype = 'Leather helm';
                document.getElementById('Ekepala').textContent = defensetype;
                updateProfile()
              break;

            case 2:
                inventory.push(`Iron Helmet (defense: ${defense2})`);
                alert(`Kamu membeli Iron helm dengan defense: ${defense2} !`);
                var helm2 = document.getElementById('helm2');
                var helm3 = document.getElementById('helm3');
                helm2.innerHTML = 'helm telah dibeli.';
                helm2.disabled = true;
                updateInventoryList();
                helm3.disabled = false;
                helmet = defense2
                defense = (helmet + armor + boots);
                defensetype = 'Iron Helmet';
                document.getElementById('Ekepala').textContent = defensetype;
                updateProfile()
              break;

            case 3:
                inventory.push(`Legendary Helmet (defense: ${defense2})`);
                alert(`Kamu membeli Iron helm dengan defense: ${defense2} !`);
                var helm3 = document.getElementById('helm3');
                helm3.innerHTML = 'helm telah dibeli.';
                helm3.disabled = true;
                updateInventoryList();
                helmet = defense2
                defense = (helmet + armor + boots);
                defensetype = 'Legendary Helmet';
                document.getElementById('Ekepala').textContent = defensetype;
                updateProfile()
              break;
            default:

            document.getElementById('money').textContent = money;
            document.getElementById('shopMoney').textContent = money;
          }
    } else {
        alert("Gak punya duit cukup.");
    }
    
}
function buyarmor(price, defense1, noarmor) {
    
    if (money >= price) {
        money -= price;

        switch(noarmor) {
            case 1:
                inventory.push(`Leather Armor (defense: ${defense1})`);
                alert(`Kamu membeli Leather Armor dengan defense: ${defense1} !`);
                var armor1 = document.getElementById('armor1');
                var armor2 = document.getElementById('armor2');
                armor1.innerHTML = 'armor telah dibeli.';
                armor1.disabled = true;
                updateInventoryList();
                armor2.disabled = false;
                armor = defense1
                defense = (helmet + armor + boots);
                defensetype = 'Leather Armor';
                document.getElementById('Ebadan').textContent = defensetype;
                updateProfile()
              break;

            case 2:
                inventory.push(`Iron Armor (defense: ${defense1})`);
                alert(`Kamu membeli Iron Armor dengan defense: ${defense1} !`);
                var armor2 = document.getElementById('armor2');
                var armor3 = document.getElementById('armor3');
                armor2.innerHTML = 'armor telah dibeli.';
                armor2.disabled = true;
                updateInventoryList();
                armor3.disabled = false;
                armor = defense1
                defense = (helmet + armor + boots);
                defensetype = 'Iron Armor';
                document.getElementById('Ebadan').textContent = defensetype;
                updateProfile()
              break;

            case 3:
                inventory.push(`Legendary Armor (defense: ${defense1})`);
                alert(`Kamu membeli Iron Armor dengan defense: ${defense1} !`);
                var armor3 = document.getElementById('armor3');
                armor3.innerHTML = 'armor telah dibeli.';
                armor3.disabled = true;
                updateInventoryList();
                armor = defense1
                defense = (helmet + armor + boots);
                defensetype = 'Legendary Armor';
                document.getElementById('Ebadan').textContent = defensetype;
                updateProfile()
              break;
            default:

            document.getElementById('money').textContent = money;
            document.getElementById('shopMoney').textContent = money;
          }
    } else {
        alert("Gak punya duit cukup.");
    }
    
}
function buyboots(price, defense3, noboots) {
    
    if (money >= price) {
        money -= price;

        switch(noboots) {
            case 1:
                inventory.push(`Leather boots (defense: ${defense3})`);
                alert(`Kamu membeli Leather boots dengan defense: ${defense3} !`);
                var boots1 = document.getElementById('boots1');
                var boots2 = document.getElementById('boots2');
                boots1.innerHTML = 'boots telah dibeli.';
                boots1.disabled = true;
                updateInventoryList();
                boots2.disabled = false;
                boots = defense3
                defense = (helmet + boots + boots);
                defensetype = 'Leather boots';
                document.getElementById('Ekaki').textContent = defensetype;
                updateProfile()
              break;

            case 2:
                inventory.push(`Iron boots (defense: ${defense3})`);
                alert(`Kamu membeli Iron boots dengan defense: ${defense3} !`);
                var boots2 = document.getElementById('boots2');
                var boots3 = document.getElementById('boots3');
                boots2.innerHTML = 'boots telah dibeli.';
                boots2.disabled = true;
                updateInventoryList();
                boots3.disabled = false;
                boots = defense3
                defense = (helmet + boots + boots);
                defensetype = 'Iron boots';
                document.getElementById('Ekaki').textContent = defensetype;
                updateProfile()
              break;

            case 3:
                inventory.push(`Legendary boots (defense: ${defense3})`);
                alert(`Kamu membeli Iron boots dengan defense: ${defense3} !`);
                var boots3 = document.getElementById('boots3');
                boots3.innerHTML = 'boots telah dibeli.';
                boots3.disabled = true;
                updateInventoryList();
                boots = defense3
                defense = (helmet + boots + boots);
                defensetype = 'Legendary boots';
                document.getElementById('Ekaki').textContent = defensetype;
                updateProfile()
              break;
            default:

            document.getElementById('money').textContent = money;
            document.getElementById('shopMoney').textContent = money;
          }
    } else {
        alert("Gak punya duit cukup.");
    }
    
}


//function hutan

function bukapergikehutan(){
    document.getElementById('profile').style.display = 'none';
    document.getElementById('battleground').style.display = 'none';
    document.getElementById('forest').style.display = 'block';
    setTimeout(function() {
        document.getElementById('hasilhutan').textContent = "Apa yang ingin kamu lakukan disini?.."
        btn_telusuri.disabled = false;
    }, 3000);
    
    updateProfile();
}
function kembalikerumah(){
    document.getElementById('profile').style.display = 'block';
    document.getElementById('forest').style.display = 'none';
}

function eventhutan(){
    let eventacak = Math.floor((Math.random() * 10) + 1);

    switch(eventacak){
        case 1 :
            document.getElementById('hasilhutan').textContent = "Kamu meneluri hutan lebih jauh.. mendapatkan 3 exp."
            xp = xp + 3;
            btn_telusuri.disabled = true;
            setTimeout(function() {
                btn_telusuri.disabled = false;
            }, 2000);
        break;

        case 2 :
            document.getElementById('hasilhutan').textContent = "kamu tidak menemukan apa-apa."
            btn_telusuri.disabled = true;
            setTimeout(function() {
                btn_telusuri.disabled = false;
            }, 2000);
        break;

        case 3 :
            document.getElementById('hasilhutan').textContent = "Hoki kamu mendapatkan duit receh $2"
            money += 2;
            btn_telusuri.disabled = true;
            setTimeout(function() {
                btn_telusuri.disabled = false;
            }, 2000);
        break;

        case 4 :
            document.getElementById('hasilhutan').textContent = "kamu menemukan tanaman herbal 1x"
            inventory.push(`Herb`);
            btn_telusuri.disabled = true;
            setTimeout(function() {
                btn_telusuri.disabled = false;
            }, 2000);
        break;

        case 5 :
            document.getElementById('hasilhutan').textContent = "kamu tidak menemukan apa"
            btn_telusuri.disabled = true;
            setTimeout(function() {
                btn_telusuri.disabled = false;
            }, 2000);
        break;

        case 6 :
            document.getElementById('hasilhutan').textContent = "kamu terpeleset, mendapatkan damage 1"
            health = health - 1;
            if(health <= 0){
                gameOver();
            }
            btn_telusuri.disabled = true;
            setTimeout(function() {
                btn_telusuri.disabled = false;
            }, 2000);
        break;

        case 7 :
            alert(`Kamu bertemu Goblin !`);
            monstertype = 1;
            battleground()
        break;

        case 8 :
            alert(`Kamu bertemu Wolf !`);
            monstertype = 2;
            battleground()
        break;

        case 9 :
            alert(`Kamu bertemu Goblin !`);
            monstertype = 1;
            battleground()
        break;

        case 10 :
            alert(`Kamu bertemu Wolf !`);
            monstertype = 2;
            battleground()

        break;

    }
}

//function battle

function battleground(){
    document.getElementById('forest').style.display = 'none';
    document.getElementById('battleground').style.display = 'block';
    document.getElementById('notifikasibattle').textContent = "Apa yang akan kamu lakukan";

    switch(monstertype){
        case 1 :
            mhealth = 20;
            mattack = 5;
            mdefense = 1;
            xpreward = 10;
            mkeskabur = 10;
            document.getElementById('namamonster').textContent = "Goblin"
        break;

        case 2 :
            mhealth = 35;
            mattack = 7;
            mdefense = 3;
            xpreward = 20;
            mkeskabur = 35;
            document.getElementById('namamonster').textContent = "Wolf"
        break;


    }

}



function serangmusuh(){
    if(attack <= mdefense){
        mhealth = mhealth - 0;
        document.getElementById('notifikasibattle').textContent = "Kamu tidak bisa melukai musuh karna pertahanannya terlalu kuat!, memberikan 0 damage";
    }else {
        mhealth = mhealth - (attack-mdefense);
        document.getElementById('notifikasibattle').textContent = "Kamu menyerang musuh.., memberikan " + (attack-mdefense) + " damage";
    }
    
    
    setTimeout(function() {
        musuhmenyerang();
        btn_serang.innerHTML = 'Serang';
        btn_serang.disabled = false;
    }, 3000);
        btn_serang.innerHTML = 'Menyerang';
        btn_serang.disabled = true;

    
}
function musuhmenyerang(){
    if(mattack <= defense){
        health = health - 0;
        document.getElementById('notifikasibattle').textContent = "Musuh tidak dapat menggores sedikitpun!";
    }else {
        health = health - (mattack-defense);
        document.getElementById('notifikasibattle').textContent = "Musuh menyerangmu.., memberikan " + (mattack - defense) + " damage";
    }
    
    kalkulasitepur()
}

function kalkulasitepur(){
    if (mhealth <= 0 ){
        xp += xpreward
        alert(`Kamu menang, selamat mendapatkan ` + xpreward + " XP ");
        document.getElementById('hasilhutan').textContent = "Kamu membunuh monster jelek. Selamat!"
        btn_telusuri.disabled = true;
        setTimeout(function() {
            btn_telusuri.disabled = false;
        }, 2000);
        bukapergikehutan();
    }else if (health <= 0){
        gameOver();

    }
    
}

function kaburlah(){
    lkabur = Math.floor((Math.random() * 10) + 1);

    if  (lkabur >= 5){
        document.getElementById('notifikasibattle').textContent = "Kamu gagal kabur... mendapatkan damage dari musuh";
        health -= 10;
        kalkulasitepur()

    }else {
        document.getElementById('hasilhutan').textContent = "Kamu berhasil kabur dari monster..."
        btn_telusuri.disabled = true;
        bukapergikehutan()
    }

}

//function gameplay

function gameOver() {
    const playerName = document.getElementById('profilePlayerName').textContent;
    const score = xp; 

    saveHighScore(playerName, score);

    alert(`Kamu mati mengenaskan.. Score kamu : ${score}`);
    resetGame();
}

function saveHighScore(playerName, score){
    var playerName = document.getElementById('playerName').value;
    var score = xp

    // Ambil high scores dari localStorage
    var highScores = localStorage.getItem('highScores');

    // Jika belum ada highScores di localStorage, inisialisasi sebagai array kosong
    if (!highScores) {
        highScores = [];
    } else {
        // Jika sudah ada, parse string JSON menjadi array
        highScores = JSON.parse(highScores);
    }

    // Tambahkan data debug ke dalam array
    highScores.push({ playerName: playerName, score: score });

    // Simpan kembali highScores ke localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // Panggil fungsi displayHighScores untuk menampilkan high scores
    displayHighScores();
}


function resetGame() {
    //variable player
    playerName = "";
    health = 100;
    defense = 0;
    xp = 0;
    inventory = [];
    money = 100;
    attack = 2

    //variable monster
    monstertype = 0;
    mhealth = 0;
    mattack = 0;
    mdefense = 0;
     xpreward = 0;

    updateProfile();
    closeInventory();
    document.getElementById('profile').style.display = 'none';
    document.getElementById('battleground').style.display = 'none';
    document.getElementById('forest').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('preGameMenu').style.display = 'block';
    document.getElementById('judul1').style.display = 'block';
    document.getElementById('Highscore').style.display = 'block';
}

//function background

function updatelayar() {

    document.getElementById('health').textContent = health;
    document.getElementById('attack').textContent = attack;
    document.getElementById('defense').textContent = defense;
    document.getElementById('xp').textContent = xp;
    document.getElementById('money').textContent = money;
    document.getElementById('shopMoney').textContent = money;

    document.getElementById('health1').textContent = health;
    document.getElementById('attack1').textContent = attack;
    document.getElementById('defense1').textContent = defense;
    document.getElementById('xp1').textContent = xp;

    document.getElementById('health2').textContent = health;
    document.getElementById('attack2').textContent = attack;
    document.getElementById('defense2').textContent = defense;

    document.getElementById('mhealth1').textContent = mhealth;
    document.getElementById('mattack1').textContent = mattack;
    document.getElementById('mdefense1').textContent = mdefense;
}


