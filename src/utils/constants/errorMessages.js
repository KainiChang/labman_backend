const errorMessages = {
	//request
	REQUEST_DOESNOT_EXIST: "The request does not exist",
	REQUEST_REQUIRED_FIELD_INVALID: "Required information for request",
	REQUEST_STATUS_IS_NOT_NEW: "The request status is not new",
	BORROW_REQUIRED_FIELD_INVALID: "Required information for collecting is invalid",
	borrowAmountExceedsUpperBound: "The borrow amount exceeds the upper bound amount predefined by the course package",
	
	//student
	STUDENT_DOESNOT_EXIST: "The student does not exist",
	DUPLICATE_USER: "Duplicate user",
	PASSWORD_DOESNOT_MATCH: "Password does not match",

	//equipment
	EQUIPMENT_TYPE_DOESNOT_EXIST: "The equipment type does not exist",
	NOT_ENOUGH_EQUIPMENT_FOR_REQUEST: "Not enough equipment available",
	EQUIPMENT_LOG_REQUIRED_FIELD_INVALID: "Required information for equipment borrowing is invalid",
	EQUIPMENT_TYPE_NOT_REMOVABLE: "Equipment type is not removable",
	NOT_ENOUGH_EQUIPMENT_FOR_COLLECT: "Not enough equipment available",
	AVAILABLE_AMOUNT_CANNOT_BE_NEGATIVE: "The change causes the Available amount to be negative",

	//borrowing
	REQUEST_STATUS_IS_NOT_COLLECTED: "The request status is not collected",
	BORROWING_DOESNOT_EXIST: "The borrowing does not exist",
	BORROWING_STATUS_IS_NOT_BORROWED: "The borrowing status is not borrowed",
	BORROWING_STATUS_IS_NOT_RETURNED: "The borrowing status is not returned",
	RETURN_AMOUNT_EXCEEDS_BORROW_AMOUNT: "The return amount exceeds the borrow amount",

	//course package
	DUPLICATE_PACKAGE: "Duplicate package",
	PACKAGE_DOESNOT_EXIST: "The package does not exist",
	
	//course
	DUPLICATE_COURSE: "Duplicate course",
	COURSE_DOESNOT_EXIST: "The course does not exist",

	//enrollment
	ENROLLMENT_NOT_FOUND: "The enrollment does not exist",
	DUPLICATE_ENROLLMENT: "Duplicate enrollment",

	//type package
	TPYE_IN_PACKAGE_NOT_FOUND:"The equipment type is not found in this package",
	DUPLICATE_TYPE_IN_PACKAGE: "Duplicate equipment type in package",

};

export default errorMessages;