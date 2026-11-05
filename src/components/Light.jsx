import { useState } from "react";


function Bulb() {
    const [isOn, setisOn] = useState(false);
    return (
        <>
            <section className={`  relative transition-colors duration-500 ${isOn? "text-stone-700":"text-slate-100"}  flex items-center justify-center gap-4 px-6 py-3  w-full`}>
                <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 bg-[url('/bg_off_mobile.png')] md:bg-[url('/bg_off_desktop.png')] ${isOn ? "opacity-0" : "opacity-100"}`}/>
                    <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 bg-[url('/bg_on_mobile_1.png')] md:bg-[url('/bg_on_desktop_1.png')] ${isOn ? "opacity-100" : "opacity-0"}`}/>
                    <div className="relative z-10 flex min-h-screen flex-col">

                        <div className="flex flex-row items-center justify-between text=2xl mb-5">
                            <h2>Lumen</h2>
                            <p>MR BLUE GOT YOU</p>
                        </div>
                        <section className="flex flex-row px-2 gap-10 text-2xl">
                            <div>
                                <h3> The Bulb is {isOn ? "on" : "off"}</h3>
                                <h1>Let there be light.</h1>
                                <p>it is dark in here. Flip the switch to turn the bilb on.</p>
                                <div className="flex felx-row gap-2 mt-4"> <button onClick={() => setisOn(!isOn)}
                                    className={`h-14 w-28 rounded-full p-1 transition-colors ${isOn ? "bg-amber-400" : "bg-slate-600"}`}>
                                    <span className={`block h-12 w-12 rounded-full bg-white transform ${isOn?"translate-x-14":""}`}></span>
                                </button> <p className="py-3"> {isOn ? "Tap to turn off" : "Tap to turn on"}</p></div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <img src="/bulb_glow.png" alt=""
                                    className={`absolute left-1/2 top-1/2 w-[40rem] max-w-none -translate-x-1/2 -translate-y-1/2 pointer-event-non transition-opacity duration-500 ${isOn ? "opacity-100" : "opacity-0"}`} />

                                <img src={isOn ? "/bulb_on.png" : "/bulb_off_1.png"} alt="light bulb"  className="h-[200] w-[200]" />
                            </div>
                        </section>
                    </div>
            </section>
        </>
    );
}
export default Bulb;