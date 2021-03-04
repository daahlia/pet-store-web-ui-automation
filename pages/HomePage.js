const { I } = inject();

//export default

module.exports = {

  // insert your locators and methods here
  locators:{
    EnterTheStore: "//a[contains(text(), 'Enter the Store')]" 
  },
  validate() {
    I.seeTextEquals("Enter the Store", this.locators.EnterTheStore);
  }
}
