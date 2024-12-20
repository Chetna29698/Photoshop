import './About.css'
import img from './img/camera.jpg'

const History = () => {
    return (
        <div id='about'>
            <h1>About Us</h1>
            <p>Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just getting started, styling guides to add some flair, and deeper dives for fine-tuning Font Awesome to suit your needs.Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just getting started, styling guides to add some flair, and deeper dives for fine-tuning Font Awesome to suit your needs.</p>
            <div id='box'>
                <div id='box1'>
                    <i class="fa-regular fa-eye"></i>
                    <h2>Photography</h2>
                    <small class='para'>Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just getting styling guides to add some flair.</small>
                </div>
                <div id='box2'>
                    <i class="fa-regular fa-folder"></i>
                    <h2>Photography</h2>
                    <small class='para'>Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just getting styling guides to add some flair.</small>
                </div>
                <div id='box3'>
                    <i class="fa-solid fa-camera"></i>
                    <h2>Photography</h2>
                    <small class='para'>Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just getting styling guides to add some flair.</small>
                </div>
            </div>

            <div id='section'>
                <div id='section1'>
                    <h3>We know our product</h3>
                    <h6>Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just getting started, styling guides to add some flair, and deeper dives for fine-tuning Font Awesome to suit your needs.Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just getting started, styling guides to add some flair, and deeper dives for fine-tuning Font Awesome to suit your needs.</h6>
                    <button>View More </button>
                </div>
                <div id='section2'>
                    <img src={img} height={450} width={760}></img>
                </div>
            </div>
        </div>
    )
}
export default History