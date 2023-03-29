
// to use jquery sybom '$' is needed.

var Body = 
  {
    setBackGroundColor:function(color)
    {
    //   document.querySelector('body').style.backgroundColor = color;
        $('body').css('background-color', color)
    },

    setColor:function(color)
    {
    //   document.querySelector('body').style.color = color;
        $('body').css('color', color)
    }
  }

  var Link = 
  {
    setColor:function(color)
    {
    //   var link_target = document.querySelectorAll('a');

    //   for(i=0; i<link_target.length; i++)
    //   {
    //     link_target[i].style.color = color
    //   }
        $('a').css('color', color);
    }
  }

  function nightdayHandler(self)
  {
    var target = document.querySelector('body').style;
    
    if( document.querySelector('#t_NDbtn').value === 'Night' )
    {
      Body.setBackGroundColor('black');
      Body.setColor('white');
      self.value = 'Day';      
      Link.setColor('blue');
    }
    else
    {
      /*
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      document.querySelector('#t_NDbtn').value = 'Night';
      */
      Body.setBackGroundColor('white');
      Body.setColor('black');
      self.value = 'Night';
      Link.setColor('powderblue');
    }
  }