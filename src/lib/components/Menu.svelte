<script>
function toggleNav() {
  const nav = document.getElementById("mySidenav");
  const createbutton = document.getElementById("createdevice");
  nav.style.width = nav.style.width === "250px" ? "0px" : "250px";
  createbutton.style.width = createbutton.style.width === "7.438rem" ? "0px" : "7.438rem";
  
   


  
}

function toggleCreate() {
  
  // gives the function to toggle button 
  // block is display, none is still a display but is invisible having none at line 13 would cause a double click 
  var CreateScreen = document.getElementById("CreateScreen"); 
  if (CreateScreen.style.display != 'block'){
    CreateScreen.style.display = 'block'; 
  } else {
    CreateScreen.style.display = 'none';
  }
  



  // Attempt to close navbar upon clicking "create button" got no clue though 
  //create_Device_Btn.addEventListener('click', () => {
    //toggleCreate.classlist.remove('none');
  //});

}


// create a new device node 
function createNewDevice() {
  let devicename = document.getElementById("device-name")
  const div = document.createElement("div")
  const container = document.getElementById("devicecontainer")
  div.id = "device";
  div.className = "flex flex-wrap bg-slate-300 w-[19rem] h-[13rem] justify-center ";
  div.innerHTML += 
      '<p class="">device name</p> <img src="placeholder.png" alt="placeholder" class="w-[16rem] h-[7rem]"> <p class=""> expose points: </p>';

  // Append the <div> to the body
  container.appendChild(div);

}
</script>



<!--Nav bar-->
<div id="mySidenav" class="sidenav">
  <button href="javascript:void(0)" class="closebtn" onclick={toggleNav}>&times;</button>
  <!--Create Button-->
  <button class="createdevice w-full flex flex-col mx-auto" id="create_Device_Btn" href="javascript:void(0)" onclick={toggleCreate}>create device</button>
  
</div>


<!--Create Device menu-->
<div id="CreateScreen" class="createScreen ">
  <div class="flex flex-row w-full h-full">
  <form class="flex flex-col h-full justify-evenly  ml-[5rem]">
  <button href="javascript:void(0)" class="closebtn" onclick={toggleCreate}>&times;</button>
  <input type="text" placeholder="Device Name" id="device-name" class="border-solid border-black border w-[30rem]">
  <input type="text" placeholder="Device Model" class="border-solid border-black border w-[30rem]"> 
  <input type="text" placeholder="Description" class="border-solid border-black border w-[20rem] h-[20rem]">
  <!--Work on this add more inputs and other shiii-->

  <!--something is cutting the height in half preventing to move these inputs to the top-->
  <div class="flex flex-col ml-[40rem] h-full ">
  <input type="text" placeholder="Notes" class="border-solid border-black border w-[30rem]">
  <input type="text" placeholder="Positives" class="border-solid border-black border w-[30rem]">
  <input type="text" placeholder="Flaws" class="border-solid border-black border w-[30rem]">
  </div>

  <button class="createnewdevice" href="javascript:void(0)" onclick={createNewDevice}>create</button>
  </form>
  </div>
</div>

<button style="font-size:30px;cursor:pointer;" class="burgermenu" onclick={toggleNav}>&#9776;</button>








<!--CSS-->
<style>

.sidenav .createdevice {
  border-radius:0.938rem;
  background-color:#62B3FF;
  color:black;
  justify-content:center;
  width:7.438rem;
  height:2.313rem;
  transition: 1s;
}

/*create device button needs to follow the transition of the sidenav*/

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #87BBB7;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  position: fixed;
  border-right: 0.2rem solid black
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  background-color: #87BBB7;
  border: none;
}

.createScreen {
  height: 33rem;
  width: 70rem;
  margin-top: 5rem;
  position: fixed;
  background-color: #87BBB7;
  padding-top: 60px;
  display: none; 
  
}

.createScreen .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  background-color: #87BBB7;
  border: none;
}

.createScreen .createnewdevice {
  border-radius:0.938rem;
  background-color:#62B3FF;
  color:black;
  justify-content:center;
  width:7.438rem;
  height:2.313rem;
  transition: 1s;
}

.burgermenu {
  background-color: #9ED8D2;
  border: none;
  color: white;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
}
</style>





