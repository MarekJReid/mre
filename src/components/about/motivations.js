import Link from 'next/link';
import Image from 'next/image';

function Motivations() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    return (
        <div id="about" className="about-area md:pt-[150px] pt-[50px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div
                    className="grid lg:grid-cols-2 flex-col-reverse max-md:flex max-md:flex-col-reverse"
                    style={{ flexDirection: 'row-reverse' }}
                >
                    <div className={aboutImage}>
                        <Image
                            src="/images/about/2.jpg"
                            alt="Service Image"
                            width={790}
                            height={760}
                            quality={70}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                    <div className="about-content max-md:pt-10 md:pl-10">
                        <h2 className={title}>Our mission</h2>
                        <h3 className="text-secondary text-2xl mb-12">
                            Our hopes, dreams and where we aim to go.
                        </h3>
                        <p className={desc}>
                            To be the provider of choice for access to education
                            and training and work skill development in areas
                            where access is limited by geography, socio-economic
                            and regional factors.
                        </p>
                        <h3 className="text-secondary text-2xl mb-12">
                            Our why
                        </h3>
                        <p className={desc}>
                            We provide current and relevant accredited, software
                            and non-accredited courses for professional and
                            personal development and continuous learning
                            opportunities for corporate groups and individuals
                            for professional education.
                        </p>
                        {/* <Link href="/about">
                            <a
                                className="boxed-btn text-[18px] leading-[30px]"
                                style={{ color: '#fff' }}
                            >
                                More About Us
                            </a>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Motivations;
