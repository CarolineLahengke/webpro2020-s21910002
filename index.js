console.log("Basic JavaScript");

//Conditional JavaScript

let firstNama = "John";
let isMarried = true;

if (isMarried) {
    console.log(firstNama + " is married");
}else {
    console.log(firstNama + " is not married");
}

/*
    Jika umur < 13 tahun maka tampilkan kategori anak-anak
    Jika umur 13 sampai 16 tahun tampilkan kategori remaja
    Jika umur 17 sampai 25 tahun tampilkan kategori anak muda
    Jika umur 26 sampai 50 tahun tampilkan kategori orang dewasa
    */

// let umur = 25;

//if umur < 13;{
// console.log("kategori anak-anak");
// } else if (umur >= 13 && umur < 17) {
// console.log("kategori remaja");
// } else if (umur >= 17 && umur < 26) {
// console.log("kategori anak muda");
// } else if (umur >= 26 && umur < 50) {
// console.log("kategori orang dewasa");
//}

let job = "teacher";

switch(job){
    case "teacher": 
    console.log(firstNama + " is a teacher");
    break;
    case "driver";
    console.log(firstNama + " is a driver");
    break;
    case "instructor";
    console.log(firstNama + " is a instructor");
    break;
    default;
    console.log(firstNama + " does something else");
    break;
}


//exsercise7 : buat program untuk menghitung BMI. Rumus = berat(kg) / (tinggi x tinggi)

let berat = prompt("masukkan berat badan (kg) = ");
let tinggi = prompt("masukkan tinggi (m) = ");
let tinggiB = tinggi * tinggi;
let BMI = berat / tinggiB;
console.log("BMI anda = " + BMI);

function BMIclassification(){
    if(BMI<18.5){
        console.log("kategori : Underweight");
    }else if(BMI >18.5 && BMI <= 24.9){
        console.log("kategori : normal");
    }else if(BMI >=25 && BMI <= 29.9){
        console.log("kategori = overweight");
    }else if(BMI >=30){
        console.log("kategori : obesitas");
    }
}

BMIclassification();