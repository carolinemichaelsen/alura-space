import banner from './banner.png'
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from './HomePage.module.scss'
import Footer from '../../components/Footer';
import Galeria from '../../components/Galeria';

export default function HomePage(){
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                <Menu />
                <div className={styles.principal__imagem}>
                    <h1>A galeria mais completa do espaço</h1>
                    <img src={banner} alt="Imagem da Terra vista do espaço" />
                </div>
                </section>
            <div className={styles.galeria}>
                <Galeria />
            </div>
            < Footer />
            
            </main>
            
        </>
        )
}