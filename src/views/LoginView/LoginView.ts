import { storeToRefs } from "pinia";
import { defineComponent, ref } from "vue";
import { useBookingStore } from '../../business/stores/bookingStore'


export default defineComponent({
   
        
    setup(){
        const bookingStore = useBookingStore();
        const { bananas } = storeToRefs(bookingStore);
        
        const username = ref('')
        const password = ref('')
        

        async function handleSubmit(){
            
            const credentials = {
                username: username.value,
                password: password.value
            }
            bookingStore.addItem(credentials)
            
     
        
    }

    
        return {
            username,
            password,
            handleSubmit,
            bananas
            
        }
    }
   
})