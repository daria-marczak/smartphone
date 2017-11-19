function Phone(brand, price, color, display, identification) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.display = display;
	this.identification = identification;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and its price is " + this.price + ". Its display is " + this.display +  " and its type of person identification is " + this.identification + ".");
}

Phone.prototype.applyDiscount = function(discount) {
	this.price = this.price - discount;
}


var iPhoneX = new Phone("Apple", 2250, "space gray", "5.8\''", "Face ID");
var huaweiP9Lite = new Phone("Huawei", 1940, "white", "4.8\''", "finger ID");
var samsungGalaxyS6 = new Phone("Samsung", 1399, "black", "3.9\''", "swipe");

iPhoneX.printInfo();

huaweiP9Lite.printInfo();

samsungGalaxyS6.printInfo();

iPhoneX.applyDiscount(200);
iPhoneX.printInfo();

huaweiP9Lite.applyDiscount(500);
huaweiP9Lite.printInfo();
