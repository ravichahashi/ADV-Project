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

function Child(name, age, score, nursID, userID) {
  this.childName = name;
  this.childAge = age;
  this.childScore = score;
  this.nursID = nursID;
  this.userID = userID;
  return Object.assign({}, this);
}

function Estimation(name, age, result, comment, nursID) {
  this.estiName = name;
  this.estiAge = age;
  this.estiResult = result;
  this.estiComment = comment;
  this.nursID = nursID;
  return Object.assign({}, this);
}

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