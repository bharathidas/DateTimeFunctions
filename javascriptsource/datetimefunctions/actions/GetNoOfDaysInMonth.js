// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Get the number of days in a month
 * @param {Big} year
 * @param {Big} month
 * @returns {Promise.<Big>}
 */
export async function GetNoOfDaysInMonth(year, month) {
	// BEGIN USER CODE
	
	if(year==null || year=='undefined' || year==0){	
		throw new Error("year should not be empty or 0");
	}
	if(month==null || month=='undefined' || month==0){
		throw new Error("month should not be empty or 0");
	}
	return new Date(year, month, 0).getDate();
	
	// END USER CODE
}
