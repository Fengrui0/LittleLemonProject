import Hero from './Hero';
import Highlight from './Highlight';
import Testimonials from './Testimonials';
import About from './About';
function Main(){
    return(
        <main className="container">
            <Hero />
            <Highlight />
            <Testimonials />
            <About />
        </main>
    )
}
export default Main;