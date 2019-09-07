class Messaage {
  constructor(text){
    this.messaage = document.createElement('li');

    this.messaage.className = 'message';

    this.messaage.innerHTML = `
      <p>${text}</p>
      <span>${ new Date().toLocaleTimeString() }</span>
    `;
  };

  render(){
    return this.messaage;
  }
}

class Tools{
  constructor(){
    this.tools = document.createElement('form');
    const p = document.createElement('p');
    const textarea = document.createElement('textarea');
    const button = document.createElement('button');

    this.tools.className = 'tools';
    textarea.rows = 10;
    textarea.placeholder = 'enter your message...';
    button.textContent = 'Send';

    this.tools.addEventListener('submit', event => {
      event.preventDefault();
      this.addNewMessage(textarea, p);
    });

    this.tools.addEventListener('keydown', event => {
      if(event.key === 'Enter' && event.ctrlKey) {
        this.addNewMessage(textarea, p);
      }
    })

    textarea.addEventListener('input', event => {
      p.innerText = event.target.value;
    })

    this.tools.append(p, textarea, button);
  };

  addNewMessage(textarea, p){
    const msg = new Messaage(textarea.value).render();

    const workingDirectory = this.tools.nextElementSibling; 
    workingDirectory.firstElementChild.append(msg);
    
    p.textContent = textarea.value =  '';
    
    textarea.focus();
  };

  render(){
    return this.tools;
  };
};

class WorkingDirectory{
  constructor(){
    this.workingDirectory = document.createElement('div');

    this.workingDirectory.innerHTML = '<ul></ul>';
    this.workingDirectory.className = 'working-directory';

    // const msg = new Messaage('Hello, Mike!').render();
    // this.workingDirectory.firstElementChild.append(msg);
  };

  render(){
    return this.workingDirectory;
  };
};


class Chat {
  constructor(where) {
    this.where = where;
    this.instance = document.createElement('div');

    this.instance.className = 'chat-room';

    this.instance.append(new Tools().render(), new WorkingDirectory().render());

  };

  render() {
    document.querySelector(this.where).prepend(this.instance);
  };
};

new Chat('#root').render();
// закончили на 1:57:55
// закончили на 47:57