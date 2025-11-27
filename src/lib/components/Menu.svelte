<script>
function toggleNav() {
  const nav = document.getElementById("mySidenav");
  const createbutton = document.getElementById("createdevice");
  nav.style.width = nav.style.width === "250px" ? "0px" : "250px";
  createbutton.style.width = createbutton.style.width === "7.438rem" ? "0px" : "7.438rem";
}

function toggleCreate() {
  const createScreen = document.getElementById("CreateScreen");
  createScreen.style.display = createScreen.style.display === "none" ? "block" : "none";
}

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

<div id="mySidenav" class="sidenav">
  <button href="javascript:void(0)" class="closebtn" onclick={toggleNav}>&times;</button>
  <button class="createdevice w-full flex flex-col mx-auto" href="javascript:void(0)" onclick={toggleCreate}>create device</button>
</div>

<div id="CreateScreen" class="createScreen">
  <button href="javascript:void(0)" class="closebtn" onclick={toggleCreate}>&times;</button>
  <input type="text" placeholder="device name" id="device-name">
  <button class="createnewdevice" href="javascript:void(0)" onclick={createNewDevice}>create</button>
</div>

<button style="font-size:30px;cursor:pointer;" class="burgermenu" onclick={toggleNav}>&#9776;</button>

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
  height: 80%;
  width: 78%;
  position: fixed;
  z-index: 2;
  top: 15%;
  left: 20%;
  background-color: #87BBB7;
  overflow-x: hidden;
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





