var names = ["VUSUMUZI, MALE, AGE: 30","HAPPY, MALE, AGE: 25","WANDILE, MALE, AGE: 28","SELINA, FEMALE, AGE: 31",
"ANDISIWE, FEMALE, AGE: 33","MMAPASEKA, FEMALE, AGE: 15","KAGIAGO, FEMALE, AGE: 20","MHLONIPENI, MALE, AGE: 18",
"SOPHIE, FEMALE, AGE: 21","SITHEMBISO, MALE, AGE: 29","KHUMBULANI, MALE, AGE: 26","LUCKY, MALE, AGE: 27",
"NKON, MALE, AGE: 22","MDUDUZI, MALE, AGE: 30","PRECIOUS, FEMALE, AGE: 33",];

var display = document.getElementById("display");

for (let i = 0; i < names.length; i++ ) {
    display.innerHTML += "<hr>" + names[i] + "</hr>"
}

