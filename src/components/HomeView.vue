<template>

<div class="bg-gray-900 overflow-auto pt-2">

<div class="container  m-auto font-sans bg-gray-800 text-green-400 md:w-6/12 p-2 mt-40 h-full md:mt-16">
    <div class=" flex mx-auto bg-gray-900 rounded-lg w-4/5   p-5 mb-2" v-for="(event, index) in dataevent" :key="index">
        <div class="mr-2">
            <img class="w-16 rounded-full" src="@/assets/w_img.png">

        </div>
       
        <div class="flex-1" @click="checkdiv($event,event.id)" >

            
            
            <div class="md:text-lg text-sm text-gray-300"> {{event.title}} <span v-if="event.mode === 'on' " class="text-xs text-gray-400">(Online Event)</span> <span v-else class="text-xs text-gray-400">(Physical Event)</span></div>
            
            
            <div class="text-sm">{{event.community}}</div>
            <div class="text-xs text-gray-400">{{event.place}}</div>
            <div class="text-xs text-gray-400">{{event.city}}, {{event.country}}</div>
            <div class="text-xs text-gray-400">{{event.date}} {{event.time}}</div>

            

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
