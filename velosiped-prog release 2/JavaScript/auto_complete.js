function autoComlete () {
    		document.getElementById("nameout").innerHTML = document.getElementById("name").value;
    		setInterval(autoComlete, 1000);
    	};

    	function autoComleteTwo () {
    		document.getElementById("ageout").innerHTML = document.getElementById("age").value;
    		setInterval(autoComleteTwo, 1000);
    	};

    	function autoComleteThree () {
    		document.getElementById("workout").innerHTML = document.getElementById("work").value;
    		setInterval(autoComleteThree, 1000);
    	};