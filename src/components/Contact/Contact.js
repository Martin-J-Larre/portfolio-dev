import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = await response.json();;
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ success: true, message: "Message sent successfully" });
        } else {
            setStatus({
                success: false,
                message: "Something went wrong, please try again later"});
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                        <h2>Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6}>
                                    <input
                                        required="required"
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "firstName",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6}>
                                    <input
                                        required="required"
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "lastName",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6}>
                                    <input
                                        required="required"
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6}>
                                    <input
                                        required="required"
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        required="required"
                                        row="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "message",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <button type="submit">
                                        <span>{buttonText}</span>
                                </button>
                                </Col>
                                <Col>
                                {status.message && (
                                        <p
                                            className={
                                                status.success === false
                                                    ? "danger"
                                                    : "success"
                                            }
                                        >
                                            {status.message}
                                        </p>
                                    
                                )}
                                </Col>
                            </Row>
                        </form>
                </Row>
            </Container>
        </section>
    );
};
