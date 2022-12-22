import { defineStore } from "pinia"
import { ref } from "vue";

export const useBookingStore = defineStore('storeId',  {
    // från action
    // beskriv vad du hämtar som
    state: () => ({
      rawItems: [] as Object[],
    
     
    }),
    getters: {
      displayValue: (state) => {
          return state;
      }
      
  },
     
   
  // från calender.ts submit() där en action finns som heter "additem"
  // skicka sen upp till state
    actions: {
      addItem(credentials: Object){
        console.log(credentials)
        this.rawItems.push(credentials)
       
        
      }
  
    }
    
  
   
  })

// export const useBookingStore = defineStore('bookingstore', () => {
//   const bananas = ref(0);



//   function addItem() {
//      console.log('hej')
//   }
  
//   return { bananas, addItem }

// })