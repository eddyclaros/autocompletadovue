new Vue({
    el:'#app',
    data(){
        return{
            seleccion:'',
            mostrar:false,
            actual:'',
            nombres:['Eddy','Carlos','Juan','Pedro','Ramiro','Ricardo','Javier','Maria','Silvia','Sandra'],
        }
    },
    /*  */
    computed:{
        resultados(){
            let me=this
            //me.seleccion=''
            me.actual=''
            if(me.seleccion!='' /* && me.seleccion.length>2 */){
                return me.nombres.filter(elem=>{
                    return elem.toLowerCase().includes(me.seleccion.toLowerCase());
                })
            }
        },
    },
    methods:{
        esActivo(index){
            let me=this
            //console.log('index',index,'actual',me.actual)
            //if()
            return index===me.actual;
        },
        up(){
            let me=this
            if(me.actual>0){
                me.actual--
                //console.log(me.actual)
            }
        },
        down(){
            let me=this
            if(me.actual<me.resultados.length-1){
                me.actual++
                //console.log(me.actual)
            }
        },
        enter(){
            //console.log('entra')
            let me=this
            //console.log(resultados[me.actual])
            console.log('enter-seleccionado:',me.resultados[me.actual])
            me.seleccion=me.resultados[me.actual]
            me.mostrar=false;
        },
        click(indice){
            let me=this
            console.log('click-seleccionado',me.resultados[indice])
            me.seleccion=me.resultados[indice]
            me.mostrar=false;
        },
        change(){
            let me=this
            if(!me.mostrar){
                me.mostrar=true
            }
        },
    },
    mounted(){
        console.log("montado")
    }
})
