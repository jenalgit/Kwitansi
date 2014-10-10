var config = require('../config')();
var parse = require("co-body");
var render = require("../lib/render.js");
var dbWrap = require("../lib/dbWrap.js");
var translateAmount = require("../lib/amountTranslator.js");
var formatRupiahs = require("../lib/formatRupiahs.js");
var hospitalConfigs = dbWrap.getCollection(config.mongoUrl, "hospitalConfig");
var kwitansis = dbWrap.getCollection(config.mongoUrl, "kwitansi");

// handlers
module.exports.home = function *() {
	var vm = {};
	vm.hospitals = yield hospitalConfigs.find({}, 'name');
	this.body = yield render("home.html", vm);
};

module.exports.showCreate = function *(hospital) {
	var vm = yield hospitalConfigs.findOne({name: hospital});
	vm.kwitansiDate = new Date().toISOString().slice(0,10);

	this.body = yield render("create.html", vm);
};

module.exports.printKwitansi = function *(hospital) {
	var postedData = yield parse(this);
	postedData.kwitansiDate = new Date();
	postedData.kwitansiNo = yield nextKwitansiNo(hospital);

	// Save to database
	yield kwitansis.insert(postedData);

	// Create viewmodel
	var vm = postedData;
	vm.hospitalName = hospital;
	vm.imagePath = hospital + ".jpg"
	vm.amountText = translateAmount(vm.amount);
	vm.amount = formatRupiahs(vm.amount);
	vm.kwitansiDate = dateToYYMMDD(vm.kwitansiDate);

	this.body = yield render("printKwitansi.html", vm);
};


function *nextKwitansiNo(name) {
	var highestKwitansi = yield kwitansis.findOne(
			{ hospitalName: name },
			{ sort : {kwitansiNo : -1 }});

	if(highestKwitansi === null)
		return 1;

	return parseInt(highestKwitansi.kwitansiNo) + 1;
};

function parseDate(input) {
	var parts = input.split('-');
	return new Date(parts[0], parts[1]-1, parts[2]);
};

function dateToYYMMDD(date) {
	    var d = date.getDate();
	    var m = date.getMonth() + 1;
	    var y = date.getFullYear();
	    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
};