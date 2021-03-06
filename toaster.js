class Toaster{

  MSG_ERROR = 1;
  MSG_WARNING = 2;
  MSG_SUCCESS = 3;
  MSG_INFO = 4;
  afterDiv = "body";
  inTheEnd = false;
  attachEvents(tis){
    document.querySelectorAll('.toastt__close').forEach(elem => {
        elem.addEventListener('click',function(e){
          e.preventDefault();
          var parent = e.currentTarget.parentNode;
          parent.style.opacity = 1;
          var glob_e = parent;
          this.fadeOut(parent);
        });
    });
    Toaster.prototype.mountHTML();
  }

    constructor (afterDiv = "body",inTheEnd = true){
        this.afterDiv = afterDiv;
        this.inTheEnd = inTheEnd;
        if(window.addEventListener){
          window.addEventListener('load',this.attachEvents,this );
        }else{
          window.attachEvent('onload', this.attachEvents,this);
      }
        
    }

    fadeOut(e,hideshow = 100){(
      e.style.opacity-=.1)<=0?e.style.display="none":setTimeout(this.fadeOut.bind(this),hideshow,e,hideshow)}

    mountHTML(afterDiv="body",inTheEnd = true) {
        var newNode = document.createElement("div");
        newNode.setAttribute("class", "toastt__container"); 
        newNode.innerHTML = `
        <div class="toastt__cell">
        <div class="toastt toastt--green">
          <div class="toastt__icon">
            <svg version="1.1" class="toastt__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>
            </g></g>
            </svg>
          </div>
          <div class="toastt__content">
            <p class="toastt__type">Success</p>
            <p class="toastt__message">Anyone with access can view your invited visitors.</p>
          </div>
          <div class="toastt__close">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
          <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
        </svg>
          </div>
        </div>
        
        
        <div class="toastt toastt--blue">
          <div class="toastt__icon">
        <svg version="1.1" class="toastt__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
        <g>
            <g id="info">
                <g>
                    <path  d="M10,16c1.105,0,2,0.895,2,2v8c0,1.105-0.895,2-2,2H8v4h16v-4h-1.992c-1.102,0-2-0.895-2-2L20,12H8     v4H10z"></path>
                    <circle  cx="16" cy="4" r="4"></circle>
                </g>
            </g>
        </g>
        
            </svg>
          </div>
          <div class="toastt__content">
            <p class="toastt__type">Info</p>
            <p class="toastt__message">Anyone with access can view your invited visitors.</p>
          </div>
          <div class="toastt__close">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
          <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
        </svg>
          </div>
        </div>
        
        <div class="toastt toastt--yellow">
          <div class="toastt__icon">
        <svg version="1.1" class="toastt__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 301.691 301.691" style="enable-background:new 0 0 301.691 301.691;" xml:space="preserve">
        <g>
            <polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0  "></polygon>
            <rect x="130.563" y="261.168" width="40.525" height="40.523"></rect>
        </g>
            </svg>
          </div>
          <div class="toastt__content">
            <p class="toastt__type">Warning</p>
            <p class="toastt__message">Anyone with access can view your invited visitors.</p>
          </div>
          <div class="toastt__close">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
          <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
        </svg>
          </div>
        </div>

        <div class="toastt toastt--red">
          <div class="toastt__icon">
        <svg version="1.1" class="toastt__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
        <g>
            <g id="info">
                <g>
                    <path  d="M10,16c1.105,0,2,0.895,2,2v8c0,1.105-0.895,2-2,2H8v4h16v-4h-1.992c-1.102,0-2-0.895-2-2L20,12H8     v4H10z"></path>
                    <circle  cx="16" cy="4" r="4"></circle>
                </g>
            </g>
        </g>
        
            </svg>
          </div>
          <div class="toastt__content">
            <p class="toastt__type">Info</p>
            <p class="toastt__message">Anyone with access can view your invited visitors.</p>
          </div>
          <div class="toastt__close">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
          <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
        </svg>
          </div>
        </div>

      </div>
      <style>
      @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i');



.toastt__container {
  font-family: 'Raleway', sans-serif;
  background-color:#efefef;
  display: table;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  position:absolute;
}

.toastt__cell{
display:inline-block;
}

.add-margin{
margin-top:20px;
}

.toastt__svg{
fill:#fff;
}

.toastt {

  display: none;
  text-align:left;
  padding: 21px 0;
  background-color:#fff;
  border-radius:4px;
  max-width: 500px;
  top: 0px;
  position: relative;
  box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.2);
  
}


.toastt:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
border-top-left-radius:4px;
border-bottom-left-radius: 4px;

}

.toastt__icon{
position:absolute;
top:50%;
left:22px;
transform:translateY(-50%);
width:14px;
height:14px;
padding: 7px;
border-radius:50%;
display:inline-block;
}

.toastt__type {
color: #3e3e3e;
font-weight: 700;
margin-top: 0;
margin-bottom: 8px;
}

.toastt__message {
  font-size: 14px;
  margin-top: 0;
margin-bottom: 0;
  color: #878787;
}

.toastt__content{
padding-left:70px;
padding-right:60px;
}

.toastt__close {
  position: absolute;
  right: 22px;
  top: 50%;
  width: 14px;
  cursor:pointer;
  height: 14px;
fill:#878787;
  transform: translateY(-50%);
}

.toastt--red .toastt__icon{
background-color:#de2b2b;
}

.toastt--red:before{
background-color:#de2b2b;
}


.toastt--green .toastt__icon{
background-color:#2BDE3F;
}

.toastt--green:before{
background-color:#2BDE3F;
}

.toastt--blue .toastt__icon{
background-color:#1D72F3;
}

.toastt--blue:before{
background-color:#1D72F3;
}

.toastt--yellow .toastt__icon{
background-color:#FFC007;
}

.toastt--yellow:before{
background-color:#FFC007;
}
  </style>
        `;
        if (inTheEnd){
          var parentNode = document.querySelector(afterDiv);
          parentNode.appendChild(newNode);
        }else{
          var parentNode = document.querySelector(this.afterDiv);
          parentNode.insertBefore(newNode);
        }




    }


    fadeIn(e,hideshow = 100){
          if(e.style.display!="block"){e.style.display="block";}
          (e.style.opacity-=-(0.1))>=1?e.style.display="block":setTimeout(this.fadeIn.bind(this),hideshow,e,hideshow)}

    showmessage(type = this.MSG_WARNING, text = "Anyone with access can view your invited visitors.",hideshow = 100){
          var block = "";
          switch(type){
            case this.MSG_ERROR:
              block = ".toastt--red";
              break;
            case this.MSG_WARNING:
              block = ".toastt--blue";
              break;
            case this.MSG_SUCCESS:
              block = ".toastt--green";
              break;
            case this.MSG_INFO:
              block = ".toastt--yellow";
              break;
          }
          document.querySelector(block+' .toastt__message').innerHTML = text;
          this.fadeIn(document.querySelector(block)); 
        };
    hidemessage(){
          document.querySelectorAll('.toastt').forEach(elem =>{
            if (elem.style.display == "block"){
              this.fadeOut(elem);
            }
          });
        };
    theToast(text = "Anyone with access can view your invited visitors.", type = this.MSG_WARNING, TTL = 2000, hideshow = 100){
          this.showmessage(type,text);
          setTimeout(this.hidemessage.bind(this),TTL);
        }
    

}
