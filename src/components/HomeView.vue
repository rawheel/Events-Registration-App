<template>

<div class="bg-gray-900 overflow-auto pt-2">

<div class="container  m-auto font-sans bg-gray-800 text-green-400 md:w-6/12 p-2 h-full md:mt-20 mt-28">
    <div class=" flex mx-auto bg-gray-900 rounded-lg w-4/5 p-3 md:p-5 mb-2" v-for="(event, index) in dataevent" :key="index">
        <div class="mr-2 ">
            <img class="w-12 rounded-full" src="@/assets/w_img.png">

        </div>
       
        <div class="flex-1 " @click="checkdiv($event,event.id)" >

            
            
            <div class="md:text-lg text-sm text-gray-200">{{event.title}} </div>
            
            
            <div class="text-sm">{{event.community}}</div>
            <div class="text-xs text-gray-400"><font-awesome-icon icon="map-marker-alt" transform="shrink-4" :style="{ color: 'white' }"/> {{event.place}} <span v-if="event.mode === 'on' " class="text-xs text-gray-600">(Online Event)</span> <span v-else class="text-xs text-gray-600">(Physical Event)</span></div>
            <div class="text-xs text-gray-400"><font-awesome-icon icon="globe-asia" transform="shrink-4" :style="{ color: 'white' }"/> {{event.city}}, {{event.country}}</div>
            <div class="text-xs text-gray-400"><font-awesome-icon icon="clock" transform="shrink-4" :style="{ color: 'white' }"/> {{event.date}} {{event.time}}</div>

            

        </div>



        <div >
            <button  @click="eventDelete($event,event.id,index)"> <font-awesome-icon icon="trash"/></button>
        
        </div>
        

        <!--<div class="relative h-32 w-32 ...">
            <button class="absolute bottom-0 w-20 right-0" @click="eventDelete($event,event.id,index)"> <font-awesome-icon icon="trash"/></button>
        
        </div>-->
        

       

       
        
        
    </div>

</div>

</div>
</template>

<script>
export default {
    name:"HomeView",
    data(){
        return{
            imgTemp:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Asset%204.jpg',
            dataevent:[],
        }
    },
    methods:{
        eventDelete(event,id,index){
            this.$api.events.eventDel(id)
            .then(response =>
            console.log(response,index,"del successfull"),
            this.dataevent.splice(index,1)
            )
        },
        checkdiv(event,id){
            console.log('verified div',id)
        }
    },
   created(){
       this.$api.events.eventAPI().then(response => {
      this.dataevent = response.data;
      console.log(this.dataevent)
    });


    }
}
</script>

<style>

</style>
