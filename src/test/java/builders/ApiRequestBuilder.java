package builders;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import pojo.Customer;

public class ApiRequestBuilder {
    private RequestSpecification request;
    private Customer customer;
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper()
	        .disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);

    public ApiRequestBuilder() {
        request = RestAssured.given();
        request.contentType(ContentType.JSON);
        customer = new Customer();
    }

    public ApiRequestBuilder withName(String name) {
        customer.setName(name);
        return this;
    }

    public ApiRequestBuilder withEmail(String email) {
        customer.setEmail(email);
        return this;
    }

    public ApiRequestBuilder withLocation(String location) {
        customer.setLocation(location);
        return this;
    }

    public ApiRequestBuilder withId(int id) {
        customer.setId(id);
        return this;
    }

    public RequestSpecification buildRequest() throws JsonProcessingException {
        String jsonBody = OBJECT_MAPPER.writeValueAsString(customer);
        request.body(jsonBody);
        return request;
    }
}
