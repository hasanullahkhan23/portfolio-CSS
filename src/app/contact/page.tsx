export default function contact() {
    return (
        <div >
            <div className="cdiv2">
                <div>
                    <h1 id="ch1">Contact</h1>
                </div>
                <div className="cdiv3">
                    <ul>
                        <label>Enter your first name :</label> <br />
                        <input type="text" /><br /><br />

                        <label>Enter your last name :</label> <br />
                        <input type="text" /><br /><br />

                        <label>Enter your email:</label> <br />
                        <input type="text" /><br /><br />

                        <label>Type your message:</label> <br />
                        <input type="text" /><br /><br />

                        <label>Date:</label> <br />
                        <input type="date" /><br /><br />
                        <button id="cbutton">Submit</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}