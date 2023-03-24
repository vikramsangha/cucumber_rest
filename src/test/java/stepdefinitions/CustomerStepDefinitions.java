package stepdefinitions;

import builders.ApiRequestBuilder;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import pojo.Customer;

import java.util.UUID;

import org.junit.Assert;

import com.fasterxml.jackson.core.JsonProcessingException;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CustomerStepDefinitions {
    private static final String BASE_URL = "http://restapi.adequateshop.com";
    private RequestSpecification request;
    private Response response;
    private ApiRequestBuilder apiRequestBuilder;

    @Given("I set the base URL")
    public void setBaseUrl() {
        RestAssured.baseURI = BASE_URL;
    }

    @When("I get the Customer details with id (.*)$")
    public void getCustomerDetails(int customerId) {
        String endPoint = "/api/Customer/" + customerId;
        response = RestAssured.given()
                .when()
                .get(endPoint);
    }

    @Then("^the response code should be (\\d+)$")
    public void verifyResponseCode(int expected_code) {
        int actual_code = response.getStatusCode();
        Assert.assertEquals(expected_code, actual_code);
    }

    @Then("the customer name should be '(.*)'$")
    public void verifyCustomerName(String expectedName) {
        String actualName = response.jsonPath().get("name");
        Assert.assertEquals(expectedName, actualName);
    }

    @Then("the product location should be '(.*)'$")
    public void verifyProductLocation(String expectedLocation) {
        String actualLocation = response.jsonPath().get("location");
        Assert.assertEquals(expectedLocation, actualLocation);
    }

    @When("^I Add user with '(.*)' and location '(.*)'$")
    public void postDetails(String name, String location) throws JsonProcessingException {
        String endPoint = "/api/Customer/";
        String randomUUID = UUID.randomUUID().toString();
        String email = name + "+" + randomUUID + "@gmail.com";
        apiRequestBuilder = new ApiRequestBuilder();
        request = apiRequestBuilder.withId(0)
        		.withName(name)
                .withEmail(email)
                .withLocation(location)
                .buildRequest();
        
        response = request.post(endPoint);
                
    }
}
