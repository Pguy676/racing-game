function car1up(){

    if (car1_y >=0) 
    {
      car1_y = car1_y - 10;  
      console.log("When up arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
    }   
}

    function car1down(){

      if (car1_y <=500) 
        {
          car1_y = car1_y + 10;  
          console.log("When Down arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
          uploadbackground();
          uploadcar1();
          uploadcar2();
        }   
    }

    function car1right(){

        if (car1_x <=0) 
            {
              car1_y = car1_y + 10;  
              console.log("When Right arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
              uploadbackground();
              uploadcar1();
              uploadcar2();
            }   
        }

    function car1left(){

          if (car1_x >=0) 
                {
                  car1_x = car1_x - 10;  
                  console.log("When Left arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
                  uploadbackground();
                  uploadcar1();
                  uploadcar2();
                }   
            }        

            