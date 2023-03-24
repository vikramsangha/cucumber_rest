$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SampleTest.feature");
formatter.feature({
  "line": 2,
  "name": "CRUD API test for Book Store",
  "description": "Description: The aim to test CRUD operation on Library API for user\n\nBookstore swagger URL: http://bookstore.toolsqa.com/swagger/index.html",
  "id": "crud-api-test-for-book-store",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@e2e"
    }
  ]
});
formatter.background({
  "line": 7,
  "name": "User generates token for Authorisation",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "e2e.checkAuthenticityOfUser()"
});
formatter.result({
  "duration": 3602394600,
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1002)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\r\n\tat stepdefinitions.e2e.checkAuthenticityOfUser(e2e.java:46)\r\n\tat ✽.Given I am an authorized user(SampleTest.feature:8)\r\nCaused by: groovy.json.JsonException: Lexing failed on line: 1, column: 1, while reading \u0027\u003c\u0027, no possible valid JSON value or punctuation could be recognized.\r\n\tat groovy.json.JsonLexer.nextToken(JsonLexer.java:86)\r\n\tat groovy.json.JsonLexer$nextToken.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:119)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parse(ConfigurableJsonSlurper.groovy:97)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper$parse.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:83)\r\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:965)\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:1000)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:967)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:1047)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:202)\r\n\tat stepdefinitions.e2e.checkAuthenticityOfUser(e2e.java:46)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "the Authorized user can Add and Remove a book.",
  "description": "",
  "id": "crud-api-test-for-book-store;the-authorized-user-can-add-and-remove-a-book.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "A list of books are available",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I add a book to my reading list",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the book is added",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I remove a book from my reading list",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the book is removed",
  "keyword": "Then "
});
formatter.match({
  "location": "e2e.aListOfBooksAvailable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2e.iAddBookToMyReadingList()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2e.ifTheBookIsAdded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2e.removingBookFromReadingList()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2e.bookisRemoved()"
});
formatter.result({
  "status": "skipped"
});
});