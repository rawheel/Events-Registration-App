
<template>
<div class="bg-gray-900 h-full">
<div>
<div>
  <nav class="bg-gray-800 fixed w-full">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="@/assets/eventlogo_white.svg" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="@/assets/eventlogo_white.svg" alt="Workflow">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class=" flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link class=" focus:bg-gray-900 active:bg-gray-900 hover:bg-gray-700 h-full text-white px-3 py-2 rounded-md text-sm font-medium" to="/" aria-current="page">Home</router-link>

            
      <router-link to="/register-event" class="focus:bg-gray-900 active:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add Event</router-link>
      <router-link to="/Login" class="focus:bg-gray-900 active:bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</router-link>

          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <a href="https://github.com/rawheel" target="_blank"> <img class="h-8 w-8 rounded-full" src="https://flowimage.flow.page/resize?img=https%3A%2F%2Fcdn.flow.page%2Fimages%2F183308b4-29b1-4116-b226-5e8cba412bfb-profile-picture%3Fm%3D1603145711&w=320" alt=""></a>
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"

          -->
          <!--<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          </div>
          -->
        </div>

      

        
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="flex justify-center  space-x-4">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <router-link to="/" class=" focus:bg-gray-900 active:bg-gray-900 hover:bg-gray-700  text-white block px-3 py-2 h-full rounded-md text-base font-medium" aria-current="page">Home</router-link>

      <router-link to="/register-event" class="focus:bg-gray-900 active:bg-gray-900  text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add Event</router-link>
      <router-link to="/Login" class="focus:bg-gray-900 active:bg-gray-900  text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</router-link>

          </div>
  </div>
</nav>

</div>

<router-view/>
</div>
<div class="flex justify-center p-3">
  <div class="w-8 h-8 md:w-10 md:h-10">
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"

viewBox="0 0 171 171"
style=" fill:#000000;"><defs><linearGradient x1="82.82545" y1="42.75" x2="82.82545" y2="147.86691" gradientUnits="userSpaceOnUse" id="color-1_52539_gr1"><stop offset="0" stop-color="#f7e7b3"></stop><stop offset="1" stop-color="#9be0c6"></stop></linearGradient><linearGradient x1="85.5" y1="13.35938" x2="85.5" y2="158.08683" gradientUnits="userSpaceOnUse" id="color-2_52539_gr2"><stop offset="0" stop-color="#ecc84e"></stop><stop offset="1" stop-color="#45c595"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,171.99519v-171.99519h171.99519v171.99519z" fill="none"></path><g><path d="M66.81825,149.6437c-0.00802,-0.98325 -0.01603,-5.24222 -0.02405,-9.22866l-0.00802,-4.14141c-17.97905,2.44477 -22.33153,-10.09969 -22.37963,-10.23328c-2.49553,-6.327 -5.90752,-8.13586 -6.05447,-8.21067l-0.33131,-0.19238c-1.23708,-0.84431 -4.51814,-3.09136 -3.58566,-6.04645c0.84164,-2.66386 4.104,-2.93906 5.58689,-2.89097c8.21334,0.57445 12.37078,7.95684 12.54178,8.26945c4.19217,7.18467 10.59131,6.44189 14.71936,4.92694c0.38475,-1.83825 0.98058,-3.52688 1.76077,-5.01778c-13.24181,-2.34858 -28.24439,-9.39164 -28.24439,-35.01225c0,-7.03505 2.19094,-13.2525 6.52205,-18.51342c-0.96722,-3.22228 -2.06803,-9.79509 1.19166,-18.07523l0.46491,-1.18097l1.20769,-0.38475c1.1115,-0.36605 7.182,-1.66725 19.66233,6.50067c5.15138,-1.31991 10.60467,-2.00123 16.22897,-2.02795c5.65102,0.02672 11.10966,0.70805 16.27172,2.02795c12.46964,-8.17059 18.52678,-6.85336 19.64095,-6.50067l1.20502,0.38742l0.46491,1.17563c3.27305,8.27747 2.17223,14.85295 1.20502,18.07791c4.32309,5.24489 6.51403,11.46502 6.51403,18.51342c0,25.62595 -15.01861,32.64764 -28.28981,34.96683c1.50427,2.84555 2.31919,6.41784 2.31919,10.36153c0,4.49677 -0.0187,19.24819 -0.04008,22.44909l-5.34375,-0.03741c0.02138,-3.19556 0.04008,-17.92294 0.04008,-22.41436c0,-6.52472 -2.51958,-9.41034 -3.60703,-10.35084l-4.62234,-3.9998l6.07584,-0.67598c13.90711,-1.54434 28.12148,-6.35639 28.12148,-30.30173c0,-6.22547 -2.07605,-11.65205 -6.17203,-16.12744l-1.14891,-1.25311l0.64659,-1.56839c0.44353,-1.07142 2.38866,-6.52472 -0.11489,-14.13689c-2.02528,0.12023 -6.86137,1.07409 -14.91975,6.53808l-1.026,0.69202l-1.18898,-0.32864c-4.9777,-1.38403 -10.52184,-2.12681 -16.03392,-2.15353c-5.48269,0.02672 -11.01881,0.7695 -15.9885,2.15353l-1.18898,0.32864l-1.02333,-0.69202c-8.06639,-5.46131 -12.91317,-6.42319 -14.94647,-6.54342c-2.4982,7.61752 -0.55041,13.07081 -0.10688,14.14223l0.64659,1.56839l-1.14623,1.25311c-4.104,4.49142 -6.18272,9.918 -6.18272,16.12744c0,23.93466 14.18766,28.77609 28.06537,30.35517l6.01706,0.684l-4.56356,3.98109c-0.99394,0.86836 -2.75203,2.97113 -3.35053,7.2862l-0.20039,1.46686l-1.35197,0.60652c-3.52955,1.58175 -15.60108,5.77659 -22.83919,-6.63961c-0.04008,-0.0668 -1.4535,-2.52492 -4.01316,-4.16011c1.72603,1.70733 3.8288,4.47005 5.52544,8.78245c0.17634,0.50766 3.62573,9.67753 19.45125,6.24952l3.22228,-0.70003l0.03206,10.62872c0.00802,3.97308 0.01603,8.21869 0.02405,9.20194z" fill="url(#color-1_52539_gr1)"></path><path d="M85.5,154.96875c-38.30667,0 -69.46875,-31.16208 -69.46875,-69.46875c0,-38.30667 31.16208,-69.46875 69.46875,-69.46875c38.30667,0 69.46875,31.16208 69.46875,69.46875c0,38.30667 -31.16208,69.46875 -69.46875,69.46875zM85.5,21.375c-35.35692,0 -64.125,28.76808 -64.125,64.125c0,35.35692 28.76808,64.125 64.125,64.125c35.35692,0 64.125,-28.76808 64.125,-64.125c0,-35.35692 -28.76808,-64.125 -64.125,-64.125z" fill="url(#color-2_52539_gr2)"></path></g></g></svg>
        </div>
        <div>
        <div class="text-gray-300 text-xs ml-2 md:text-base">
          Developed By 
        </div>
        <div class="text-xs ml-2  md:text-sm text-gray-500">
          <a href="https://github.com/rawheel" target="_blank">  Raheel Siddiqui </a>
        </div>
        </div>
        
</div>
</div>


</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      isClickedHome: true,
      isClickedAdd: false,
      isClickedLogin: false
    }
  },
  methods:{
    homeFlag(){
      this.isClickedHome = !this.isClickedHome
      console.log(this.isClickedHome,"homee")
    },
    addFlag(){
      this.isClickedAdd = !this.isClickedAdd
    },
    loginFlag(){
      this.isClickedLogin = !this.isClickedLogin
    },

  }
 
}
</script>