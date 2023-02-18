<script setup>
    import { ref, computed, onMounted } from 'vue'

    const props = defineProps({
        title: {
            default: ''
        }, 
        name: {
            default: ''
        },
        type: {
            default: 'text'
        },
        required: {
            default: false
        }, 
        default: {
            default: ""
        },
        maxlength: {
            default: ""
        }
    })

    const value = ref(props.default)

    const width = computed(() => {
        if(props.type == "text"){
            return "w-full "
        } else {
            return "w-28 "
        }
    })

    const emit = defineEmits(['input'])
    
</script>
<template>
    <div class="flex flex-col items-start my-2">
        <span v-if="type != 'submit'" >{{ title }}:</span>
        <input v-if="type != 'submit'" @input="$emit('input', {name, value})" v-model="value" :type="type" :maxlength="maxlength" :class="width + 'outline-red border-2 border-silver h-8'"/>
        <div v-else class="flex w-full justify-center">
            <input value="Gerar" type="submit" class="text-white text-sm cursor-pointer px-8 py-1 mb-2 mt-5 rounded-full bg-red hover:font-bold hover:px-10 transition-all cursor-pointer" />
        </div>
    </div>
</template>