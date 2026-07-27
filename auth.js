// auth.js

// Kayıt ol
function kayitOl(email, sifre) {
  firebase.auth()
    .createUserWithEmailAndPassword(email, sifre)
    .then((userCredential) => {
      alert("Kayıt başarılı");
      window.location.href = "panel.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}


// Giriş yap
function girisYap(email, sifre) {
  firebase.auth()
    .signInWithEmailAndPassword(email, sifre)
    .then(() => {
      window.location.href = "panel.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}


// Çıkış
function cikisYap() {
  firebase.auth().signOut()
  .then(() => {
    window.location.href = "index.html";
  });
}
