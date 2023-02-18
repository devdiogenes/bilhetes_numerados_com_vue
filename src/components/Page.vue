<script setup>
    import Ticket from './Ticket.vue'

    defineProps({
        numbers: {
            default: []
        }, 
        data: {
            default: {}
        }
    })
</script>
<template>
    <div class="hidden break-after-page w-[210mm] px-[.5cm] pt-[.5cm]">
        <div class="grid grid-cols-2 w-[200mm]">
            <Ticket v-for="number in numbers" :number="number" :data="data"/>
        </div>
    </div>
    
</template>