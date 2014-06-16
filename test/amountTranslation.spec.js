var should = require("should");
var translate = require("../lib/amountTranslator.js");

describe("Amount translation", function () {
	function assert(amount, expectedText, done) {
		translate(amount).should.equal(expectedText);
		done();
	};

	//it('tranlates 0 to nol', function(done){ assert(0,'nol', done);});
	it('tranlates 1 to satu', function(done){ assert(1,'satu', done);});
	it('tranlates 2 to dua', function(done){ assert(2,'dua', done);});
	it('tranlates 3 to tiga', function(done){ assert(3,'tiga', done);});
	it('tranlates 4 to empat', function(done){ assert(4,'empat', done);});
	it('tranlates 5 to lima', function(done){ assert(5,'lima', done);});
	it('tranlates 6 to enam', function(done){ assert(6,'enam', done);});
	it('tranlates 7 to tujuh', function(done){ assert(7,'tujuh', done);});
	it('tranlates 8 to delapan', function(done){ assert(8,'delapan', done);});
	it('tranlates 9 to sembilan', function(done){ assert(9,'sembilan', done);});
	it('tranlates 10 to sepuluh', function(done){ assert(10,'sepuluh', done);});
	it('tranlates 11 to sebelas', function(done){ assert(11,'sebelas', done);});
	it('tranlates 12 to dua belas', function(done){ assert(12,'dua belas', done);});
	it('tranlates 13 to tiga belas', function(done){ assert(13,'tiga belas', done);});
	it('tranlates 14 to empat belas', function(done){ assert(14,'empat belas', done);});
	it('tranlates 15 to lima belas', function(done){ assert(15,'lima belas', done);});
	it('tranlates 16 to enam belas', function(done){ assert(16,'enam belas', done);});
	it('tranlates 17 to tujuh belas', function(done){ assert(17,'tujuh belas', done);});
	it('tranlates 18 to delapan belas', function(done){ assert(18,'delapan belas', done);});
	it('tranlates 19 to sembilan belas', function(done){ assert(19,'sembilan belas', done);});
	it('tranlates 20 to dua puluh', function(done){ assert(20,'dua puluh', done);});
	it('tranlates 21 to dua puluh satu', function(done){ assert(21,'dua puluh satu', done);});
	it('tranlates 22 to dua puluh dua', function(done){ assert(22,'dua puluh dua', done);});
	it('tranlates 23 to dua puluh tiga', function(done){ assert(23,'dua puluh tiga', done);});
	it('tranlates 24 to dua puluh empat', function(done){ assert(24,'dua puluh empat', done);});
	it('tranlates 25 to dua puluh lima', function(done){ assert(25,'dua puluh lima', done);});
	it('tranlates 26 to dua puluh enam', function(done){ assert(26,'dua puluh enam', done);});
	it('tranlates 27 to dua puluh tujuh', function(done){ assert(27,'dua puluh tujuh', done);});
	it('tranlates 28 to dua puluh delapan', function(done){ assert(28,'dua puluh delapan', done);});
	it('tranlates 29 to dua puluh sembilan', function(done){ assert(29,'dua puluh sembilan', done);});
	it('tranlates 30 to tiga puluh', function(done){ assert(30,'tiga puluh', done);});
	it('tranlates 31 to tiga puluh satu', function(done){ assert(31,'tiga puluh satu', done);});
	it('tranlates 32 to tiga puluh dua', function(done){ assert(32,'tiga puluh dua', done);});
	it('tranlates 33 to tiga puluh tiga', function(done){ assert(33,'tiga puluh tiga', done);});
	it('tranlates 34 to tiga puluh empat', function(done){ assert(34,'tiga puluh empat', done);});
	it('tranlates 35 to tiga puluh lima', function(done){ assert(35,'tiga puluh lima', done);});
	it('tranlates 36 to tiga puluh enam', function(done){ assert(36,'tiga puluh enam', done);});
	it('tranlates 37 to tiga puluh tujuh', function(done){ assert(37,'tiga puluh tujuh', done);});
	it('tranlates 38 to tiga puluh delapan', function(done){ assert(38,'tiga puluh delapan', done);});
	it('tranlates 39 to tiga puluh sembilan', function(done){ assert(39,'tiga puluh sembilan', done);});
	it('tranlates 40 to empat puluh', function(done){ assert(40,'empat puluh', done);});
	it('tranlates 41 to empat puluh satu', function(done){ assert(41,'empat puluh satu', done);});
	it('tranlates 42 to empat puluh dua', function(done){ assert(42,'empat puluh dua', done);});
	it('tranlates 43 to empat puluh tiga', function(done){ assert(43,'empat puluh tiga', done);});
	it('tranlates 44 to empat puluh empat', function(done){ assert(44,'empat puluh empat', done);});
	it('tranlates 45 to empat puluh lima', function(done){ assert(45,'empat puluh lima', done);});
	it('tranlates 46 to empat puluh enam', function(done){ assert(46,'empat puluh enam', done);});
	it('tranlates 47 to empat puluh tujuh', function(done){ assert(47,'empat puluh tujuh', done);});
	it('tranlates 48 to empat puluh delapan', function(done){ assert(48,'empat puluh delapan', done);});
	it('tranlates 49 to empat puluh sembilan', function(done){ assert(49,'empat puluh sembilan', done);});
	it('tranlates 50 to lima puluh', function(done){ assert(50,'lima puluh', done);});
	it('tranlates 51 to lima puluh satu', function(done){ assert(51,'lima puluh satu', done);});
	it('tranlates 52 to lima puluh dua', function(done){ assert(52,'lima puluh dua', done);});
	it('tranlates 53 to lima puluh tiga', function(done){ assert(53,'lima puluh tiga', done);});
	it('tranlates 54 to lima puluh empat', function(done){ assert(54,'lima puluh empat', done);});
	it('tranlates 55 to lima puluh lima', function(done){ assert(55,'lima puluh lima', done);});
	it('tranlates 56 to lima puluh enam', function(done){ assert(56,'lima puluh enam', done);});
	it('tranlates 57 to lima puluh tujuh', function(done){ assert(57,'lima puluh tujuh', done);});
	it('tranlates 58 to lima puluh delapan', function(done){ assert(58,'lima puluh delapan', done);});
	it('tranlates 59 to lima puluh sembilan', function(done){ assert(59,'lima puluh sembilan', done);});
	it('tranlates 60 to enam puluh', function(done){ assert(60,'enam puluh', done);});
	it('tranlates 61 to enam puluh satu', function(done){ assert(61,'enam puluh satu', done);});
	it('tranlates 62 to enam puluh dua', function(done){ assert(62,'enam puluh dua', done);});
	it('tranlates 63 to enam puluh tiga', function(done){ assert(63,'enam puluh tiga', done);});
	it('tranlates 64 to enam puluh empat', function(done){ assert(64,'enam puluh empat', done);});
	it('tranlates 65 to enam puluh lima', function(done){ assert(65,'enam puluh lima', done);});
	it('tranlates 66 to enam puluh enam', function(done){ assert(66,'enam puluh enam', done);});
	it('tranlates 67 to enam puluh tujuh', function(done){ assert(67,'enam puluh tujuh', done);});
	it('tranlates 68 to enam puluh delapan', function(done){ assert(68,'enam puluh delapan', done);});
	it('tranlates 69 to enam puluh sembilan', function(done){ assert(69,'enam puluh sembilan', done);});
	it('tranlates 70 to tujuh puluh', function(done){ assert(70,'tujuh puluh', done);});
	it('tranlates 71 to tujuh puluh satu', function(done){ assert(71,'tujuh puluh satu', done);});
	it('tranlates 72 to tujuh puluh dua', function(done){ assert(72,'tujuh puluh dua', done);});
	it('tranlates 73 to tujuh puluh tiga', function(done){ assert(73,'tujuh puluh tiga', done);});
	it('tranlates 74 to tujuh puluh empat', function(done){ assert(74,'tujuh puluh empat', done);});
	it('tranlates 75 to tujuh puluh lima', function(done){ assert(75,'tujuh puluh lima', done);});
	it('tranlates 76 to tujuh puluh enam', function(done){ assert(76,'tujuh puluh enam', done);});
	it('tranlates 77 to tujuh puluh tujuh', function(done){ assert(77,'tujuh puluh tujuh', done);});
	it('tranlates 78 to tujuh puluh delapan', function(done){ assert(78,'tujuh puluh delapan', done);});
	it('tranlates 79 to tujuh puluh sembilan', function(done){ assert(79,'tujuh puluh sembilan', done);});
	it('tranlates 80 to delapan puluh', function(done){ assert(80,'delapan puluh', done);});
	it('tranlates 81 to delapan puluh satu', function(done){ assert(81,'delapan puluh satu', done);});
	it('tranlates 82 to delapan puluh dua', function(done){ assert(82,'delapan puluh dua', done);});
	it('tranlates 83 to delapan puluh tiga', function(done){ assert(83,'delapan puluh tiga', done);});
	it('tranlates 84 to delapan puluh empat', function(done){ assert(84,'delapan puluh empat', done);});
	it('tranlates 85 to delapan puluh lima', function(done){ assert(85,'delapan puluh lima', done);});
	it('tranlates 86 to delapan puluh enam', function(done){ assert(86,'delapan puluh enam', done);});
	it('tranlates 87 to delapan puluh tujuh', function(done){ assert(87,'delapan puluh tujuh', done);});
	it('tranlates 88 to delapan puluh delapan', function(done){ assert(88,'delapan puluh delapan', done);});
	it('tranlates 89 to delapan puluh sembilan', function(done){ assert(89,'delapan puluh sembilan', done);});
	it('tranlates 90 to sembilan puluh', function(done){ assert(90,'sembilan puluh', done);});
	it('tranlates 91 to sembilan puluh satu', function(done){ assert(91,'sembilan puluh satu', done);});
	it('tranlates 92 to sembilan puluh dua', function(done){ assert(92,'sembilan puluh dua', done);});
	it('tranlates 93 to sembilan puluh tiga', function(done){ assert(93,'sembilan puluh tiga', done);});
	it('tranlates 94 to sembilan puluh empat', function(done){ assert(94,'sembilan puluh empat', done);});
	it('tranlates 95 to sembilan puluh lima', function(done){ assert(95,'sembilan puluh lima', done);});
	it('tranlates 96 to sembilan puluh enam', function(done){ assert(96,'sembilan puluh enam', done);});
	it('tranlates 97 to sembilan puluh tujuh', function(done){ assert(97,'sembilan puluh tujuh', done);});
	it('tranlates 98 to sembilan puluh delapan', function(done){ assert(98,'sembilan puluh delapan', done);});
	it('tranlates 99 to sembilan puluh sembilan', function(done){ assert(99,'sembilan puluh sembilan', done);});
	it('tranlates 100 to seratus', function(done){ assert(100,'seratus', done);});
	it('tranlates 101 to seratus satus', function(done){ assert(101,'seratus satu', done);});
	it('tranlates 200 to dua ratus', function(done){ assert(200,'dua ratus', done);});
	it('tranlates 300 to tiga ratus', function(done){ assert(300,'tiga ratus', done);});
	it('tranlates 400 to empat ratus', function(done){ assert(400,'empat ratus', done);});
	it('tranlates 500 to lima ratus', function(done){ assert(500,'lima ratus', done);});
	it('tranlates 600 to enam ratus', function(done){ assert(600,'enam ratus', done);});
	it('tranlates 700 to tujuh ratus', function(done){ assert(700,'tujuh ratus', done);});
	it('tranlates 800 to delapan ratus', function(done){ assert(800,'delapan ratus', done);});
	it('tranlates 900 to sembilan ratus', function(done){ assert(900,'sembilan ratus', done);});
	it('tranlates 1000 to seribu', function(done){ assert(1000,'seribu', done);});
	it('tranlates 2000 to dua ribu', function(done){ assert(2000,'dua ribu', done);});
	it('tranlates 3000 to tiga ribu', function(done){ assert(3000,'tiga ribu', done);});
	it('tranlates 4000 to empat ribu', function(done){ assert(4000,'empat ribu', done);});
	it('tranlates 5000 to lima ribu', function(done){ assert(5000,'lima ribu', done);});
	it('tranlates 6000 to enam ribu', function(done){ assert(6000,'enam ribu', done);});
	it('tranlates 7000 to tujuh ribu', function(done){ assert(7000,'tujuh ribu', done);});
	it('tranlates 8000 to delapan ribu', function(done){ assert(8000,'delapan ribu', done);});
	it('tranlates 9000 to sembilan ribu', function(done){ assert(9000,'sembilan ribu', done);});
	it('tranlates 10000 to sepuluh ribu', function(done){ assert(10000,'sepuluh ribu', done);});
	it('tranlates 11000 to sebelas ribu', function(done){ assert(11000,'sebelas ribu', done);});
	it('tranlates 12000 to dua belas ribu', function(done){ assert(12000,'dua belas ribu', done);});
	it('tranlates 13000 to tiga belas ribu', function(done){ assert(13000,'tiga belas ribu', done);});
	it('tranlates 14000 to empat belas ribu', function(done){ assert(14000,'empat belas ribu', done);});
	it('tranlates 15000 to lima belas ribu', function(done){ assert(15000,'lima belas ribu', done);});
	it('tranlates 16000 to enam belas ribu', function(done){ assert(16000,'enam belas ribu', done);});
	it('tranlates 17000 to tujuh belas ribu', function(done){ assert(17000,'tujuh belas ribu', done);});
	it('tranlates 18000 to delapan belas ribu', function(done){ assert(18000,'delapan belas ribu', done);});
	it('tranlates 19000 to sembilan belas ribu', function(done){ assert(19000,'sembilan belas ribu', done);});
	it('tranlates 20000 to dua puluh ribu', function(done){ assert(20000,'dua puluh ribu', done);});
	it('tranlates 21000 to dua puluh satu ribu', function(done){ assert(21000,'dua puluh satu ribu', done);});
	it('tranlates 22000 to dua puluh dua ribu', function(done){ assert(22000,'dua puluh dua ribu', done);});
	it('tranlates 23000 to dua puluh tiga ribu', function(done){ assert(23000,'dua puluh tiga ribu', done);});
	it('tranlates 24000 to dua puluh empat ribu', function(done){ assert(24000,'dua puluh empat ribu', done);});
	it('tranlates 25000 to dua puluh lima ribu', function(done){ assert(25000,'dua puluh lima ribu', done);});
	it('tranlates 26000 to dua puluh enam ribu', function(done){ assert(26000,'dua puluh enam ribu', done);});
	it('tranlates 27000 to dua puluh tujuh ribu', function(done){ assert(27000,'dua puluh tujuh ribu', done);});
	it('tranlates 28000 to dua puluh delapan ribu', function(done){ assert(28000,'dua puluh delapan ribu', done);});
	it('tranlates 29000 to dua puluh sembilan ribu', function(done){ assert(29000,'dua puluh sembilan ribu', done);});
	it('tranlates 30000 to tiga puluh ribu', function(done){ assert(30000,'tiga puluh ribu', done);});
	it('tranlates 31000 to tiga puluh satu ribu', function(done){ assert(31000,'tiga puluh satu ribu', done);});
	it('tranlates 32000 to tiga puluh dua ribu', function(done){ assert(32000,'tiga puluh dua ribu', done);});
	it('tranlates 33000 to tiga puluh tiga ribu', function(done){ assert(33000,'tiga puluh tiga ribu', done);});
	it('tranlates 34000 to tiga puluh empat ribu', function(done){ assert(34000,'tiga puluh empat ribu', done);});
	it('tranlates 35000 to tiga puluh lima ribu', function(done){ assert(35000,'tiga puluh lima ribu', done);});
	it('tranlates 36000 to tiga puluh enam ribu', function(done){ assert(36000,'tiga puluh enam ribu', done);});
	it('tranlates 37000 to tiga puluh tujuh ribu', function(done){ assert(37000,'tiga puluh tujuh ribu', done);});
	it('tranlates 38000 to tiga puluh delapan ribu', function(done){ assert(38000,'tiga puluh delapan ribu', done);});
	it('tranlates 39000 to tiga puluh sembilan ribu', function(done){ assert(39000,'tiga puluh sembilan ribu', done);});
	it('tranlates 40000 to empat puluh ribu', function(done){ assert(40000,'empat puluh ribu', done);});
	it('tranlates 41000 to empat puluh satu ribu', function(done){ assert(41000,'empat puluh satu ribu', done);});
	it('tranlates 42000 to empat puluh dua ribu', function(done){ assert(42000,'empat puluh dua ribu', done);});
	it('tranlates 43000 to empat puluh tiga ribu', function(done){ assert(43000,'empat puluh tiga ribu', done);});
	it('tranlates 44000 to empat puluh empat ribu', function(done){ assert(44000,'empat puluh empat ribu', done);});
	it('tranlates 45000 to empat puluh lima ribu', function(done){ assert(45000,'empat puluh lima ribu', done);});
	it('tranlates 46000 to empat puluh enam ribu', function(done){ assert(46000,'empat puluh enam ribu', done);});
	it('tranlates 47000 to empat puluh tujuh ribu', function(done){ assert(47000,'empat puluh tujuh ribu', done);});
	it('tranlates 48000 to empat puluh delapan ribu', function(done){ assert(48000,'empat puluh delapan ribu', done);});
	it('tranlates 49000 to empat puluh sembilan ribu', function(done){ assert(49000,'empat puluh sembilan ribu', done);});
	it('tranlates 50000 to lima puluh ribu', function(done){ assert(50000,'lima puluh ribu', done);});
	it('tranlates 51000 to lima puluh satu ribu', function(done){ assert(51000,'lima puluh satu ribu', done);});
	it('tranlates 52000 to lima puluh dua ribu', function(done){ assert(52000,'lima puluh dua ribu', done);});
	it('tranlates 53000 to lima puluh tiga ribu', function(done){ assert(53000,'lima puluh tiga ribu', done);});
	it('tranlates 54000 to lima puluh empat ribu', function(done){ assert(54000,'lima puluh empat ribu', done);});
	it('tranlates 55000 to lima puluh lima ribu', function(done){ assert(55000,'lima puluh lima ribu', done);});
	it('tranlates 56000 to lima puluh enam ribu', function(done){ assert(56000,'lima puluh enam ribu', done);});
	it('tranlates 57000 to lima puluh tujuh ribu', function(done){ assert(57000,'lima puluh tujuh ribu', done);});
	it('tranlates 58000 to lima puluh delapan ribu', function(done){ assert(58000,'lima puluh delapan ribu', done);});
	it('tranlates 59000 to lima puluh sembilan ribu', function(done){ assert(59000,'lima puluh sembilan ribu', done);});
	it('tranlates 60000 to enam puluh ribu', function(done){ assert(60000,'enam puluh ribu', done);});
	it('tranlates 61000 to enam puluh satu ribu', function(done){ assert(61000,'enam puluh satu ribu', done);});
	it('tranlates 62000 to enam puluh dua ribu', function(done){ assert(62000,'enam puluh dua ribu', done);});
	it('tranlates 63000 to enam puluh tiga ribu', function(done){ assert(63000,'enam puluh tiga ribu', done);});
	it('tranlates 64000 to enam puluh empat ribu', function(done){ assert(64000,'enam puluh empat ribu', done);});
	it('tranlates 65000 to enam puluh lima ribu', function(done){ assert(65000,'enam puluh lima ribu', done);});
	it('tranlates 66000 to enam puluh enam ribu', function(done){ assert(66000,'enam puluh enam ribu', done);});
	it('tranlates 67000 to enam puluh tujuh ribu', function(done){ assert(67000,'enam puluh tujuh ribu', done);});
	it('tranlates 68000 to enam puluh delapan ribu', function(done){ assert(68000,'enam puluh delapan ribu', done);});
	it('tranlates 69000 to enam puluh sembilan ribu', function(done){ assert(69000,'enam puluh sembilan ribu', done);});
	it('tranlates 70000 to tujuh puluh ribu', function(done){ assert(70000,'tujuh puluh ribu', done);});
	it('tranlates 71000 to tujuh puluh satu ribu', function(done){ assert(71000,'tujuh puluh satu ribu', done);});
	it('tranlates 72000 to tujuh puluh dua ribu', function(done){ assert(72000,'tujuh puluh dua ribu', done);});
	it('tranlates 73000 to tujuh puluh tiga ribu', function(done){ assert(73000,'tujuh puluh tiga ribu', done);});
	it('tranlates 74000 to tujuh puluh empat ribu', function(done){ assert(74000,'tujuh puluh empat ribu', done);});
	it('tranlates 75000 to tujuh puluh lima ribu', function(done){ assert(75000,'tujuh puluh lima ribu', done);});
	it('tranlates 76000 to tujuh puluh enam ribu', function(done){ assert(76000,'tujuh puluh enam ribu', done);});
	it('tranlates 77000 to tujuh puluh tujuh ribu', function(done){ assert(77000,'tujuh puluh tujuh ribu', done);});
	it('tranlates 78000 to tujuh puluh delapan ribu', function(done){ assert(78000,'tujuh puluh delapan ribu', done);});
	it('tranlates 79000 to tujuh puluh sembilan ribu', function(done){ assert(79000,'tujuh puluh sembilan ribu', done);});
	it('tranlates 80000 to delapan puluh ribu', function(done){ assert(80000,'delapan puluh ribu', done);});
	it('tranlates 81000 to delapan puluh satu ribu', function(done){ assert(81000,'delapan puluh satu ribu', done);});
	it('tranlates 82000 to delapan puluh dua ribu', function(done){ assert(82000,'delapan puluh dua ribu', done);});
	it('tranlates 83000 to delapan puluh tiga ribu', function(done){ assert(83000,'delapan puluh tiga ribu', done);});
	it('tranlates 84000 to delapan puluh empat ribu', function(done){ assert(84000,'delapan puluh empat ribu', done);});
	it('tranlates 85000 to delapan puluh lima ribu', function(done){ assert(85000,'delapan puluh lima ribu', done);});
	it('tranlates 86000 to delapan puluh enam ribu', function(done){ assert(86000,'delapan puluh enam ribu', done);});
	it('tranlates 87000 to delapan puluh tujuh ribu', function(done){ assert(87000,'delapan puluh tujuh ribu', done);});
	it('tranlates 88000 to delapan puluh delapan ribu', function(done){ assert(88000,'delapan puluh delapan ribu', done);});
	it('tranlates 89000 to delapan puluh sembilan ribu', function(done){ assert(89000,'delapan puluh sembilan ribu', done);});
	it('tranlates 90000 to sembilan puluh ribu', function(done){ assert(90000,'sembilan puluh ribu', done);});
	it('tranlates 91000 to sembilan puluh satu ribu', function(done){ assert(91000,'sembilan puluh satu ribu', done);});
	it('tranlates 92000 to sembilan puluh dua ribu', function(done){ assert(92000,'sembilan puluh dua ribu', done);});
	it('tranlates 93000 to sembilan puluh tiga ribu', function(done){ assert(93000,'sembilan puluh tiga ribu', done);});
	it('tranlates 94000 to sembilan puluh empat ribu', function(done){ assert(94000,'sembilan puluh empat ribu', done);});
	it('tranlates 95000 to sembilan puluh lima ribu', function(done){ assert(95000,'sembilan puluh lima ribu', done);});
	it('tranlates 96000 to sembilan puluh enam ribu', function(done){ assert(96000,'sembilan puluh enam ribu', done);});
	it('tranlates 97000 to sembilan puluh tujuh ribu', function(done){ assert(97000,'sembilan puluh tujuh ribu', done);});
	it('tranlates 98000 to sembilan puluh delapan ribu', function(done){ assert(98000,'sembilan puluh delapan ribu', done);});
	it('tranlates 99000 to sembilan puluh sembilan ribu', function(done){ assert(99000,'sembilan puluh sembilan ribu', done);});
	it('tranlates 100000 to seratus ribu', function(done){ assert(100000,'seratus ribu', done);});
	it('tranlates 200000 to dua ratus ribu', function(done){ assert(200000,'dua ratus ribu', done);});
	it('tranlates 300000 to tiga ratus ribu', function(done){ assert(300000,'tiga ratus ribu', done);});
	it('tranlates 400000 to empat ratus ribu', function(done){ assert(400000,'empat ratus ribu', done);});
	it('tranlates 500000 to lima ratus ribu', function(done){ assert(500000,'lima ratus ribu', done);});
	it('tranlates 600000 to enam ratus ribu', function(done){ assert(600000,'enam ratus ribu', done);});
	it('tranlates 700000 to tujuh ratus ribu', function(done){ assert(700000,'tujuh ratus ribu', done);});
	it('tranlates 800000 to delapan ratus ribu', function(done){ assert(800000,'delapan ratus ribu', done);});
	it('tranlates 900000 to sembilan ratus ribu', function(done){ assert(900000,'sembilan ratus ribu', done);});
	it('tranlates 1000000 to satu juta', function(done){ assert(1000000,'satu juta', done);});
	it('tranlates 2000000 to dua juta', function(done){ assert(2000000,'dua juta', done);});
	it('tranlates 3000000 to tiga juta', function(done){ assert(3000000,'tiga juta', done);});
	it('tranlates 4000000 to empat juta', function(done){ assert(4000000,'empat juta', done);});
	it('tranlates 5000000 to lima juta', function(done){ assert(5000000,'lima juta', done);});
	it('tranlates 6000000 to enam juta', function(done){ assert(6000000,'enam juta', done);});
	it('tranlates 7000000 to tujuh juta', function(done){ assert(7000000,'tujuh juta', done);});
	it('tranlates 8000000 to delapan juta', function(done){ assert(8000000,'delapan juta', done);});
	it('tranlates 9000000 to sembilan juta', function(done){ assert(9000000,'sembilan juta', done);});
	it('tranlates 10000000 to sepuluh juta', function(done){ assert(10000000,'sepuluh juta', done);});
	it('tranlates 100000000 to seratus juta', function(done){ assert(100000000,'seratus juta', done);});
	it('tranlates 100000001 to seratus juta satu', function(done){ assert(100000001,'seratus juta satu', done);});
	it('tranlates 1000000000 to satu milyar', function(done){ assert(1000000000,'satu milyar', done);});
	it('tranlates 1234567 to satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh', function(done){ assert(1234567,'satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh', done);});
	it('tranlates 123456 to seratus dua puluh tiga ribu empat ratus lima puluh enam', function(done){ assert(123456,'seratus dua puluh tiga ribu empat ratus lima puluh enam', done);});
	it('tranlates 12345 to dua belas ribu tiga ratus empat puluh lima', function(done){ assert(12345,'dua belas ribu tiga ratus empat puluh lima', done);});
	it('tranlates 1234 to seribu dua ratus tiga puluh empat', function(done){ assert(1234,'seribu dua ratus tiga puluh empat', done);});
	it('tranlates 123 to seratus dua puluh tiga', function(done){ assert(123,'seratus dua puluh tiga', done);});
	it('tranlates 12 to dua belas', function(done){ assert(12,'dua belas', done);});

	

});