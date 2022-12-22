import router from "@/router";
import { defineComponent, ref } from "vue";

type Credentials = {
    username: string;
    password: string
}

export default defineComponent({
   
        
    setup(){
        
        const username = ref('')
        const password = ref('')
        let credentialsError = ref(false)
    
        
   

        async function handleSubmit(){
            if(username.value.length > 0 && password.value.length > 0) {
            credentialsError.value = false
            const credentials: Credentials = {
                username: username.value,
                password: password.value
            }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            };
            const response = await fetch('https://glorious-midi-hyacinth.glitch.me/api/login', requestOptions)
            if(response.ok) {
                const data = await response.json();
                if(data.success) {
                   
                    localStorage.setItem('username', username.value)
                    localStorage.setItem('accountKey', data.key[0].accountId)
                    router.push('/booking')
                } else {
                   
                }
            } 
        } else {
           credentialsError.value = true
        }
            
            
        
    }

    
        return {
            username,
            password,
            handleSubmit
            
        }
    }
   
})