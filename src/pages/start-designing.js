import PageMetaTags from "@/containers/PageMetaTags"
import Link from "next/link"

function Design() {
      return(<>
            <PageMetaTags title="Start Designing" description={"Meta description here"} url="/start-designing"/>
            <div className="grid place-items-center w-full bg-slate-100 pt-6 pb-48">
            <div className="max-w-6xl w-full  md:px-12 px-4 text-left flex-col ">
                <h1 className="text-2xl leading-10 font-bold">Start shipping</h1>
                <p className="my-24 text-xl">
                    Start designing your SaaS in minutes with the boilerplate and documentation provided.
                </p>
                <h2 className="text-2xl leading-10 font-bold">Get the boilerplate</h2>
                <p className="my-24 text-xl">
                    Boilerplate with DaisyUI <Link href="https://github.com/nazimboudeffa/boilerplate-rapidosaas-nextjs-mongo-daisyui">https://github.com/nazimboudeffa/boilerplate-rapidosaas-nextjs-mongo-daisyui</Link>
                </p>
                <h2 className="text-2xl  leading-10 font-bold">Get the documentation</h2>
                <p className="my-24 text-xl">
                    <Link href="https://nazimboudeffa.gumroad.com/l/nextjs-boilerplate">https://nazimboudeffa.gumroad.com/l/nextjs-boilerplate</Link>
                </p>
            </div>
        </div>
        </>
      )

}

export default Design