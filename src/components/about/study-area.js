import Link from 'next/link';
import Image from 'next/image';

function StudyArea() {
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
                            src="/images/about/4.png"
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
                        <h2 className={title}>Our Classrooms</h2>
                        <h3 className="text-secondary text-2xl mb-12">
                            Where you can fullfill your hopes and dreams.
                        </h3>

                        <p className={desc}>
                            Our upstairs classroom has the capacity to seat 25
                            students and is equipped with whiteboards and
                            projectors. Students and trainers/facilitators have
                            access to our high speed fibre internet connection.
                            Additional audio support is available to
                            trainers/facilitators by our sound system with via
                            lapel microphones or headsets. These rooms have
                            connectivity to online seminar and live broadcast
                            channels via our student management system and
                            Microsoft Teams. A feature of our upstairs classroom
                            is the small group study and activity areas. In this
                            space students can undertake self-study or small
                            group activities whilst having access to the
                            internet and connectivity to online seminar and live
                            broadcast channels via our student management system
                            and Microsoft Teams. Students are also provided with
                            a Student Lounge area for breaks and self-study.
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

export default StudyArea;
