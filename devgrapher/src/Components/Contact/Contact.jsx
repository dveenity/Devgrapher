import { Suspense, lazy } from "react";
const LazyMailAnim = lazy(() => import("../Animations/MailAnim.jsx"));

import ContactForm from "./ContactForm";
import LoadingSpin from "../Animations/LoadingSpin.jsx";

const Contact = () => {
  return (
    <div className="contact">
      <Suspense fallback={<LoadingSpin />}></Suspense>
      <LazyMailAnim />
      <ContactForm />
    </div>
  );
};

export default Contact;
