import Link from 'next/link';
import Image from 'next/image';

function About() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    return (
        <div id="about" className="about-area md:pt-[150px] pt-[50px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
                    <div className="about-content max-md:pt-10">
                        <span className={subTitle}>About Us</span>
                        <h2 className={title}>
                            Over 10 years of experience in <br /> education
                        </h2>
                        <h3 className="text-secondary text-2xl mb-12">
                            We know that good education <br /> comes from good
                            people
                        </h3>
                        <p className={desc}>
                            Macedon Ranges Education is a small
                            community-focused education provider in the
                            beautiful Macedon Ranges region of Victoria,
                            Australia. With over 10 years of experience, we have
                            been delivering high-quality courses in finance,
                            leadership, and business to individuals seeking to
                            enhance their knowledge and skills in these areas.
                            Our commitment to community engagement sets us
                            apart. We believe in empowering individuals to
                            thrive and contribute to the local community through
                            education and professional development. Our courses
                            are designed to meet the specific needs of students,
                            equipping them with practical skills and knowledge
                            that are directly applicable to real-world
                            scenarios.
                        </p>
                        <Link href="/about">
                            <a
                                className="boxed-btn text-[18px] leading-[30px]"
                                style={{ color: '#fff' }}
                            >
                                More About Us
                            </a>
                        </Link>
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src="/images/about/1.jpg"
                            alt="Service Image"
                            width={390}
                            height={760}
                            quality={70}
                            layout="fixed"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
