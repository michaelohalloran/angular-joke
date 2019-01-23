export class Joke {

    constructor(public setup: string, public punchline: string, public btnText: string = 'Show punchline', public hide:boolean = true) {}
  
    toggle() {
      this.hide = !this.hide;
    }
  }