import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>About Us</h3>
          <ul>
            <li>Why Motion</li>
            <li>About NV Sir</li>
            <li>JEE/NEET E-Brochure</li>
            <li>Foundation E-Brochure</li>
            <li>Dhruv Campus E-Brochure</li>
            <li>Motion Plus Magazine</li>
            <li>Motion Arjun Program</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>About Exam</h3>
          <ul>
            <li>JEE Main</li>
            <li>JEE Advanced</li>
            <li>NEET</li>
            <li>NTSE</li>
            <li>Answer Key & Solutions</li>
            <li>Registration Form</li>
            <li>Admission Open</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Contact Us</h3>
          <ul>
            <li>Contact Us</li>
            <li>Enquiry</li>
            <li>Be A Partner</li>
            <li>Associate Consultant</li>
            <li>Feedback & Grievance</li>
            <li>Careers</li>
            <li>Student Parent Login</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Useful Links</h3>
          <ul>
            <li>Study Center</li>
            <li>Fee Payment</li>
            <li>MOST</li>
            <li>Motion Blog</li>
            <li>I-MMP</li>
            <li>Amrit Course</li>
            <li>Coaching Guidelines</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Corporate Office</h3>
          <p>394, Rajeev Gandhi Nagar Kota, Rajasthan 324005</p>
          <p>18002121799</p>
          <p>info@motion.ac.in</p>
          <div className={styles.socials}>
            <a href="#"><i className="fab fa-x"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 All right reserved by Motion Education</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Refund Rules</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
