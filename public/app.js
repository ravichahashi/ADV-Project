// const admin = require('firebase-admin');
const fuserList = document.querySelector(".userList");
const userForm = document.querySelector(".userForm");
userForm.addEventListener("submit", addUser);

function Estimation(name, type, result, comment) {
  this.name = name;
  this.type = type;
  this.result = result;
  this.comment = result;
  return Object.assign({}, this);
}

function Child(name, age, score, nursID, userID) {
  this.name = name;
  this.age = age;
  this.score = score;
  this.nursID = nursID;
  this.userID = userID;
  return Object.assign({}, this);
}

function User(name, email, password, citizenID, phone, childID, nursID) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.citizenID = citizenID;
  this.phone = phone;
  this.childID = childID;
  this.nursID = nursID;
  return Object.assign({}, this);
}

document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  const db = firebase.firestore();
  const userList = db.collection("User");
  userList.onSnapshot((users) => {
    fuserList.innerHTML = ``;
    users.forEach((user) => {
      const data = user.data();
      fuserList.innerHTML += `<p>${data.name}</p>`;
    });
  });
});

function addUser(e) {
  e.preventDefault();
  const db = firebase.firestore();
  const name = userForm.querySelector(".name").value;
  const email = userForm.querySelector(".email").value;
  const password = userForm.querySelector(".password").value;
  const citizenID = userForm.querySelector(".citizenID").value;
  const phone = userForm.querySelector(".phone").value;
  const userData = new User(name, email, password, citizenID, phone, [], []);
  console.log(userData);

  const newUser = db.collection("User").doc();
  newUser.set(userData);
}

// function updatePost(e) {
//   let doc = document.querySelector("#doc").value;
//   console.log(doc);
//   let esdata = new Estimation("dd", 5, 1, "ddsa");
//   let esdata2 = new Estimation("ee", 6, 2, "dfwfdsa");
//   let data = new Child("ff", 12, 20, "1", "2");
//   console.log(data);
//   const db = firebase.firestore();
//   const newChild = db.collection("Children").doc(doc);
//   newChild.set(data);
//   const esti = newChild.collection("Estimation");
//   esti.doc(e.target.value).set(esdata);
//   esti.doc("ddg").set(esdata2);
//   esti.get().then((datas) => {
//     datas.forEach((data) => {
//       console.log(data.id, "=>", data.data());
//     });
//   });
//   // let score = results.reduce((a, b) => a + b, 0);
// }
