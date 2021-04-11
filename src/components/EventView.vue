<template>

<div class="flex flex-wrap content-center bg-gray-900 h-screen pt-2 ">
    

   <div class="container mx-auto grid frid-rows-2 md:grid-cols-2 font-sans bg-gray-200 w-8/12">

       <div class="h-3/5">
         <img  src="@/assets/login.jpg">
       </div>

       <div class="p-10">
           <div class="font-sans font-bold text-xl mb-5 ">Login</div>
           <div class="font-medium tracking-normal text-gray-700">Welcome Back, Please login to admin account first.</div>
           <div>

            <div>
            <input class="mt-5 p-2 w-full focus:outline-none focus:ring focus:border-gray-900 " type="email" placeholder="Email">
            <input class="mt-5 p-2 w-full focus:outline-none focus:ring focus:border-gray-900 " type="password" placeholder="Password">
            </div>

            <div>
                <button type="submit" class="mt-5 6/12 md:w-4/12 bg-gray-800 text-gray-50 p-3 rounded-md" >Login</button>
            </div>
        </div>
       </div>
   
   </div>

</div>


</template>

<script>
export default {
    name:"EventView",
    data(){
        return{
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
    }
}
</script>

<style>

</style>
