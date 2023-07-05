const { createApp } = Vue ;

createApp({
    data(){
        return{
            emailList : [ ] ,
        }
    },
    created(){
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const result=response.data;
                this.emailList.push(
                   
                    result.response

                )
            })
            
        }
    }
}).mount('#app');


// axios
//     .get('https:{//flynn.boolean.careers/exercises/api/random/mail')
//     .then(function(response){
//         console.log('RESPONSE' , response );
//         const result=response.data;
//         console.log('RESULT' , result );

// });

// created(){
//     for (let index = 0; index < array.length; index++) {
//         axios
//         .get('https:{//flynn.boolean.careers/exercises/api/random/mail')
//         .then((response) => {
//             this.arrayAxios.push({
//                 text : response.data.response,
//                 done: false ,

//             })
//         })