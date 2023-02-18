<script setup>
    import { computed } from 'vue'
    import Page from './Page.vue'

    const props = defineProps({
        data: {
            default: {}
        }
    })

    const tickets_by_page = computed(() => {
        let list = {1: []}
        let first_number = props.data['first_number']
        let last_number = props.data['last_number']
        let current_number = first_number
        let current_page = 1
        let count = 0
        while(current_number <= last_number){
            list[current_page].push(current_number)
            current_number++
            count++
            if(count % 20 == 0 && current_number < last_number){
                current_page++
                list[current_page] = []
            }
        }
        return(list)
    })


</script>
<template>
    <Page class="print:block" v-for="n in tickets_by_page" :numbers="n" :data="data"/>
    
</template>