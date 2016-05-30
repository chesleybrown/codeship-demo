const Job = require("./job");

class Employee {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this._job = undefined;
	}

	get name() {
		return this.firstname + " " + this.lastname;
	}

	get job() {
		return this._job;
	}

	set job(job) {
		if (!(job instanceof Job)) {
			throw new Error("Invalid job");
		}
		this._job = job;
	}
}

module.exports = Employee;
