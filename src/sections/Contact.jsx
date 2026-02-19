import React, {useRef, useState} from 'react'
import * as emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    // service_ts6i57q
    // service_v2cu6jj
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_v2cu6jj',
                'template_8nw1ypb',
                {
                    from_name: form.name,
                    to_name: 'Ash',
                    from_email: form.email,
                    to_email: 'ict.ashraf1986@outlook.com',
                    message: form.message,
                },
                'QeZlx_8wwjHBHkWN7'
                )
            setLoading(false);
            alert(`Email sent to ${form.email}`);
            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert(error.message);
        }
    }
    return (
        <section className="c-space my-20" id='contact'>
            <div className="relative min-h-screen flex flex-col items-center justify-center">
                <img src="/assets/terminal.png" alt="terminal background"
                     className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="text-lg text-white-600">
                        Build a new web or fix ur existing
                    </p>

                    <form action="" ref={formRef} onSubmit={handleSubmit}
                          className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3" >
                            <span className="field-label text-white-600">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="field-input"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label text-white-600">Email</span>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="email"
                                required
                                className="field-input"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label text-white-600">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Hi, I wanna give u a job..."
                                rows="5"
                                required
                                className="field-input"
                            />
                        </label>

                        <button type="submit" className=" field-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
