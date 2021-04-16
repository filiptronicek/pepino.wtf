import Image from "next/image";
import { PrimaryButton } from '@fluentui/react';

import {useState} from 'react';

export default function AboutPage() {

    const [location, setLocation] = useState("Home");
    const [activity, setActivity] = useState("");
    const [emoji, setEmoji] = useState("");


    return (
        <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            <div>
                <section className="mb-6">
                    <h2 className="mb-3 text-xl font-bold">Update your status</h2>
                </section>

                <section className="space-y-7">
                    <form>
                        <label>
                            What are you doing?
                            <input onChange={(evt) => setActivity(evt.target.value)} value={activity} className="ml-4 border-4" type="text"/>
                        </label>
                        <br />
                        <label>
                            How would you express that with an emoji?
                            <input onChange={(evt) => setEmoji(evt.target.value)} value={emoji} className="ml-4 border-4 w-8" type="text"/>
                        </label>
                        <br />
                        <label>
                            Where are you currently located?
                            <input className="ml-4 border-4" type="text" onChange={(evt) => setLocation(evt.target.value)} value={location} />
                        </label>
                        <PrimaryButton className="mt-7" text="Save" allowDisabledFocus disabled={false} />
                        <br />
                        {JSON.stringify(
                            {
                                activity,
                                location,
                                emoji,
                                time: Date.now()
                            }
                        , null, 2)}
                    </form>
                </section>
            </div>

            <Image alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer" src="/critter.svg"
                width={476}
                height={297.17}/>
        </div>
    );
}
