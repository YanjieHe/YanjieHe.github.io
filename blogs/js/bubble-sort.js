
function sortingAnimation(numOfData, interval, tag, sortingAlgorithm) {
	var column_names = []
	var myData = []

	var height = 400,
		width = 600

	for (var i = 0; i < numOfData; i++) {
		column_names.push(i)
		myData.push(Math.floor(Math.random() * 10 + 1))
	}



	var generator = sortingAlgorithm(myData)

	var svg = d3.select(tag).append('svg')
		.attr('width', width)
		.attr('height', height);

	var x = d3.scaleBand()
		.rangeRound([0, width])
		.domain(column_names)
		.padding(.2);

	var y = d3.scaleLinear()
		.range([height, 0])
		.domain([0, 10]);

	var x_axis = d3.axisBottom(x);

	var y_axis = d3.axisRight(y)
		.tickSize(width)

	var color = d3.scaleLinear()
		.domain([0, myData.length * .33,
			myData.length * .66,
			myData.length
		])
		.range(['#B58929', '#C61C6F',
			'#268BD2', '#85992C'
		])

	redraw(new_data());

	d3.interval(function () {
		redraw(new_data());
	}, interval);

	function redraw(data) {
		var column_i = data[1]
		var column_j = data[2]
		data = data[0]
		var x_var = Object.keys(data[0])[0],
			y_var = Object.keys(data[0])[1];

		// join
		var bar = svg.selectAll(".bar")
			.data(data, function (d) {
				return d[x_var];
			});

		// update
		bar
			.attr("y", function (d) {
				return y(d[y_var]);
			})
			.attr("height", function (d) {
				return height - y(d[y_var]);
			})
			.attr("fill", function (d) {
				if(d.name == column_i){
					return "yellow"
				} else if(d.name == column_j){
					return "blue"
				} else {
					return color(d[x_var]);
				}
			});

		// enter
		bar.enter().append("rect")
			.attr("class", "bar")
			.attr("x", function (d) {
				return x(d[x_var]);
			})
			.attr("y", function (d) {
				return y(d[y_var]);
			})
			.attr("width", x.bandwidth())
			.attr("height", function (d) {
				return height - y(d[y_var]);
			})
			.attr("fill", function (d) {
				return color(d[x_var]);
			});

	}


	function new_data() {
		result = generator.next().value
		var column_i = -1
		var columnt_j = -1
		if (generator.done || typeof result === "undefined") {
			myData = [];
			for (var k = 0; k < numOfData; k++) {
				myData.push(Math.floor(Math.random() * 10 + 1))
			}
			generator = sortingAlgorithm(myData)
		} else {
			myData = result[0]
			column_i = result[1]
			column_j = result[2]
		}
		return [column_names.map(function (d) {
			return {
				name: d,
				value: myData[d]
		}}), column_i, column_j]
		
	}
}
function* bubbleSort(arr) {
	arr = arr.slice()
	var n = arr.length;
	for (var i = 0; i < n - 1; i++) {
		for (var j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				yield [arr, j, j + 1]
			}
		}
	}
}
sortingAnimation(50, 200, '#bubble-sort', bubbleSort)