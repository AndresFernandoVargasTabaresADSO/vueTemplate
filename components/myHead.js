export default {
    name: "my-head",
    template: /*html*/`
    <div class="container">
            <nav>
                <img :src="imagenes.logo">
                <a href="#" class="btn">Test Drive</a>
            </nav>
        </div>
    `,
    props:{
        imagenes: Object
    }
    
}