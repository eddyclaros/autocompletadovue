Vue.component("movie-card",{
    props:["image","title"],
    template:
            `
            <div class>
                <img width="100" v-bind:src="image" v-bind:alt="title" />
                <h3>{{ title }}</h3>
            </div>
            `
});
new Vue({
    el:'#app',
    data(){
        return{
            seleccion:'',
            mostrar:false,
            actual:'',
            nombres:['Eddy','Carlos','Juan','Pedro','Ramiro','Ricardo','Javier','Maria','Silvia','Sandra'],
            movies: [
                {
                  title: "Regreso al Futuro",
                  image:
                    "http://es.web.img3.acsta.net/pictures/14/04/03/13/45/034916.jpg",
                },
                {
                  title: "Matrix",
                  image:
                    "http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle",
                },
                {
                  title: "Interestellar",
                  image:
                    "http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
                },
            ],
        }
    },
    /* template:
    `
            <movie-card
                v-for="(movie, index) in movies"
                :key="index"
                :title="movie.title"
                :image="movie.image"
                >
            </movie-card>
            }`, */
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
