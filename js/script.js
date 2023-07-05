const { createApp } = Vue ;

createApp({
    data(){
        return{
            emailList : [ ] ,
        }
    },
    created(){
        for (let i = 0; i < 10; i++){
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
































