import Link from 'next/link';
import Image from 'next/image';

function Campus() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    return (
        <div id="about" className="about-area md:pt-[250px] pt-[50px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
                    <div className="about-content max-md:pt-10">
                        <h2 className={title}>
                            Our Campus <br /> and Facilities
                        </h2>

                        <p className={desc}>
                            Located at 16 Sydney Street Kilmore Victoria, we are
                            proud custodians of the Kilmore Town Hall built in
                            1894. This two (2) story red brick building was
                            built to house a large police presence in the town
                            in the late 1800’s as Kilmore became a major freight
                            and supply centre. The building is leased from the
                            Mitchell Shire Council on a 2 x 2 x 2 lease and
                            Council have approved its use for and Education and
                            Training Facility. We are located beside the Kilmore
                            Town Library, our Campus is central and accessible
                            in less than 50 minutes’ travel by car from Bendigo,
                            Ballarat, Whittlesea, Tullamarine, Craigieburn, and
                            the Northern suburbs of Melbourne.
                        </p>
                        <h2 className={title}>
                            Our Classrooms <br /> Study Areas
                        </h2>

                        <p className={desc}>
                            Two (2) adjoining small group classrooms are located
                            on the ground floor of our building and each room
                            has the capacity to seat eight (8) students. These
                            rooms are equipped with whiteboards, projectors and
                            students and trainers/facilitators have access to
                            our high speed fibre internet connection. Additional
                            audio support is available to trainers/facilitators
                            by our sound system with via lapel microphones or
                            headsets. These rooms have connectivity to online
                            seminar and live broadcast channels via our student
                            management system and Microsoft Teams.
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
                            src="/images/about/3.png"
                            alt="Service Image"
                            width={590}
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

export default Campus;
