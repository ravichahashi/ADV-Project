// const admin = require('firebase-admin');
const fuserList = document.querySelector(".userList");
const userForm = document.querySelector(".userForm");
userForm.addEventListener("submit", addUser);



function Nursery(name, password, pagedata, address, childID) {
  this.nursName = name;
  this.nursPass = password;
  this.nursPagedata = pagedata;
  this.nursAddress = address;
  this.childID = childID;
  return Object.assign({}, this);
}

function Pagedata(pic, header, description){
  this.pagePic = pic;
  this.pageHead = header;
  this.pageDes = description;
  return Object.assign({},this);
}

function ChatBox(userID, nursID){
  this.userID = userID;
  this.nursID = nursID;
  return Object.assign({}, this);
}

function Chat(text, time, senderID){
  this.chatText = text;
  this.chatTime = time;
  this.senderID = senderID;
  return Object.assign({}, this);
}

function Request(status, fieldname, userID, nursID, childID){
  this.reqStatus = status;
  this.reqFname = fieldname;
  this.userID = userID;
  this.nursID = nursID;
  this.childID - childID;
  return Object.assign({}, this);
}

function QuestionGM(age, video, description, tool){
  this.questGM_age = age;
  this.questGM_video = video;
  this.questGM_des = description;
  this.questGM_tool = tool;
  return Object.assign({}, this);
}

function QuestionFM(age, video, description, tool){
  this.questFM_age = age;
  this.questFM_video = video;
  this.questFM_des = description;
  this.questFM_tool = tool;
  return Object.assign({}, this);
}

function QuestionRL(age, video, description, tool){
  this.questRL_age = age;
  this.questRL_video = video;
  this.questRL_des = description;
  this.questRL_tool = tool;
  return Object.assign({}, this);
}

function QuestionEL(age, video, description, tool){
  this.questEL_age = age;
  this.questEL_video = video;
  this.questEL_des = description;
  this.questEL_tool = tool;
  return Object.assign({}, this);
}

function QuestionPS(age, video, description, tool){
  this.questPS_age = age;
  this.questPS_video = video;
  this.questPS_des = description;
  this.questPS_tool = tool;
  return Object.assign({}, this);
}

function NurseryUser(name, password, priority, email, phone, nursID){
  this.nUserName = name;
  this.nUserPass = password;
  this.nUserPrio = priority;
  this.nUserEmail = email;
  this.nUserPhone = phone;
  this.nursID = nursID;
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
    fuserList.innerHTML = ``
    users.forEach((user) => {
      const data = user.data();
      fuserList.innerHTML += `<p>${data.name}</p>`;
    });
  });
});

function updatePost(e) {
  let doc = document.querySelector("#doc").value;
  console.log(doc);
  let esdata = new Estimation("dd", 5, 1, "ddsa", 0);
  let esdata2 = new Estimation("ee", 6, 2, "dfwfdsa", 5);
  let data = new Child("ff", 12, 20, "1", "2");
  console.log(data);
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