import Link from "next/link"


function Footer() {
    return(
        <div>
        <div className="bg-slate-50 flex justify-center">
            <footer className="footer pt-10 pb-24 px-4 max-w-6xl  text-base-content">
        <div>
            <p className="font-bold text-2xl">Rapido SaaS<br/></p>
       </div> 
  <div>
    <span className="footer-title">Information</span> 
    <Link href="/about-us" className="link link-hover">About Us</Link> 
    <Link href="/faqs" className="link link-hover">FAQs</Link> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link> 
    <Link href="/tos" className="link link-hover">Terms of Service</Link> 
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
     <Link href="/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></Link>
    </div>
  </div>
</footer>
        </div>
        <div className="p-4 flex justify-center bg-secondary">
        <div className="max-w-5xl text-slate-50">
          <p>Copyright © 2024 - All right reserved</p>
        </div> 
        </div>
        </div>
    )
}

export default Footer