import { storeToRefs } from "pinia";
import { defineComponent, ref } from "vue";
import { useBookingStore } from '../../business/stores/bookingStore'


export default defineComponent({
   
        
    setup(){
        const bookingStore = useBookingStore();
        const { rawItems } = storeToRefs(bookingStore);
        
        const username = ref('')
        const password = ref('')
        

         function handleSubmit(){
            if( username.value.length < 0){
                return
            } else{
                const credentials = {
                    username: username.value,
                    password: password.value
                }
                bookingStore.addItem(credentials)
            }
           
              
            
          
               
               
     
        
    }

    
        return {
            username,
            password,
            handleSubmit,
            rawItems
            
        }
    }
   
})