Vue.component("movie-card",{
    props:["image","title"],
    template:
            `
            <div class>
                <img width="100" v-bind:src="image" v-bind:alt="title" />
                <h3>{{ title }}</h3>
            </div>
           
            `,
});
new Vue({
    el: "#app",
    data: {
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
      },
  });
  