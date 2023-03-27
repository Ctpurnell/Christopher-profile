
export default function Contact() {
   return (

<div class="container text-center bg-secondary">
  <form>
    <div className="form-group col-md-12 p-3">
      <label className="nameLabel row p-2 " htmlFor="name">Name:</label>
      <input type="text" className="form-control border border-dark" id="name" required placeholder="Enter your name" />
    </div>

    <div className="form-group col-md-12 p-3">
      <label className="nameLabel row p-2" htmlFor="email">Email:</label>
      <input type="email" className="form-control border border-dark" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email" />
    </div>

    <div className="form-group col-md-12 p-3">
      <label className="nameLabel row p-2" htmlFor="message">Message:</label>
      <textarea className="form-control border border-dark" id="message" rows={5} placeholder="Enter your message" defaultValue={""} />
    </div>
    <button type="submit" className="btn btn-success m-4">Submit</button>
  </form>
 </div>

    );
}
