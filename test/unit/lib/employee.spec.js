const expect = require("chai").expect;
const Employee = require("../../../src/lib/employee");
const Job = require("../../../src/lib/job");

describe("Employee", function() {
	describe("when creating new instance", function() {
		var employee;
		beforeEach(function() {
			employee = new Employee("Chesley", "Brown");
		});
		it("should provide full name", function() {
			expect(employee.name).to.be.equal("Chesley Brown");
		});

		describe("and setting a valid job", function() {
			it("should have job set", function() {
				employee.job = new Job("Full Stack Developer");
				expect(employee.job).to.be.instanceof(Job);
			});
		});

		describe("and setting an invalid job", function() {
			it("should throw error", function() {
				var fn = () => {
					employee.job = "Full Stack Developer";
				};
				expect(fn).to.throw(Error);
			});
		});
	});
});
