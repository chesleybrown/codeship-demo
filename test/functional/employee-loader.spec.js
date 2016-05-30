const exec = require("child_process").exec;
const expect = require("chai").expect;
const MongoClient = require("mongodb").MongoClient;

describe("Functional", function() {
	this.timeout(10000);
	describe("when loading seed of employees", function() {
		it("should load into mongodb", function(done) {
			exec("employee-loader --file=/app/test/functional/seed.json", function(error, stdout, stderr) {
				expect(error).to.be.null;
				expect(stderr).to.be.empty;
				expect(stdout).to.contain("Inserted 2 employees");
				MongoClient.connect("mongodb://mongodb:27017/demo", function(err, db) {
					db.collection("employees").find({}).toArray(function(err, result) {
						expect(result).to.have.length(2);
						expect(result[0]).to.contain({
							firstname: "Chesley",
							lastname: "Brown",
							job: "Full Stack Developer"
						});
						expect(result[1]).to.contain({
							firstname: "Jared",
							lastname: "Perry",
							job: "Security Guy"
						});
						done();
					});
				});
			});
		});
	});
});
