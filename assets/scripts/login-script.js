/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */
/**
* Membuat variabel loginFormElemen untuk tampilan form
* @constant{HTMLElement}
*/

const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input Email.
* @constant{HTMLElement}
*/

const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputPasswordElement untuk tampilan input Password.
* @constant{HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant{string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant{string}
*/
const expectedPassword = 'superpassword';

/*Menambahkan aksi pada klik button*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
    
  /**
  * Membuat Variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  * @constant{string}
  */
  const email = inputEmailElement.value;
  
  /**
  * Membuat Variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
  * @constant{string}
  */
  const password = inputPasswordElement.value;

  /*Memastikan bahwa nilai email dan password seseuai dengan nilai yang tersimpan*/
  if (email == expectedEmail && password == expectedPassword) {
   
    /*Jika seseuai maka akan berpindah ke halaman home*/
    goToHome();
    
  } else {

    /*Jika tdak sesuai maka akan menampilkan informasi bahwa input salah*/
    showPopUp();
  }
});
