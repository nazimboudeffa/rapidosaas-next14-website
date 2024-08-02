import Link from "next/link"


function CTA2(){
    return(
        <>
             <div className="grid place-items-center bg-gradient-to-t to-blue-500 from-purple-700 w-full ">
            <div className="max-w-6xl py-24 px-4 content-center text-center justify-center">
                <h2 className="text-3xl text-slate-100 text-center font-bold">Start shipping your SaaS now!</h2>
                <Link href="/start-designing"><button className="btn mt-12 btn-primary inline-block px-12 normal-case">Get Started</button></Link>
            </div>
        </div>
        </>
    )
}

export default CTA2