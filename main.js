Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

rover_width=100;
rover_height=90;

var car1_cords = { 
    X: 10,
    Y: 10,
 
};
var car2_cords = {
    X: 20,
    Y: 10,
};

rover_image="supra_1.jpg";
supra2_image="supra_2.PNG";
mars_array =["e.jpg", "e2.jpg", "e3.jpg"];

random_number =Math.floor(Math.random()*3);
background_image=mars_array[random_number];

bg_img=new Image();
rover_img=new Image();
supra2_img=new Image();

function add(){
    bg_img.src=background_image;
    rover_img.src=rover_image;
    supra2_img.src=supra2_image;

    uploadBackground(bg_img);
    uploadRover(rover_img, car1_cords);
    uploadRover(supra2_img, car2_cords);
}

add();

 
function uploadBackground(bg_img){
    ctx.drawImage(bg_img, 0,0,Canvas.width, Canvas.height);
}

function uploadRover(i, cords){
    console.log(cords);
    ctx.drawImage(i, cords.X, cords.Y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if (keypressed=="37"){
        console.log("Left");
        Left(bg_img, rover_img, supra2_img, car1_cords, car2_cords);
    }
    if (keypressed=="38"){
        console.log("Up");
        Up(bg_img, rover_img, supra2_img, car1_cords, car2_cords);
    }
    if (keypressed=="39"){
        console.log("Right");
        Right(bg_img, rover_img, supra2_img, car1_cords, car2_cords);
    }
    if (keypressed=="40"){
        console.log("Down");
        Down(bg_img, rover_img, supra2_img, car1_cords, car2_cords);
    }
    if (keypressed=="65"){
        console.log("Left");
        Left(bg_img, supra2_img, rover_img, car2_cords, car1_cords);
    }
    if (keypressed=="87"){
        console.log("Up");
        Up(bg_img, supra2_img, rover_img, car2_cords, car1_cords);
    }
    if (keypressed=="68"){
        console.log("Right");
        Right(bg_img, supra2_img, rover_img, car2_cords, car1_cords);
    }
    if (keypressed=="83"){
        console.log("Down");
        Down(bg_img, supra2_img, rover_img, car2_cords, car1_cords);
    }1
}

function Up(bg_img, mov_car_img, stay_car_img, mov_car_cords, stay_car_cords){
    if (mov_car_cords.Y >= 0){
        mov_car_cords.Y -= 10;
        console.log("when up arrow is pressed, X="+mov_car_cords.X+" , Y= "+mov_car_cords.Y);
        uploadBackground(bg_img);
        uploadRover(mov_car_img, mov_car_cords);
    }
    uploadRover(stay_car_img, stay_car_cords);
}
function Down(bg_img, mov_car_img, stay_car_img, mov_car_cords, stay_car_cords){
    if (mov_car_cords.Y < 500){
        mov_car_cords.Y += 10;
        console.log("when Down arrow is pressed, X="+mov_car_cords.X+" , Y= "+mov_car_cords.Y);
        uploadBackground(bg_img);
        uploadRover(mov_car_img, mov_car_cords);
    }
    uploadRover(stay_car_img, stay_car_cords);
}
function Left(bg_img, mov_car_img, stay_car_img, mov_car_cords, stay_car_cords){
    if (mov_car_cords.X >= 0){
        mov_car_cords.X -= 10;
        console.log("when Left arrow is pressed, X="+mov_car_cords.X+" , Y= "+mov_car_cords.Y);
        uploadBackground(bg_img);
        uploadRover(mov_car_img, mov_car_cords);
    }
    uploadRover(stay_car_img, stay_car_cords);
}
function Right(bg_img, mov_car_img, stay_car_img, mov_car_cords, stay_car_cords){
    if (mov_car_cords.X <= 700){
        mov_car_cords.X += 10;
        console.log("when Right arrow is pressed, X="+mov_car_cords.X+" , Y= "+mov_car_cords.Y);
        uploadBackground(bg_img);
        uploadRover(mov_car_img, mov_car_cords);
    }
    uploadRover(stay_car_img, stay_car_cords);
}
