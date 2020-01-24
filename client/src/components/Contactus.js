import React, { Component } from "react";
import axios from "axios"
import Navbar from "./Navbar";

class Contactus extends Component {
    constructor() {
        super();
    }


    contactus = async event => {
        event.preventDefault()
        let name = event.target["name"].value
        let email = event.target["email"].value
        let message = event.target["message"].value
        let status = "unreaded"

        let contact = { name, email, message, status }

        axios.post("http://localhost:9000/contactus", contact)
            .then(res => {
                console.log(res.data)
            })
        window.location.reload()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.contactus}>
                    <input name="name" type="text" placeholder="Your Name" />
                    <br />
                    <input name="email" type="email" placeholder="Your Email" />
                    <br />
                    <textarea name="message"></textarea>
                    <br />
                    <input type="submit" value="Send Message" />

                </form>
            </div>
        );
    }
}

export default Contactus;
