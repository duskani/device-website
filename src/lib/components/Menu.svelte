<script>


function toggleCreate() {
  const createbutton = document.getElementById("createdevice");
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
  <button href="javascript:void(0)" class="closebtn" onclick={toggleNav}
    >&times;</button
  >
  <!--Create Button-->
  <button
    class="createdevice w-full flex flex-col mx-auto"
    id="create_Device_Btn"
    href="javascript:void(0)"
    onclick={toggleCreate}>create device</button
  >
</div>

<!--Create Device menu-->
<div class="flex flex-row w-1/2 h-full createScreen" id="CreateScreen">
  <form class="flex flex-col h-full justify-evenly ml-[5rem] ">
    
    <!-- Close Button -->
    <button
      href="javascript:void(0)"
      class="closebtn mr-[5rem]"
      onclick={toggleCreate}>&times;</button>
   


      <!--Create Button-->
      <button
        class="create_button"
        href="javascript:void(0)"
        onclick={createNewDevice}>create</button>
    
  </form>
</div>

<button
  style="font-size:30px;cursor:pointer;"
  class="burgermenu"
  onclick={toggleNav}>&#9776;</button
>

<!--CSS-->
<style>
  .sidenav .createdevice {
    border-radius: 0.938rem;
    background-color: #62b3ff;
    color: black;
    justify-content: center;
    width: 7.438rem;
    height: 2.313rem;
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
    background-color: #87bbb7;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    position: fixed;
    border-right: 0.2rem solid black;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    background-color: #87bbb7;
    border: none;
  }

  .createScreen {
    height: 33rem;
    width: 70rem;
    margin-top: 5rem;
    position: fixed;
    background-color: #87bbb7;
    display: none;
  }

  .createScreen .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    background-color: #87bbb7;
    border: none;
  }

  .createScreen .create_button {
    border-radius: 0.938rem;
    background-color: #62b3ff;
    color: black;
    justify-content: center;
    width: 7.438rem;
    height: 2.313rem;
    transition: 1s;
  }

  .burgermenu {
    background-color: #9ed8d2;
    border: none;
    color: white;
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
  }
</style>
