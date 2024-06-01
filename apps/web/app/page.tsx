import styles from "./page.module.css";
// import Footer from "../components/Footer";
import { Footer } from "@repo/ui/footer";
export default function Page(): JSX.Element {
  return (

    <>
      <main className={styles.main}>
        Hello
      </main>
      <Footer/>
    </>
    
  );
}
