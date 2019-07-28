function calculationForMen() {

	var age_human = parseInt(document.getElementById("age").value);
	var weight_human = parseInt(document.getElementById("weight").value);
	var select_option = document.getElementById("select").value;
	var result;

	if (age_human.toString().length <= 2 && weight_human.toString().length <= 3 && weight_human >= 1) {

		if (age_human <= 17 && age_human >= 10) {
			result = (17.5 * weight_human) + 651;
			alert("Ваш основной обмен веществ составляет " + Math.round(result) + " калорий");
		} else if (age_human >= 18 && age_human <= 29) {
			result = (15.3 * weight_human) + 679;
			alert("Ваш основной обмен веществ составляет " + Math.round(result) + " калорий");
		} else if (age_human >= 30 && age_human <= 60) {
			result = (11.6 * weight_human) + 879;
			alert("Ваш основной обмен веществ составляет " + Math.round(result) + " калорий");
		} else if (age_human > 60) {
			result = (13.5 * weight_human) + 487;
			alert("Ваш основной обмен веществ составляет " + Math.round(result) + " калорий");
			document.getElementById("out").innerHTML + result;
		} else {
			alert("Укажите возраст от 10 лет, укажите корректное значение!");
		}
	} else {
		alert("Введите корректное значение!!!");
	}
};


function calculationForWoman() {

	var age_human = parseInt(document.getElementById("age").value);
	var weight_human = parseInt(document.getElementById("weight").value);
	var select_option = document.getElementById("select").value;
	var result;

	if (age_human.toString().length <= 2 && weight_human.toString().length <=3 && weight_human >= 1) {

		if (age_human <= 17 && age_human >= 10) {
			result = (12.2 * weight_human) + 746;
			alert("Ваш основной обмен веществ составляет " + Math.round(result) + " калорий");
		} else if (age_human >= 18 && age_human <= 29) {
			result = (14.7 * weight_human) + 496;
			alert("Ваш основной обмен веществ составляет " + Math.round(result) + " калорий");
		} else if (age_human >= 30 && age_human <= 60) {
			result = (8.7 * weight_human) + 829;
			alert("Ваш основной обмен веществ составляет " + Math.round(result) + " калорий");
		} else if (age_human > 60) {
			result = (10.5 * weight_human) + 596;
			alert("Ваш основной обмен веществ составляет " + Math.round(result) + " калорий");
		} else {
			alert("Укажите возраст от 10 лет, укажите корректное значение!");
		}
	} else {
		alert("Введите корректное значение!!!");
	}
};


function start() {
	var select_option = document.getElementById("select").value;
	switch (select_option) {
		case "1":
			calculationForMen();
			break;
		case "0":
			calculationForWoman();
			break;
	}
}
