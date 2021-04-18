<template>
    <div class="flex flex-wrap content-center bg-gray-900 text-white h-screen pt-2 ">
       <div class="grid justify-items-center grid-rows-10 md:grid-cols-3 gap-x-2 m-auto font-sans bg-gray-800 text-gray-900 h-auto w-auto p-10">

           <div class="flex justify-center  md:col-span-3 h-auto" >
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


           <div class="col-span-2 w-full">
           <input v-model="tagline" class=" mt-5 p-2 w-full focus:outline-none focus:ring focus:border-gray-900" type="text" name="tagline" placeholder="Tagline">
           </div>
           <div>
                <select v-model="mode" class= " mt-5 p-3 mx-6 w-full focus:outline-none focus:ring focus:border-gray-900 text-gray-900">
                    <option>
                        Online Event
                    </option>
                    <option>
                        Physical Event
                    </option>
                </select>
           </div>
           
         
           
           <div class="col-span-3 w-full">
    
           <input v-model ="title" class="mt-5  p-2   focus:outline-none focus:ring focus:border-gray-900" type="text" name="name" placeholder="Title">


 
           <input v-model="category" class="mt-5 mx-14 p-2 w-1/3 focus:outline-none focus:ring focus:border-gray-900" type="text" name="category" placeholder="Category">
   

 
           <input v-model="speaker" class="mt-5 p-2 w-1/4  focus:outline-none focus:ring focus:border-gray-900" type="text" name="speaker" placeholder="Speaker">


           </div>


            <div class="col-span-3 w-full">
           <input v-model="city" class=" mt-5 p-2  w-auto focus:outline-none focus:ring focus:border-gray-900" type="text" name="city" placeholder="City">
          

  
           <input v-model="country" class="mt-5 mx-14 w-1/3 p-2  focus:outline-none focus:ring focus:border-gray-900" type="text" name="country" placeholder="Country">
           

          
            <input v-model="dateTime" class= "mt-5 p-2 w-1/4 focus:outline-none focus:ring focus:border-gray-900 text-gray-900" type="datetime-local" id="birthdaytime" name="birthdaytime">
           </div>
 
           
            <div class="col-span-3 w-full">
                <input v-model="description" class=" mt-5 p-2 w-full focus:outline-none focus:ring focus:border-gray-900" type="text" name="description" placeholder="Description">
                <input v-model="link" class=" mt-5 p-2 w-full focus:outline-none focus:ring focus:border-gray-900" type="text" name="link" placeholder="URL">


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

            tagline:'',
            mode:'',
            title:'',
            category:'',
            speaker:'',
            city:'',
            country:'',
            dateTime:'',
            description:'',
            link:''




        }
    },
    methods:{
        submitData(){
            console.log(this.tagline,this.country,this.dateTime.split("T")[0])
            this.$api.events.eventRegAPI({

            title : this.title,
            category: this.category,
            description:this.description,
            date_created: this.dateTime.split("T")[0],
            tagline:this.tagline,
            mode:this.mode,
            external_link:this.link,
            speaker:this.speaker,       
            starting_time:this.dateTime.split("T")[1],
            }).then(response => {
                    
                    console.log(response,"Successfull submit");

                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was annnn error!", error);
                    })

        }

    }
 
}
</script>
