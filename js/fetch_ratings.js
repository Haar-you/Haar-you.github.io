function fetch_ratings(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kyopro-ratings.herokuapp.com/json?atcoder=you070707&codeforces=Haar', true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
		json = JSON.parse(xhr.responseText);

		if ('error' in json) {
		    error();
		} else {

		    if(json["atcoder"]["status"] == "success"){
			var $atc = $("#atcoder-rating");
			$atc.html(json["atcoder"]["rating"]);
			$atc.css({
			    "color": json["atcoder"]["color"],
			    "font-weight": "bold"
			});
		    }

		    if(json["codeforces"]["status"] == "success"){
			var $cdf = $("#codeforces-rating");
			$cdf.html(json["codeforces"]["rating"]);
			$cdf.css({
			    "color": json["codeforces"]["color"],
			    "font-weight": "bold"
			});
		    }
		}
	    }
        }
    };
    xhr.onerror = function (e) { error(); };
    xhr.ontimeout = function (e) { error(); };
    xhr.timeout = 10000;
    xhr.send(null);
}

