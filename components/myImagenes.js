export default {
    name: "my-imagenes",
    template: /*html*/`
    <div class="container">
            <img v-bind="imagenes.img[0].src">
            hola
        </div>
    `,
    data() {
        return {
            imagenes:{
                    img:[{
                        src:"imgs/BMW1.png"
                    }]
                }
            
        }
    },
}