import express from "express";
import fs from "node:fs/promises";

const app = express();




const getUsers = async () => {
  const userRawData = await fs.readFile("users.json", "utf-8");
  const users = JSON.parse(userRawData);

  return users;
};

const updateUser = async (users, user, amount, type) => {
  const userData = JSON.stringify(users);

  await fs.writeFile("users.json", userData, "utf-8");

  const historyRawData = await fs.readFile("history.json", "utf-8");
  const history = JSON.parse(historyRawData);

  const userHistories = history[user.username] || [];

  userHistories.push({
    type,
    amount,
    balance: user.balance,
    currentBalance: 0
  });

  history[user.username] = userHistories;

  const historyData = JSON.stringify(history);

  await fs.writeFile("history.json", historyData, "utf-8");
  console.log("Amjilttai");

  return;
};


app.use(express.json());
  app.get("/get-user/:id", async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile("users.json", "utf-8");
  const users = JSON.parse(data);

    if (!user) {
     res.status(404).send("User not found");ß
  }

  res.json(user);
  const user = users.find(u => u.id == id); 
  });


  
app.get("/get-users", async (req, res) => {
  const { firstName, age } = req.query;
  const data = await fs.readFile("users.json", "utf-8");

  const users = JSON.parse(data);
  res.json(users);
  });



app.post("/create-user", async (req, res) => {
  console.log(req.body);
  const username= req.body.username
  const password =req.body.password
 
  const users = await getUsers();
  
    const user = users.find(value => {
      return value.username === username;
    });
  
    if (user) {
      console.log("Username not valid");
    
    }
  
    users.push({ username, password, balance: 0 });
  
    const userData = JSON.stringify(users);
  
    await fs.writeFile("users.json", userData, "utf-8");
  
    console.log("Amjilttai burtguulle!");
  res.send("Success");
});


app.post("/login", async (req, res) => {
  console.log(req.body);
  const username= req.body.username
  const password =req.body.password
const users = await getUsers();


  const user = users.find(value => {
    return value.username === username && value.password === password;
  });

  if (!user) {
   
    res.send("username eswel password buruu bn!")
  }else{
    res.send("success")
  }
});




app.post("/deposit", async (req, res) => {
  console.log(req.body);
  const username= req.body.username
  const password =req.body.password
  const amount = req.body.balance
const users = await getUsers();

 const user = users.find(value => {
    return value.username === username && value.password === password;
  });

  let balance = parseInt(user.balance) || 0;



  balance = balance + amount;

  user.balance = balance;

   await updateUser(users, user, amount, "deposit");

  res.send("Success");
});



 



app.put("/update-user/:id", async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.send("Success");
});

app.listen(3000, () => {
  console.log("3000");
});
