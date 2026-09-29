import Producto from '../components/Producto'
function Productos() {
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Nuestros Productos</h1>
            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <Producto nombre="Notebook Lenovo" precio="599.990" />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Producto nombre="Mouse Logitech" precio="29.990" />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Producto nombre="Teclado Redragon" precio="49.990" />
                </div>
            </div>
        </div>
    )
}
export default Productos