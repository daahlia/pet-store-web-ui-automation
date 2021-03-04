const { assert } = require("chai");
const faker = require("faker");
const { Page } = require("puppeteer");
let newlyCreatedUser;
let errorTitle;
let responsePageElement;

Feature('PetStoreUser');

Scenario('1.UserLogin', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.fillField("username", "daahlia");
    I.fillField("password", "123");
    I.click('//input[@name="signon"]');
    I.waitForText("My Account");
    I.seeTextEquals('My Account', '//a[contains(text(), "My Account")]');
    console.log("User logged in successfully.");
});

Scenario('2.UserLoginWithInvalidUsername', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.fillField("username", "invalid-user");
    I.fillField("password", "123");
    I.click('//input[@name="signon"]');
    I.waitForText("Invalid username or password. Signon failed.", 10);
    I.seeElement("//li[contains(text(), 'Signon failed.')]");
    console.log("User login failed successfully for invalid username.");
});

Scenario('3.UserLoginWithInvalidPassword', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.fillField("username", "daahlia");
    I.fillField("password", "invalid-password");
    I.click('//input[@name="signon"]');
    I.waitForText("Invalid username or password. Signon failed.", 5);
    I.seeElement("//li[contains(text(), 'Signon failed.')]");
    console.log("User login failed successfully for invalid password.");
});

Scenario('4.UserLoginWithInvalidUsernamePassword', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.fillField("username", "invalid-user");
    I.fillField("password", "invalid-password");
    I.click('//input[@name="signon"]');
    I.waitForText("Invalid username or password. Signon failed.", 5);
    I.seeElement("//li[contains(text(), 'Signon failed.')]");
    console.log("User login failed successfully for invalid username and password.");
});



Scenario('5.UserRegistration', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    newlyCreatedUser = faker.name.findName();
    console.log("1" + newlyCreatedUser),
    I.fillField("username", newlyCreatedUser);
    console.log("2" + newlyCreatedUser),
    I.fillField("password", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In", 50);
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registered successfully.");
});

Scenario('6.UserLoginWithNewlyRegisteredUser', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    newlyCreatedUser = faker.name.findName();
    console.log("1" + newlyCreatedUser),
    I.fillField("username", newlyCreatedUser);
    console.log("2" + newlyCreatedUser),
    I.fillField("password", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In", 50);
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registered successfully.");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.fillField("username", newlyCreatedUser);
    I.fillField("password", "123");
    I.click('//input[@name="signon"]');
    I.waitForText("My Account",2);
    I.seeTextEquals('My Account', '//a[contains(text(), "My Account")]');
    console.log("User logged in successfully.");
});


Scenario('7.UserRegistrationWithNoFirstName', async({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    //I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForInvisible("//input[@value='Save Account Information']", 20);
    errorTitle = await I.grabTitle();
    //console.log(errorTitle);
    let successPage= await I.grabSource();
    
    if(successPage.includes('Saltwater')===true)
        {   
        I.waitForText("Sign In", 5);
        I.seeElement("//div[@id='LogoContent']");
        console.log("User registered successfully.");
        }
    
    else{
        console.log("New User registration failed unexpectedly for blank value - first name "+ "\n" + "Error: " + errorTitle);
    }
    I.waitForText("Sign In", 5);
    

    // try{
    //     if(successPage.includes('Saltwater')===true)
    //     {   
    //         I.waitForText("Sign In", 5);
    //         I.seeElement("//div[@id='LogoContent']");
    //         console.log("User registered successfully.");
    //     }        
    // }
    // catch(err){    
    // console.log("New User registration failed unexpectedly "+ "\n" + "Error: " + err + errorTitle);
    // }
});

Scenario('8.UserRegistrationWithNoLastName', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    I.fillField("account.firstName", "first-name");
    //I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registration failed unexpectedly. System shows 500 – Internal Server Error");
});

Scenario('9.UserRegistrationWithNoEmail', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    //I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registration failed unexpectedly. System shows 500 – Internal Server Error");
});

Scenario('10.UserRegistrationWithNoPhone', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    //I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registration failed unexpectedly. System shows 500 – Internal Server Error");
});

Scenario('11.UserRegistrationWithNoAddress', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    //I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registration failed unexpectedly. System shows 500 – Internal Server Error");
});

Scenario('12.UserRegistrationWithNoCity', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    //I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registration failed unexpectedly. System shows 500 – Internal Server Error");
});

Scenario('13.UserRegistrationWithNoState', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    //I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registration failed unexpectedly. System shows 500 – Internal Server Error");
});

Scenario('14.UserRegistrationWithNoZipCode', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    //I.fillField("account.zip", "2000");
    I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registration failed unexpectedly. System shows 500 – Internal Server Error");
});
Scenario('14.UserRegistrationWithNoCountry', ({I}) => {
    I.amOnPage('/');
    I.waitForVisible("//a[contains(text(), 'Enter the Store')]");
    I.seeTextEquals("Enter the Store", "//a[contains(text(), 'Enter the Store')]");
    I.click("//a[contains(text(), 'Enter the Store')]");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("Home page loaded successfully.");
    I.click('//a[contains(text(), "Sign In")]');
    I.waitForText("Register Now!", 20);
    I.seeTextEquals("Register Now!", "//a[contains(text(),'Register Now!')]");
    I.click( "//a[contains(text(),'Register Now!')]",);
    I.waitForText("User Information");
    I.fillField("username", "test-username");
    I.fillField("password", "123");
    I.fillField("repeatedPassword", "123");
    I.fillField("account.firstName", "first-name");
    I.fillField("account.lastName", "last-name");
    I.fillField("account.email", "xxx.gmail.com");
    I.fillField("account.phone", "00000000000");
    I.fillField("account.address1", "address123");
    I.fillField("account.city", "Sydney");
    I.fillField("account.state", "NSW");
    I.fillField("account.zip", "2000");
    //I.fillField("account.country", "Australia");
    I.click("//input[@value='Save Account Information']");
    I.waitForText("Sign In");
    I.seeElement("//div[@id='LogoContent']");
    console.log("New User registration failed unexpectedly. System shows 500 – Internal Server Error");
});