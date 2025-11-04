import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// users.txt унших
function readUsers() {
  if (!fs.existsSync("users.txt")) return [];
  const data = fs.readFileSync("users.txt", "utf-8");
  return data ? JSON.parse(data) : [];
}

// users.txt-д бичих
function writeUsers(users) {
       

  fs.writeFileSync("users.txt", JSON.stringify(users, null, 2));
}

// Transactions log бичих
function logTransaction(username, type, amount) {
  const log =  ${username} | ${type} | ${amount}₮\n;
  fs.appendFileSync("transactions.txt", log);
}

// =======================
// Register
// =======================
function register() {
  rl.question("Хэрэглэгчийн нэр: ", (username) => {
    rl.question("PIN код: ", (pin) => {
      rl.question("Эхний үлдэгдэл: ", (balance) => {
        const users = readUsers();

        for(const element of users ){
          if(  element.username ===  username){
              console.log("⚠️ Энэ нэрээр хэрэглэгч бүртгэлтэй байна!");
          }

        }
        if (users.find((u) => u.username === username)) {
          console.log("⚠️ Энэ нэрээр хэрэглэгч бүртгэлтэй байна!");
          return rl.close();
        }

        users.push({
          username,
          pin,
          balance: Number(balance),
        });
        writeUsers(users);
        console.log("✅ Амжилттай бүртгэгдлээ!");
        rl.close();
      });
    });
  });
}

// =======================
// Login + Menu
// =======================
function login() {
  rl.question("Хэрэглэгчийн нэр: ", (username) => {
    rl.question("PIN код: ", (pin) => {
      const users = readUsers();
      const user = users.find((u) => u.username === username && u.pin === pin);

      if (!user) {
        console.log("❌ Нэвтрэх мэдээлэл буруу!");
        rl.close();
      } else {
        console.log(✅ Тавтай морил ${username}!);
      
        showMenu(user);
      }
    });
  });
}

function showMenu(user) {
  console.log(`
==== ATM MENU ====
1. Үлдэгдэл шалгах
2. Мөнгө нэмэх
3. Мөнгө авах
4. Гарах
`);

  rl.question("Сонголт: ", (choice) => {
    const users = readUsers();
    const current = users.find((u) => u.username === user.username);

    switch (choice) {
      case "1":
        console.log(💰 Таны үлдэгдэл: ${current.balance}₮);
        break;

      case "2":
        rl.question("Нэмэх дүн: ", (amt) => {
          current.balance += Number(amt);
          writeUsers(users);
          logTransaction(current.username, "Deposit", amt);
          console.log(✅ ${amt}₮ нэмэгдлээ!);
          return showMenu(current);
        });
        return;

      case "3":
        rl.question("Авах дүн: ", (amt) => {
          amt = Number(amt);
          if (amt > current.balance) {
            console.log("❌ Үлдэгдэл хүрэлцэхгүй!");
          } else {
            current.balance -= amt;
            writeUsers(users);
            logTransaction(current.username, "Withdraw", amt);
            console.log(✅ ${amt}₮ амжилттай авлаа!);
          }
          return showMenu(current);
        });
        return;

      case "4":
        console.log("👋 Сайхан өдөр байна!");
        return rl.close();

      default:
        console.log("⚠️ Буруу сонголт!");
        break;
    }

    showMenu(current);
  });
}

// =======================
// Main
// =======================
console.log(`
==== ATM SYSTEM ====
1. Нэвтрэх
2. Бүртгүүлэх
`);

rl.question("Сонголтоо оруулна уу: ", (startChoice) => {
  if (startChoice === "1") login();
  else if (startChoice === "2") register();
  else {
    console.log("⚠️ Буруу сонголт!");
    rl.close();
  }
});
