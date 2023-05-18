export default function Footer() {
  return (
    <>
      
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 p-5  border-top bg-dark ">

    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none text-white">
        Global Chef Hub
      </a>
      <p className="text-muted"><i className="fa-solid fa-location-dot text-white"></i> 153 Williamson Plaza, Maggieberg</p>
      <p className="text-muted"><i className="fa-solid fa-phone text-white"></i> +880 8763482364</p>  
      <p className="text-muted">&copy; 2022 Global Chef Hub</p>
    </div>
    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5 className="text-white" >Ingridients</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Details</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Recipe</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5 className="text-white" >Food</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Chef</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5 className="text-white" >Chefs</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ingridients</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>
  
  </footer>
 

    </>
  );
}
