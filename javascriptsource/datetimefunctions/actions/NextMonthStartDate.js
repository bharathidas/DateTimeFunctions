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
 * Get the Next Month Start Date
 * @returns {Promise.<Date>}
 */
export async function NextMonthStartDate() {
	// BEGIN USER CODE
	let nextMonthStartDate = new Date();
	nextMonthStartDate.setMonth(nextMonthStartDate.getMonth() + 1, 1);
	mx.logger.info('nextMonthStartDate:'+nextMonthStartDate);
	return nextMonthStartDate;
	
	//throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
