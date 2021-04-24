import Image from "next/image";
import { PrimaryButton } from '@fluentui/react';

import {useState} from 'react';

export default function AboutPage() {
    const [location, setLocation] = useState("Home");
    const [activity, setActivity] = useState("");
    const [emoji, setEmoji] = useState("");
    
    const sendActivity = () => {
        fetch(encodeURI(`/api/update?title=${encodeURI(activity)}&emoji=${encodeURI(emoji)}&location=${encodeURI(location)}`)).then(res => res.json()).then(res => {
            console.log(res);
        });
    };
  
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
                            <input onChange={(evt) => setEmoji(evt.target.value)} value={emoji || ""} className="ml-4 border-4 w-8" type="text"/>
                        </label>
                        <br />
                        <label>
                            Where are you currently located?
                            <input className="ml-4 border-4" type="text" onChange={(evt) => setLocation(evt.target.value)} value={location} />
                        </label>
                        <br />
                        <PrimaryButton className="mt-7" text="Save" onClick={() => {sendActivity()}} allowDisabledFocus disabled={false} />
                    </form>
                </section>
            </div>

            <Image
                src="/receipt.svg"
                width={476}
                height={297.17}/>
        </div>
    );
}
