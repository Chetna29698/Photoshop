import './Contact.css'
const Contact=()=>{
    return(
        <div id='contact'>
            <div id='inner-div'>
                <h1>Get in Touch</h1>
                <label for="name">Enter your Name:</label>
                <input type="text" id="name" name="name"></input>
                <label for="email">Enter your Email:</label>
                <input type="email" id="email" name="email"></input>
                <label for="phone">Enter your Phone:</label>
                <input type="number" id="phone" name="phone"></input>
                <label for="msg">Enter your Message here:</label>
                <textarea id="msg" name="msg" rows="5" cols="20"></textarea>
                <button id="btn_submit">Submit</button>
            </div>
        </div>
    )
}
export default Contact