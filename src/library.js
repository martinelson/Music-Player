import { v4 as uuidv4} from "uuid";
//music library object
export default function Library() {
    return [
        {
            name: "Election Night",
            cover: "./images/ElectionNight.PNG",
            audio: "./audio/Q1.m4a",
            color: ["#fc5185", "#364f6b"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Ponzi Scheme",
            cover: "./images/PonziScheme.PNG",
            audio: "./audio/Q2.m4a",
            color: ["#fefdca","#212121"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Inorganic Hand Sanitizer",
            cover: "./images/InorganicSanitizer.PNG",
            audio: "./audio/Q3.m4a",
            color: ["#ffd460","#f07b3f"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Underwater ADHD",
            cover: "./images/UnderwaterADHD.PNG",
            audio: "./audio/Q4.m4a",
            color: ["#f6f6f6","#3e4149"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Lift off and the clock has started",
            cover: "./images/Liftoff.PNG",
            audio: "./audio/Q5.m4a",
            color: ["#fcbf1e","#9a0f98"],
            id: uuidv4(),
            active: false
        }
    ];
}