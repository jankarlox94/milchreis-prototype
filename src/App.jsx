import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Fondo from "./assets/Fondo.png";
import Fondo2 from "./assets/fondo-non-invasive.png";

function App() {
    const bgImagen = {
        backgroundImage: `url(${Fondo2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        position: "relative",
    };

    return (
        <div
            style={bgImagen}
            className="flex justify-center overflow-hidden min-h-screen"
        >
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;
