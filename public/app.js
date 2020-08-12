// const admin = require('firebase-admin');

function Estimation(name, type, result, comment) {
  this.estiName = name;
  this.estiType = type;
  this.estiResult = result;
  this.estiComment = comment;
  return Object.assign({}, this);
}

function Child(name, age, score, nursID, userID) {
  this.childName = name;
  this.childAge = age;
  this.childScore = score;
  this.nursID = nursID;
  this.userID = userID;
  return Object.assign({}, this);
}

document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  const db = firebase.firestore();
  const myPost = db
    .collection("Children")
    .doc("prototypeID")
    .collection("Estimation")
    .doc("estiID");
  myPost.onSnapshot((doc) => {
    const data = doc.data();
    // document.write(data.title + `<br>`)
    // document.write(data.createdAt + `<br>`)
    console.log(data);
    document.querySelector("#title").innerHTML = data.estiName;
  });
});

function updatePost(e) {
  let doc = document.querySelector("#doc").value;
  console.log(doc);
  let esdata = new Estimation("dd", 5, 1, "ddsa");
  let esdata2 = new Estimation("ee", 6, 2, "dfwfdsa");
  let data = new Child("ff", 12, 20, "1", "2");
  console.log(data);
  const db = firebase.firestore();
  const newChild = db.collection("Children").doc(doc);
  newChild.set(data);
  const esti = newChild.collection("Estimation")
  esti.doc(e.target.value).set(esdata);
  esti.doc("ddg").set(esdata2);
  esti.get().then((datas) => {
    datas.forEach((data) => {
      console.log(data.id, "=>", data.data());
    });
  });
  // let score = results.reduce((a, b) => a + b, 0);
}
