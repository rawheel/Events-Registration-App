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
                        <span class="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
                        <input type='file' class="hidden" :multiple="multiple" :accept="accept" />
                    </label>
                    </div>
                </div>
               
           </div>
           <div>
           <input  class="mt-5 p-2 w-auto  focus:outline-none focus:ring focus:border-gray-900" type="text" name="name" placeholder="Title">
           </div>

           <div>
           <input  class="mt-5 p-2 w-auto  focus:outline-none focus:ring focus:border-gray-900" type="text" name="community" placeholder="Community">
           </div>

           <div>
               <input class= "mt-5 p-2 w-auto focus:outline-none focus:ring focus:border-gray-900 text-gray-900" type="datetime-local" id="birthdaytime" name="birthdaytime">
           </div>




            <div>
           <input  class=" mt-5 p-2  w-auto focus:outline-none focus:ring focus:border-gray-900" type="text" name="city" placeholder="City">
           </div>
 
           <div>
           <input  class="mt-5 p-2 w-auto focus:outline-none focus:ring focus:border-gray-900" type="text" name="country" placeholder="Country">
           </div>

           <div>
                <select class= " mt-5 p-3 w-auto  focus:outline-none focus:ring focus:border-gray-900 text-gray-900">
                    <option>
                        Online Event
                    </option>
                    <option>
                        Physical Event
                    </option>
                </select>
           </div>

           <div class="flex justify-center md:col-span-3  w-6/12 mt-7">
           <button type="submit" class=" mt-5 w-8/12 md:w-6/12 bg-green-400 text-gray-100 p-3 rounded-md">Submit</button>
           </div>

           
           
       </div>
    </div>
</template>

<script>
export default {
 
}
</script>
