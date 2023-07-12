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
                            We provide current and relevant accredited, software
                            and non-accredited courses for professional and
                            personal development and continuous learning
                            opportunities for corporate groups and individuals
                            for professional education.
                        </h3>
                        <p className={desc}>
                            Established in 2023 in response to demand in the
                            Central and North Central Regions in Victoria for
                            courses both in classroom and online that focus on
                            work skills needed in these regions. Macedon Ranges
                            Education, GoBooks Online and Explore Education and
                            Training currently offers non-accredited courses for
                            CPD/CPE and skill dimension development
                            opportunities in Accounting and Bookkeeping, Payroll
                            Management, Work Skills for entry level job
                            applicants in office environments, Project
                            Management, Office Administration, Business and
                            Leadership for mid-level Business Managers and Small
                            Business Owners. An application will be lodged in
                            mid July 2023 for accreditation as a Registered
                            Training Organisation to offer nationally accredited
                            courses to extrapolate our course offerings as
                            natural extensions of the current non-accredited
                            courses we offer to provide access for learners and
                            empower individuals in the wider community,
                            equipping them with the knowledge, skills, and
                            connections necessary to succeed in their chosen
                            field. Our team is comprised of extremely
                            experienced individuals in each of their operational
                            roles with real world experience and knowledge.
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
