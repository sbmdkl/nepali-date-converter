var Errors;
(function (Errors) {
    Errors["INVALID_DAY"] = "Day is invalid.";
    Errors["INVALID_YEAR"] = "Year is invalid.";
    Errors["INVALID_MONTH"] = "Month is invalid.";
    Errors["BS_DATE_OUT_OF_RANGE"] = "BS Date out of range";
    Errors["AD_DATE_OUT_OF_RANGE"] = "AD Date out of range";
    Errors["DATE_FORMAT_INVALID"] = "Date format is invalid";
    Errors["DATE_GREATER_THAN_TODAY"] = "Date cannot be greater then today";
})(Errors || (Errors = {}));
export default Errors;
