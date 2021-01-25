# toasterjs

## toaster messages for your  frontend


![image](success.png)

![image](alert.png)


**Simply add this lib  with**

` <script src="toaster.js"></script>`

**create an object whenaewer you want**

` <script>
    var toaster = new Toaster();
  </script>`
  
  **Simply call an object when needed**
  
  `toaster.theToast(message,type)`
  
  **type**
  MSG_ERROR = 1;
  MSG_WARNING = 2;
  MSG_SUCCESS = 3;
  MSG_INFO = 4;
