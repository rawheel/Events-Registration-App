<template>

<div class="flex flex-wrap content-center bg-gray-900 h-screen pt-2 ">
    

   <div class="container m-auto grid frid-rows-2 md:grid-cols-2 font-sans bg-gray-800 h-auto w-8/12">

       <div class="h-3/5 ">
         <img   src="@/assets/login.jpg">
       </div>

       <div class="p-10 font-sans">
           <div class="font-sans font-bold text-lg md:text-xl text-green-400 mb-5 ">Login</div>
           <div class="font-medium tracking-normal text-sm md:text-md text-gray-200">Welcome Back, Please login to admin account first.</div>
           <div>

            <div class="my-auto text-sm md:text-lg"> 
                <input v-model="email" required class="mt-5 p-2 w-full focus:outline-none focus:ring focus:border-gray-900 " type="email" name="email" placeholder="Email" autocomplete="off">
                <span v-if="!email.length" class="text-sm text-red-500">please enter an email</span>
                <input v-model="password" required class="mt-5 p-2 w-full focus:outline-none focus:ring focus:border-gray-900 " type="password" name="password" placeholder="Password" autocomplete="off">
                <span v-if="!password.length" class="text-sm text-red-500">please enter a password</span><br>
                <button type="submit" class="mt-5 w-6/12 md:w-4/12 bg-green-400 text-gray-100 p-3 rounded-md" @click="validateLogin">Login</button>
            </div>
        </div>
       </div>
   
   </div>

</div>


</template>

<script>

export default {

   
    name:"AdminLogin",

    data(){
        return{
            
            email:'',
            password:'',
            eventData:[

                {
                    'name':'Road Map to Flutter1',
                    'status':'Online Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/flutterr.png',

                },
                {
                    'name':'Road Map to Blockchain1',
                    'status':'Online Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/blockchainn.png',

                },
                {
                    'name':'Road Map to DataScience',
                    'status':'Physical Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Asset%205.jpg',

                },
                                {
                    'name':'Road Map to Flutter',
                    'status':'Online Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/flutterr.png',

                },
                {
                    'name':'Road Map to Blockchain',
                    'status':'Online Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/blockchainn.png',

                },
                {
                    'name':'Road Map to DataScience',
                    'status':'Physical Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Asset%205.jpg',

                },
                                {
                    'name':'Road Map to Flutter',
                    'status':'Online Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/flutterr.png',

                },
                {
                    'name':'Road Map to Blockchain',
                    'status':'Online Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/blockchainn.png',

                },
                {
                    'name':'Road Map to DataScience',
                    'status':'Physical Event',
                    'community':'DSC UIT',
                    'city':'Karachi',
                    'country': 'Pakistan',
                    'date':'10-Apr-2021',
                    'time':'9:00pm PST',
                    'img':'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Asset%205.jpg',

                },
            ]
        }
    },
    methods:{
        validateLogin(){
            if (this.email === this.$store.state.admin.email && this.password === this.$store.state.admin.password){
                console.log("Vaidated Login")
                this.$store.commit("updateLogin",true)
            }else{
                console.log(this.$store.state.admin.email,this.$store.state.admin.password,this.email,this.password,"not valid")
            }
        }
    }
}
</script>

<style>

</style>
