let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    //phuong thuc tra ve
    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    this.getMyDate = function () {
        return this.day + "/" + this.month + "/ " + this.year;
    }

    //phuong thuc thiet lap gia tri
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };
    this.setMyDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
};





let date = new MyDate(2, 2, 2007);

date.setDay(4);
date.setMonth(4);
date.setYear(2019);
date.setMyDate(3, 6, 1996);

console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getYear());
console.log(date.getMyDate());

