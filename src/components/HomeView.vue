<template>

<div class="bg-gray-900 h-screen pt-2 ">

<div class="container m-auto font-sans bg-gray-800 text-yellow-400 md:w-6/12 p-2 h-auto mt-40 md:mt-16">
    <div class="container grid grid-cols-3  mx-auto bg-gray-900 rounded-lg w-4/5   p-5 mb-2" v-for="event in dataevent" :key="event.name">
        
       
        <div class="col-span-2">
            
            <div class="text-base md:text-lg text-gray-300"> {{event.title}} <span class="text-xs text-gray-400">({{event.mode}} Event)</span></div>
          
            <div class="text-sm">{{event.community}}</div>
            <div class="text-xs text-gray-400">{{event.city}}, {{event.country}}</div>
            <div class="text-xs text-gray-400">{{event.date}} {{event.time}}</div>
        </div>

        <!--<div>
            <img class="w-16 mt-6 ml-6 md:ml-16 md:mt-2 md:w-18 rounded-full" :src="event.img">

        </div> -->

       
        
        
    </div>

</div>

</div>
</template>

<script>
export default {
    name:"HomeView",
    data(){
        return{
            dataevent:[],

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
                    'name':'Road Map to DataScience1',
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
   mounted(){
       this.$api.events.eventAPI().then(response => {
      this.dataevent = response.data;
      console.log(this.dataevent)
    });


    }
}
</script>

<style>

</style>
