import { error } from "console";
import Link from "next/link";

export default async function Services() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  })
  throw new Error ('Services Page Not Yet Implemented')
  return (
    <div className="container">
      <main className="content">
        <h1>Services</h1>
        <p>
          Welcome to the About page! Here, we share our journey, vision, and mission. 
          We are committed to delivering the best services to our customers and building 
          lasting relationships.
        </p>
        <p>
          Our team of professionals works tirelessly to meet the needs of clients 
          and ensures that we maintain a high standard in everything we do.
        </p>
      </main>
      <footer className="footer">
       
       <div className="footer-section">
         <h2>MyWebsite</h2>
         <i><p>Name: Muhammad Laraib    Roll No: 00049694</p>
         </i>
       </div>


     <div className="footer-bottom"> 
       <p>Days/Time:Wednesday-07:00 PM - 10:00 PM</p>
     </div>
   </footer>
    </div>
  );
}

