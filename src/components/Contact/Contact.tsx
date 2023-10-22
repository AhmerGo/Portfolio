import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contato">
      <header>
        <h2>Please get in touch with me</h2>
        <p>If you'd like to inquire, do not hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="gondal.ahmer@yahoo.com">gondal.ahmer@yahoo.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="Phone: (325) 320-6780">(325) 320-6780</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
