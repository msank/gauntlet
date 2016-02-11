'use strict';


describe('Application Homepage', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000')
  });

  it('should display the application name', function() {
  
    var appName = element(by.css('h1.brand-heading')); //using the CSS selector

    expect(appName.getText()).toEqual('GAUNTLET');
  });

  it('should click on go and bring us on #/annot page', function() {

    var button = $('.round-button');

    button.click();

    expect(browser.getCurrentUrl()).toEqual("http://localhost:9000/#/annot");

  });

  



});



/*describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');

      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});
*/