
import "./page.css";

import Image from 'next/image';
import Header from "./header";
import ConsoleText from "./console-text";
import Carousel from "./carousel";
import ProjectItem from './project-item';
import Form from './form';
// icons
import MyPicture from '../asset/icons/my-picture.jpg';
import Github from '../asset/icons/github.svg';
import Linkedin from '../asset/icons/linkedin.svg';
import Resume from '../asset/icons/resume.svg';

export default function Home() {
    return (
        <div className="bg-white">
            <section>
                <Header title="CONTACT ME" hasGradient />
                <p className="text-base txt-gradient font-normal">
                    If you&apos;d like get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below.
                </p>
                <Form />
            </section>
        </div>
    )
}