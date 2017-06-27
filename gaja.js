/*
* Login to Gaia embedded appliance
*/

"use strict";

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
//var window = new webdriver.WebDriver.Window(browser);

function logTitle() {
	browser.getTitle().then(function(title) {
		console.log('Current Page Title: ' + title);
	});
}

function checkTitle() {
browser.getTitle()
.then(function(title) {
console.log("The title is: " + title)
});
return webdriver.until.titleIs('Irek-11 - Internet - Check Point 1100 Appliance');
}


function clickLink(link) {
	link.click();
}

function handleFailure(err) {
	console.error('Something went wrong\n', err.stack, '\n');
	closeBrowser();
}

function findLogo() {
	return browser.findElements(webdriver.By.className('header-logo')).then(function(result) {
        //console.log('findLogo: ' + result[0]);
		return result[0];
	});
}

function findDevice() { //
	return browser.findElements(webdriver.By.id('tab-1058')).then(function(result) {
        console.log('Device tab found');
        browser.sleep(10000);
		return result[0];
	});
    
}

function findMenu() {
	return browser.findElements(webdriver.By.id('tabbar-1032-targetEl')).then(function(result) {
        console.log('Menu found');
        browser.sleep(10000);
		return result[0];
	});
}

function findNetwork() {
	return browser.findElements(webdriver.By.id('treeview-1043-record-ext-record-99')).then(function(result) {
		return result[0];
	});
}


function closeBrowser() {
	browser.quit();
}

browser.get('https://10.199.107.1:4434');
browser.findElement(webdriver.By.id('textfield-1018-inputEl')).sendKeys('admin');
browser.findElement(webdriver.By.id('textfield-1019-inputEl')).sendKeys('n3w@y!n');
browser.findElement(webdriver.By.id('button-1021-btnIconEl')).click();
//browser.findElements(webdriver.By.css('[background-mage="build-280vzwK8/smb/resources/images/sg/ROBO/header-logo.png"]'));
//browser.wait(findLogo, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
//window.maximize();
//browser.wait(findMenu, 30000).then(findDevice).then(clickLink);
browser.wait(findDevice, 30000).then(clickLink).then(checkTitle);
//.then(findNetwork).then(clickLink);




/*function findXY() {
    //http://learn-automation.com/how-to-solve-element-is-not-clickable-at-pointxy-in-selenium/
    // Find an element
    WebElement elementToClick = driver.findElement(By.xpath("Your xpath"));
    // Scroll the browser to the element's Y position
    ((JavascriptExecutor)driver).executeScript("window.scrollTo(0,"+elementToClick.getLocation().y+")");
    // Click the element
    elementToClick.click();
}*/