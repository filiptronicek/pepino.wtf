import Image from "next/image";
import { PrimaryButton } from '@fluentui/react';
//import Picker from 'emoji-picker-react';

import {useState} from 'react';

export default function AboutPage() {
    const [location, setLocation] = useState("Home");
    const [activity, setActivity] = useState("");
    const [emoji, setEmoji] = useState("");

    const [emojiPickerEnabled, setEmojiPickerEnabled] = useState(false);

    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (_event, emojiObject) => {
        setEmoji(emojiObject.emoji);
        setChosenEmoji(emojiObject);
    };

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
                            <PrimaryButton iconProps={{iconName: 'CompassNW'}} title="Emoji" onClick={() => setEmojiPickerEnabled(!emojiPickerEnabled)} ariaLabel="Emoji"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> </PrimaryButton>
                            {/*emojiPickerEnabled ? (<Picker onEmojiClick={onEmojiClick} />) : ""*/}
                        </label>
                        <br />
                        <label>
                            Where are you currently located?
                            <input className="ml-4 border-4" type="text" onChange={(evt) => setLocation(evt.target.value)} value={location} />
                        </label>
                        <br />
                        <PrimaryButton className="mt-7" text="Save" onClick={() => {sendActivity()}} allowDisabledFocus disabled={false} />
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

            <Image
                src="/receipt.svg"
                width={476}
                height={297.17}/>
        </div>
    );
}
