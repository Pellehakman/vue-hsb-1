<script src="./LoginView.ts" lang="ts">

</script>

<template>
   <form action="">
            <div class="input-container">
                <label for="username">Username</label>
                <input type="text" name="username" v-model="username">
            </div>
            <div class="input-container">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password">
            </div>
            
            <input type="button" value="Login" @click="handleSubmit" />
        </form>
 
</template>
