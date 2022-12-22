import { storeToRefs } from "pinia";
import { defineComponent, ref } from "vue";
import { useBookingStore } from '../../business/stores/bookingStore'
import { nanoid } from 'nanoid'

type Credentials = {
    username: string,
    password: string,
    id: string
}
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
                const credentials: Credentials = {
                    username: username.value,
                    password: password.value,
                    id: nanoid()
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