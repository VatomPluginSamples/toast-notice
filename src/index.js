import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'

/**
 * Toast Notice plugin.
 *
 * All information regarding plugin development can be found at
 * https://developer.vatom.com/spaces/plugins-in-spaces/guide-create-plugin
 *
 * @license MIT
 * @author Vatom Inc.
 */
export default class ToastNoticePlugin extends BasePlugin {
  //================ properties of class ToastNoticePlugin

  // Plugin ID
  static get id()             { return 'toast-notice' }
  static get name()           { return 'Toast Notice' } 
  static get description()    { return "This plugin serves as an example for how plugin"
    + " code can be used to control toast notifications." }
  static get version()        { return `${require('../package.json').version}` }
  //
  myToastID     = null;


  //================ methods for class ToastNoticePlugin

  onLoad() {
    // Create two buttons in the toolbar
    this.menus.register({
      icon: this.paths.absolute('button-icon.png'),
      text: 'Start Toast',
      action: () => this.onStartToast()
    });
    this.menus.register({
      icon: this.paths.absolute('button-icon.png'),
      text: 'Cancel',
      action: () => this.onCancelToast()
    });
  }// onLoad()


  async onStartToast() {
    this.myToastID = await this.menus.toast({
      text: 'This toast message lasts 15 seconds unless cancelled sooner.',
      duration: 15000
    });
    console.log(`The toast ID is ${this.myToastID}.`);
  }// onStartToast()


  onCancelToast() {
    if (!! this.myToastID){
      console.log(`The toast ID was ${this.myToastID}.`);
      //
      this.menus.closeToast(this.myToastID);
      this.myToastID = null;
      //
      console.log(`The toast ID is now cleared to ${this.myToastID}.`);
      // Show alert
      //this.menus.alert(`The toast is toast!`, 'Alert', 'info');
    }else{
      this.menus.alert(`There is nothing to cancel.`, 'Alert', 'info');
    }
  }// onCancelToast()


}// class ToastNoticePlugin ===========================================================

