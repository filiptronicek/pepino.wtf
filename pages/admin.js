import Image from "next/image";

export default function AboutPage() {

    return (
        <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            <div>
                <section className="mb-6">
                    <h2 className="mb-3 text-xl font-bold">Update your status</h2>
                </section>

                <section>
                    <form>
                        <label>
                            What are you doing?
                            <input className="ml-4 border-4" type="text"/>
                        </label>
                        <br />
                        <label>
                            How would you express that with an emoji?
                            <input className="ml-4 border-4 w-8" type="text"/>
                        </label>
                        <br />
                        <label>
                            Where are you currently located?
                            <input className="ml-4 border-4" type="text" value="Home" />
                        </label>
                    </form>
                </section>
            </div>

            <Image alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer" src="/critter.svg"
                width={476}
                height={297.17}/>
        </div>
    );
}
