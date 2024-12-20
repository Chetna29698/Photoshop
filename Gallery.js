import './Gallery.css'
import baby1 from './img/baby1.jpg'
import baby2 from './img/baby2.jpg'
import baby3 from './img/baby3.jpg'
import baby4 from './img/baby4.jpg'
const Gallery = () => {
    return (
        <div class="grid-container">
            <div class="grid-item"><img src={baby1} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby2} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby3} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby4} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby1} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby2} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby3} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby4} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby1} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby2} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby3} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby4} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby1} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby2} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby3} height={350} width={350}></img></div>
            <div class="grid-item"><img src={baby4} height={350} width={350}></img></div>
        </div>
    )
}
export default Gallery