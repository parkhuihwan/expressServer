
    function start() {
        /*console.log('call sessionStorage.setItem()'+sessionStorage.setItem('key','value'));
        console.log('call sessionStorage.getItem(): '+sessionStorage.getItem('key'));
        for (; i < 10; i++) {
        //sendXhr(i);
        }
        changeLocation();
        */
        console.log('start jquery!');
        $(document).ready(function () {
          // code ...
          console.log('start jquery! 1. ready');
        });
  
        console.log('first ajax start!');
        $.ajax({                
                  type: 'POST',
                  url: 'http://127.0.0.1:8888/syncPost',   
                  async : false,
                  success: function(){console.log('success callback func1() called!')},
                  complete: function() {console.log('complete callback func1() called!')},
            });
  
        console.log('first ajax end!');
        console.log('second ajax start!');
        $.ajax({             
                  type: 'POST',
                  url: 'http://127.0.0.1:8888/asyncPost',   
                  success: function(){console.log('success callback func2() called!')},
                  complete: function() {console.log('complete callback func2() called!')},
            });
  
        console.log('second ajax end!');
      }