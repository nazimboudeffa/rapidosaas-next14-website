import PageMetaTags from "@/containers/PageMetaTags"

function Design() {
      return(<>
            <PageMetaTags title="Start Designing" description={"Meta description here"} url="/start-designing"/>
            <div className="grid place-items-center w-full bg-slate-100 pt-6 pb-48">
            <div className="max-w-6xl w-full  md:px-12 px-4 text-left flex-col ">
                <h1 className="text-2xl  leading-10 font-bold">Start shipping</h1>
                <p className="my-24 text-xl">
                    https://github.com/nazimboudeffa/boilerplate-rapidosaas-nextjs-mongo-daisyui
                </p>
                <p className="my-24 text-xl">
                    https://github.com/nazimboudeffa/boilerplate-rapidosass-nextjs-mongo-shadcnui
                </p>
            </div>
        </div>
        </>
      )

}

export default Design