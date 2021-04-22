<template>
    <div class="flex flex-wrap content-center bg-gray-900 text-white h-screen pt-2">
       <div class="grid justify-items-center grid-rows-10 md:grid-cols-3 gap-x-2 m-auto font-sans bg-gray-800 text-gray-900  w-auto mt-10 p-10">
        
           <div class="flex justify-center md:col-span-3 h-auto" >
               <div class="py-3 center mx-auto">
                    <div class="bg-gray-800 px-4 py-5 rounded-lg  text-center w-48">
                    <div class="mb-4">
                        <img class="w-8/12 mx-auto rounded-full object-cover object-center" src="https://i.imgur.com/dGo8DOk.jpg" alt="Avatar Upload" />
                    </div>
                    <label class="cursor-pointer mt-6">
                        <span class="mt-2 leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
                        <input type='file' class="hidden" />
                    </label>
                    </div>
                </div>
               
           </div>


           <div class="col-span-3 w-full">
           <input v-model="title" class=" mt-5 p-2  focus:outline-none focus:ring focus:border-gray-900" type="text" name="title" placeholder="Title">
        
            <select v-model="mod" class= " mt-5  p-2 md:mx-9 md:w-1/3 focus:outline-none focus:ring focus:border-gray-900 text-black">
                <option class="text-black" v-for="(mod,index) in modes" :value="mod" :key="index">
                    {{mod}}
                    
                </option>
                
            </select>
            <input v-model="dateTime" class= "mt-5 p-2 md:w-1/4 focus:outline-none focus:ring focus:border-gray-900 text-gray-900" type="datetime-local" id="birthdaytime" name="birthdaytime">


           </div>
           
         
           
           <div class="col-span-3 w-full">
    
           <input v-model ="community" class="mt-5  p-2   focus:outline-none focus:ring focus:border-gray-900" type="text" name="community" placeholder="Community">


 
           <input v-model="category" class="mt-5 mx-9 p-2 w-1/3 focus:outline-none focus:ring focus:border-gray-900" type="text" name="category" placeholder="Category">
   

 
           <input v-model="speaker" class="mt-5 p-2 w-1/4  focus:outline-none focus:ring focus:border-gray-900" type="text" name="speaker" placeholder="Speaker">


           </div>


            <div class="col-span-3 w-full">
           <input v-model="city" class=" mt-5 p-2  w-auto focus:outline-none focus:ring focus:border-gray-900" type="text" name="city" placeholder="City">
          

  
           <input v-model="country" class="mt-5 mx-9 w-1/3 p-2  focus:outline-none focus:ring focus:border-gray-900" type="text" name="country" placeholder="Country">

           <input v-model="place" class="mt-5 p-2 w-1/4 focus:outline-none focus:ring focus:border-gray-900 text-gray-900" type="text" name="place" placeholder="Venue">
           

          
            
           </div>


           <div class="flex justify-center md:col-span-3  w-6/12 mt-7">
           <button type="submit" class=" mt-5 w-8/12 md:w-6/12 bg-green-400 text-gray-100 p-3 rounded-md" @click="submitData">Submit</button>
           </div>

           
           
       </div>
    </div>
</template>

<script>
export default {
    name:"EventRegister",
    data(){
        return{

            title:'',
            mod:'Online Event',
            dateTime:'',
            community:'',
            category:'',
            speaker:'',
            city:'',
            country:'',
            place:'',
            modes:['Online Event','Physical Event']
            
        }
    },
    methods:{
        submitData(){
            console.log(this.title,this.country,this.dateTime.split("T")[0])
            this.$api.events.eventRegAPI({

                title:this.title,
                
                mode:this.getMode(),
                date: this.dateTime.split("T")[0],
                time:this.dateTime.split("T")[1],
                community : this.community,
                category: this.category,
                //speaker:this.speaker,
                city:this.city,
                country:this.country,
                place:this.place    
            
            }).then(response => {
                    
                    console.log(response,"Successfull submit");

                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was annnn error!", error);
                    })

        },
        getMode(){
            if(this.mod == 'Physical Event'){
                
                return 'phy'
            }else{
                
                return 'on'
            }


        }
        

    },
    
 
}
</script>
