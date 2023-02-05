<template>
	<div class="h-full m-3" style="color: #18df44">
		<RouterLink to="/login">
			<FontAwesomeIcon size="lg" :icon="icon"></FontAwesomeIcon>
		</RouterLink>
	</div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useAuthStore } from '@/stores/auth';

export default{
	components: {
		FontAwesomeIcon
	},
	computed:{
		icon(){
			if(useAuthStore().isLogged){
				return 'fa-solid fa-user'
			}else{
				return 'fa-regular fa-user'
			}
		}
	}
}
</script>