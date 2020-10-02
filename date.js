
//this way creating our own module
// module.exports.getDate = getDate;

exports.getDate = function(){

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    //toLocaleDateString() used to display date in format
    let day = today.toLocaleDateString("US", options);

    return day;

}

//module.exports.getDay = getDay;

exports.getDay =function(){

    let today = new Date();

    let options = {
        weekday: "long"
    };

    //toLocaleDateString() used to display date in format
    let day = today.toLocaleDateString("en-IN", options);

    return day;

}

