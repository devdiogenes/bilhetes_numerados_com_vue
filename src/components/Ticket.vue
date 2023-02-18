<script setup>
    defineProps({
        data: {
            default: {}
        },
        number: {
            default: 1
        }
    })
</script>
<template>
    <div class="border-[1px] border-black h-[107px]">
        <div class="float-left border-r-[1px] h-full w-[33.333%] align-middle border-dashed p-1">
            <div class="text-xs font-light ml-2 mt-6">
                <p>Nome: </p>
                <br/>
                <p>Contato: </p>
            </div>
            <div class="w-full text-right h-[20px] text-red">
                <p>{{number}}</p>
            </div>
        </div>
        <div class="float-right inline-block p-1 text-center w-[66.667%]">
            <div class="mx-1 mt-2 min-h-[79px]">
                <h1 class="text-lg font-bold leading-tight">{{ data.title }}</h1>
                <div class="my-1">
                    <h2 class="leading-tight text-sm">{{ data.subtitle_1 }}</h2>
                    <h2 class="leading-tight text-sm">{{ data.subtitle_2 }}</h2>
                </div>
                <p class="text-xs font-light leading-tight">{{ data.note }}</p>
            </div>     
            <div class="w-full text-right h-[20px] mt-[-15px] text-red">
                <p>{{number}}</p>
            </div>
        </div>
    </div>
    
</template>