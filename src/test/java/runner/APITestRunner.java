/**
 * 
 */
package runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/resources/features", 
tags = {"@test_scenario"},
glue = "stepdefinitions"
)


public class APITestRunner {
	
}
