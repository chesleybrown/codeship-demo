const expect = require("chai").expect;
const Job = require("../../../src/lib/job");

describe("Job", function() {
	describe("when creating new instance", function() {
		var job;
		beforeEach(function() {
			job = new Job("Full Stack Developer");
		});
		it("should provide job title", function() {
			expect(job.title).to.be.equal("Full Stack Developer");
		});
	});
});
